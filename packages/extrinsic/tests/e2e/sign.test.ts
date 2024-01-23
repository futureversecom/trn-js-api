import { ApiPromise } from "@polkadot/api";
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";
import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import dotenv from "dotenv";
import { resolve } from "node:path";
import { sign } from "@therootnetwork/extrinsic/libs/sign";
import { signWithNativeKeyring } from "@therootnetwork/extrinsic/libs/signWithNativeKeyring";
import { filterExtrinsicEvents } from "./utils";
import { WrappedExtrinsic } from "@therootnetwork/extrinsic/types";
import { wrapWithFuturepass } from "@therootnetwork/extrinsic/libs/wrapWithFuturepass";
import { wrap } from "@therootnetwork/extrinsic/libs/wrap";
import { signWithEthSigner } from "@therootnetwork/extrinsic/libs/signWithEthSigner";
import { Wallet } from "ethers";

describe("sign", () => {
	let api: ApiPromise;

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

	test("signs a given extrinsic with native keyring", async () => {
		const senderAddress = "0xE04CC55ebEE1cBCE552f250e85c57B70B2E2625b";
		const remarkCall = api.tx.system.remarkWithEvent("hello");
		const wExtrinsic = await sign(
			remarkCall,
			senderAddress,
			signWithNativeKeyring(api, process.env.CALLER_PRIVATE_KEY as unknown as string)
		);

		expect(wExtrinsic.ok).toBe(true);
		const { extrinsic } = wExtrinsic.value as WrappedExtrinsic;
		return new Promise((resolve) => {
			let unsubscribe: () => void;
			extrinsic
				.send((result) => {
					if (!result.status.isInBlock && !result.status.isFinalized) return;
					const [remarkEvent] = filterExtrinsicEvents(result.events, ["System.Remarked"]);
					expect(remarkEvent).toBeDefined();
					unsubscribe?.();
					resolve(result);
				})
				.then((unsub) => (unsubscribe = unsub));
		});
	}, 8000);

	test("signs a given extrinsic with eth signer", async () => {
		const senderAddress = "0xE04CC55ebEE1cBCE552f250e85c57B70B2E2625b";
		const remarkCall = api.tx.system.remarkWithEvent("hello");
		const wallet = new Wallet(process.env.CALLER_PRIVATE_KEY as unknown as string);
		const signer = {
			async signMessage(message: string) {
				return await wallet.signMessage(Buffer.from(message.slice(2), "hex"));
			},
		};

		const wExtrinsic = await sign(remarkCall, senderAddress, signWithEthSigner(api, signer));

		expect(wExtrinsic.ok).toBe(true);
		const { extrinsic } = wExtrinsic.value as WrappedExtrinsic;
		return new Promise((resolve) => {
			let unsubscribe: () => void;
			extrinsic
				.send((result) => {
					if (!result.status.isInBlock && !result.status.isFinalized) return;
					const [remarkEvent] = filterExtrinsicEvents(result.events, ["System.Remarked"]);
					expect(remarkEvent).toBeDefined();
					unsubscribe?.();
					resolve(result);
				})
				.then((unsub) => (unsubscribe = unsub));
		});
	}, 8000);

	test("signs a given wrapped extrinsic with native keyring", async () => {
		const senderAddress = "0xE04CC55ebEE1cBCE552f250e85c57B70B2E2625b";
		const remarkCall = api.tx.system.remarkWithEvent("hello");
		const wrapResult = await wrap(remarkCall, senderAddress, [wrapWithFuturepass(api)]);

		expect(wrapResult.ok).toBe(true);

		const signResult = await sign(
			wrapResult.value as WrappedExtrinsic,
			senderAddress,
			signWithNativeKeyring(api, process.env.CALLER_PRIVATE_KEY as unknown as string)
		);

		expect(signResult.ok).toBe(true);
		const { extrinsic } = signResult.value as WrappedExtrinsic;
		return new Promise((resolve) => {
			let unsubscribe: () => void;
			extrinsic
				.send((result) => {
					if (!result.status.isInBlock && !result.status.isFinalized) return;
					const [futurepassEvent, remarkEvent] = filterExtrinsicEvents(result.events, [
						"Futurepass.ProxyExecuted",
						"System.Remarked",
					]);
					expect(futurepassEvent).toBeDefined();
					expect(remarkEvent).toBeDefined();
					unsubscribe?.();
					resolve(result);
				})
				.then((unsub) => (unsubscribe = unsub));
		});
	}, 8000);

	test("signs a given wrapped extrinsic with eth signer", async () => {
		const senderAddress = "0xE04CC55ebEE1cBCE552f250e85c57B70B2E2625b";
		const remarkCall = api.tx.system.remarkWithEvent("hello");
		const wrapResult = await wrap(remarkCall, senderAddress, [wrapWithFuturepass(api)]);

		expect(wrapResult.ok).toBe(true);

		const wallet = new Wallet(process.env.CALLER_PRIVATE_KEY as unknown as string);
		const signer = {
			async signMessage(message: string) {
				return await wallet.signMessage(Buffer.from(message.slice(2), "hex"));
			},
		};

		const signResult = await sign(
			wrapResult.value as WrappedExtrinsic,
			senderAddress,
			signWithEthSigner(api, signer)
		);

		expect(signResult.ok).toBe(true);
		const { extrinsic } = signResult.value as WrappedExtrinsic;
		return new Promise((resolve) => {
			let unsubscribe: () => void;
			extrinsic
				.send((result) => {
					if (!result.status.isInBlock && !result.status.isFinalized) return;
					const [futurepassEvent, remarkEvent] = filterExtrinsicEvents(result.events, [
						"Futurepass.ProxyExecuted",
						"System.Remarked",
					]);
					expect(futurepassEvent).toBeDefined();
					expect(remarkEvent).toBeDefined();
					unsubscribe?.();
					resolve(result);
				})
				.then((unsub) => (unsubscribe = unsub));
		});
	}, 8000);
});
