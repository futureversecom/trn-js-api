import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";
import { sign } from "@therootnetwork/extrinsic/libs/sign";
import { signWithEthereumWallet } from "@therootnetwork/extrinsic/libs/signWithEthereumWallet";
import { signWithNativeWallet } from "@therootnetwork/extrinsic/libs/signWithNativeWallet";
import { wrap } from "@therootnetwork/extrinsic/libs/wrap";
import { wrapWithFuturepass } from "@therootnetwork/extrinsic/libs/wrapWithFuturepass";
import { Extrinsic } from "@therootnetwork/extrinsic/types";
import dotenv from "dotenv";
import { Wallet } from "ethers";
import { resolve } from "node:path";
import { filterExtrinsicEvents } from "./utils";

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

	test("signs a given extrinsic with native wallet", async () => {
		const senderAddress = "0xE04CC55ebEE1cBCE552f250e85c57B70B2E2625b";
		const remarkCall = api.tx.system.remarkWithEvent("hello");
		const signResult = await sign(
			remarkCall,
			signWithNativeWallet(api, senderAddress, process.env.CALLER_PRIVATE_KEY as unknown as string)
		);

		expect(signResult.ok).toBe(true);
		const extrinsic = signResult.value as Extrinsic;
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

	test("signs a given extrinsic with ethereum wallet", async () => {
		const senderAddress = "0xE04CC55ebEE1cBCE552f250e85c57B70B2E2625b";
		const remarkCall = api.tx.system.remarkWithEvent("hello");
		const wallet = new Wallet(process.env.CALLER_PRIVATE_KEY as unknown as string);
		const signer = (message: string) => wallet.signMessage(Buffer.from(message.slice(2), "hex"));

		const signResult = await sign(remarkCall, signWithEthereumWallet(api, senderAddress, signer));

		expect(signResult.ok).toBe(true);
		const extrinsic = signResult.value as Extrinsic;
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

	test("signs a given wrapped extrinsic with native wallet", async () => {
		const senderAddress = "0xE04CC55ebEE1cBCE552f250e85c57B70B2E2625b";
		const remarkCall = api.tx.system.remarkWithEvent("hello");
		const wrapResult = await wrap(remarkCall, [wrapWithFuturepass(api, senderAddress)]);

		const signResult = await sign(
			wrapResult,
			signWithNativeWallet(api, senderAddress, process.env.CALLER_PRIVATE_KEY as unknown as string)
		);

		expect(signResult.ok).toBe(true);
		const extrinsic = signResult.value as Extrinsic;
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

	test("signs a given wrapped extrinsic with ethereum wallet", async () => {
		const senderAddress = "0xE04CC55ebEE1cBCE552f250e85c57B70B2E2625b";
		const remarkCall = api.tx.system.remarkWithEvent("hello");
		const wrapResult = await wrap(remarkCall, [wrapWithFuturepass(api, senderAddress)]);
		const wallet = new Wallet(process.env.CALLER_PRIVATE_KEY as unknown as string);
		const signer = (message: string) => wallet.signMessage(Buffer.from(message.slice(2), "hex"));

		const signResult = await sign(wrapResult, signWithEthereumWallet(api, senderAddress, signer));

		expect(signResult.ok).toBe(true);
		const extrinsic = signResult.value as Extrinsic;
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
