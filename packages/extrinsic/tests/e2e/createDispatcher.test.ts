import { ApiPromise } from "@polkadot/api";
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";
import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import dotenv from "dotenv";
import { resolve } from "node:path";
import { createDispatcher } from "@therootnetwork/extrinsic/libs/createDispatcher";
import { futurepassWrapper } from "@therootnetwork/extrinsic/libs/wrapWithFuturepass";
import { feeProxyWrapper } from "@therootnetwork/extrinsic/libs/wrapWithFeeProxy";
import { nativeWalletSigner } from "@therootnetwork/extrinsic/libs/signWithNativeWallet";
import { ExtrinsicResult } from "@therootnetwork/extrinsic/types";
import { deriveAddressPair, filterExtrinsicEvents } from "@therootnetwork/extrinsic/utils";
import { xrplWalletSigner } from "@therootnetwork/extrinsic/libs/signWithXrplWallet";
import { sign } from "ripple-keypairs";
import { encode, encodeForSigning } from "xrpl-binary-codec-prerelease";
import { Wallet } from "ethers";
import { deriveAddress } from "ripple-keypairs";
import { derive } from "xrpl-accountlib";
import { computePublicKey } from "@ethersproject/signing-key";

describe("createDispatcher", () => {
	let api: ApiPromise;
	const senderAddress = "0xE04CC55ebEE1cBCE552f250e85c57B70B2E2625b";

	beforeAll(async () => {
		dotenv.config({ path: resolve(`${__dirname}/.env.test`) });

		api = await ApiPromise.create({
			...getApiOptions(),
			noInitWarn: true,
			...getPublicProvider("porcini"),
		});
	});

	afterAll(async () => {
		await api.disconnect();
	});

	test("signs and sends multiple extrinsic", async () => {
		const { signAndSend } = createDispatcher(
			api,
			senderAddress,
			[futurepassWrapper(), feeProxyWrapper(17508)],
			nativeWalletSigner(process.env.CALLER_PRIVATE_KEY as unknown as string)
		);

		{
			const remarkResult = await signAndSend(api.tx.system.remarkWithEvent("hello"));
			expect(remarkResult.ok).toBe(true);
			const { id, result } = remarkResult.value as ExtrinsicResult;

			expect(id).toBeDefined();
			const [feeProxyEvent, swapEvent, futurepassEvent, remarkEvent] = filterExtrinsicEvents(
				result.events,
				[
					"feeProxy.CallWithFeePreferences",
					"dex.Swap",
					"futurepass.ProxyExecuted",
					"system.Remarked",
				]
			);

			expect(feeProxyEvent).toBeDefined();
			expect(swapEvent).toBeDefined();
			expect(futurepassEvent).toBeDefined();
			expect(remarkEvent).toBeDefined();
		}

		{
			const transferResult = await signAndSend(api.tx.assets.transfer(2, senderAddress, "100000"));
			expect(transferResult.ok).toBe(true);
			const { id, result } = transferResult.value as ExtrinsicResult;

			expect(id).toBeDefined();
			const [feeProxyEvent, swapEvent, futurepassEvent, transferEvent] = filterExtrinsicEvents(
				result.events,
				[
					"feeProxy.CallWithFeePreferences",
					"dex.Swap",
					"futurepass.ProxyExecuted",
					"assets.Transferred",
				]
			);

			expect(feeProxyEvent).toBeDefined();
			expect(swapEvent).toBeDefined();
			expect(futurepassEvent).toBeDefined();
			expect(transferEvent).toBeDefined();
		}
	}, 10000);

	test("esitmate extrinsic in different asset ids", async () => {
		const { estimate } = createDispatcher(
			api,
			senderAddress,
			[futurepassWrapper(), feeProxyWrapper(17508)],
			nativeWalletSigner(process.env.CALLER_PRIVATE_KEY as unknown as string)
		);

		const estimateInXRPResult = await estimate(api.tx.system.remarkWithEvent("hello"));
		expect(estimateInXRPResult.ok).toBe(true);
		const xrpFee = estimateInXRPResult.value as bigint;
		expect(xrpFee).toBeGreaterThan(BigInt(0));

		const estimateInASTOResult = await estimate(api.tx.system.remarkWithEvent("hello"), 17508);
		expect(estimateInASTOResult.ok).toBe(true);
		const astoFee = estimateInASTOResult.value as bigint;
		expect(astoFee).toBeGreaterThan(BigInt(0));
	}, 10000);

	test("signs and sends with XRPL signer", async () => {
		const sender = new Wallet(process.env.CALLER_PRIVATE_KEY as string);
		const publicKey = sender.signingKey.compressedPublicKey;

		const { signAndSend } = createDispatcher(
			api,
			sender.address,
			[],
			xrplWalletSigner((Memos) => {
				const payload = {
					Memos,
					AccountTxnID: "16969036626990000000000000000000F236FD752B5E4C84810AB3D41A3C2580",
					SigningPubKey: publicKey.slice(2),
					Account: deriveAddress(publicKey.slice(2)),
				};
				const signature = sign(encodeForSigning(payload), sender.privateKey.slice(2));

				return new Promise((resolve) => resolve({ signature, message: encode(payload) }));
			})
		);

		const remarkResult = await signAndSend(api.tx.system.remarkWithEvent("hello"));

		expect(remarkResult.ok).toBe(true);
		const { id, result } = remarkResult.value as ExtrinsicResult;

		expect(id).toBeDefined();
		const [remarkEvent] = filterExtrinsicEvents(result.events, ["system.Remarked"]);

		expect(remarkEvent).toBeDefined();
	}, 10000);

	test("signs and sends with XRPL Ed25519 signer", async () => {
		const importedAccount = derive.familySeed("sEdS4rAgVysUtD5Zmm9F8i8uJBGik4K");
		const { keypair } = derive.privatekey(importedAccount.keypair.privateKey as string);
		const publicKey = computePublicKey(`0x${keypair.publicKey as string}`, true);

		const [ethAddress] = deriveAddressPair(publicKey);

		const { signAndSend: signAndSendNative } = createDispatcher(
			api,
			senderAddress,
			[],
			nativeWalletSigner(process.env.CALLER_PRIVATE_KEY as unknown as string)
		);

		const transferResult = await signAndSendNative(
			api.tx.assetsExt.transfer(2, ethAddress, 3_000_000, true)
		);
		expect(transferResult.ok).toBe(true);

		const { signAndSend } = createDispatcher(
			api,
			ethAddress,
			[],
			xrplWalletSigner((Memos) => {
				const payload = {
					Memos,
					AccountTxnID: "16969036626990000000000000000000F236FD752B5E4C84810AB3D41A3C2580",
					SigningPubKey: publicKey.slice(2),
					Account: deriveAddress(publicKey.slice(2)),
				};
				const signature = sign(encodeForSigning(payload), keypair.privateKey as string);

				return new Promise((resolve) => resolve({ signature, message: encode(payload) }));
			})
		);

		const remarkResult = await signAndSend(api.tx.system.remarkWithEvent("hello"));

		expect(remarkResult.ok).toBe(true);
		const { id, result } = remarkResult.value as ExtrinsicResult;

		expect(id).toBeDefined();
		const [remarkEvent] = filterExtrinsicEvents(result.events, ["system.Remarked"]);

		expect(remarkEvent).toBeDefined();
	}, 10000);

	test("estimates XRPL extrinsic correctly", async () => {
		const sender = new Wallet(process.env.CALLER_PRIVATE_KEY as string);
		const publicKey = sender.signingKey.compressedPublicKey;

		const { signAndSend, estimate } = createDispatcher(
			api,
			sender.address,
			[],
			xrplWalletSigner((Memos) => {
				const payload = {
					Memos,
					AccountTxnID: "16969036626990000000000000000000F236FD752B5E4C84810AB3D41A3C2580",
					SigningPubKey: publicKey.slice(2),
					Account: deriveAddress(publicKey.slice(2)),
				};
				const signature = sign(encodeForSigning(payload), sender.privateKey.slice(2));

				return new Promise((resolve) => resolve({ signature, message: encode(payload) }));
			}),
			true
		);

		const extrinsic = api.tx.system.remarkWithEvent("hello");

		const estimatedFee = await estimate(extrinsic);
		expect(estimatedFee.ok).toBe(true);

		const remarkResult = await signAndSend(extrinsic);
		expect(remarkResult.ok).toBe(true);
		const { id, result } = remarkResult.value as ExtrinsicResult;

		expect(id).toBeDefined();
		const [remarkEvent, feeEvent] = filterExtrinsicEvents(result.events, [
			"system.Remarked",
			"assetsExt.InternalWithdraw",
		]);

		expect(remarkEvent).toBeDefined();
		expect(feeEvent).toBeDefined();

		if (!feeEvent) {
			throw new Error("Fee event not found");
		}
		const feeEventData = (feeEvent.toJSON().event as { data: [number, string, number] }).data;

		expect(estimatedFee.value).toBeGreaterThanOrEqual(feeEventData[2]);
	}, 10000);
});
