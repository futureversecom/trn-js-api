import { ApiPromise } from "@polkadot/api";
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";
import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import dotenv from "dotenv";
import { resolve } from "node:path";
import { createKeyring, filterExtrinsicEvents } from "./utils";
import { wrap } from "@therootnetwork/extrinsic/libs/wrap";
import { wrapWithFuturepass } from "@therootnetwork/extrinsic/libs/wrapWithFuturepass";
import { WrappedExtrinsic } from "@therootnetwork/extrinsic/types";
import { wrapWithFeeProxy } from "@therootnetwork/extrinsic/libs/wrapWithFeeProxy";

describe("wrap", () => {
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

	test("wraps a given extrinsic with `futurepass.proxyExtrinsic`", async () => {
		const keyring = createKeyring(process.env.CALLER_PRIVATE_KEY as unknown as string);
		const remarkCall = api.tx.system.remarkWithEvent("Hello");
		const wExtrinsic = await wrap(remarkCall, keyring.address, [wrapWithFuturepass(api)]);

		expect(wExtrinsic.ok).toBe(true);
		const { extrinsic } = wExtrinsic.value as WrappedExtrinsic;
		return new Promise((resolve) => {
			let unsubscribe: () => void;
			extrinsic
				.signAndSend(keyring, (result) => {
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

	test("wraps a given extrinsic with `feeProxy.callWithFeePreferences`", async () => {
		const keyring = createKeyring(process.env.CALLER_PRIVATE_KEY as unknown as string);
		const remarkCall = api.tx.system.remarkWithEvent("Hello");
		const wExtrinsic = await wrap(remarkCall, keyring.address, [
			wrapWithFeeProxy(api, { assetId: 17508 }),
		]);

		expect(wExtrinsic.ok).toBe(true);
		const { extrinsic } = wExtrinsic.value as WrappedExtrinsic;
		return new Promise((resolve) => {
			let unsubscribe: () => void;
			extrinsic
				.signAndSend(keyring, (result) => {
					if (!result.status.isInBlock && !result.status.isFinalized) return;
					const [feeProxyEvent, swapEvent, remarkEvent] = filterExtrinsicEvents(result.events, [
						"FeeProxy.CallWithFeePreferences",
						"Dex.Swap",
						"System.Remarked",
					]);
					expect(feeProxyEvent).toBeDefined();
					expect(swapEvent).toBeDefined();
					expect(remarkEvent).toBeDefined();
					unsubscribe?.();
					resolve(result);
				})
				.then((unsub) => (unsubscribe = unsub));
		});
	}, 8000);

	test("wraps a given extrinsic with both `futurepass` and `feeProxy` wrappers", async () => {
		const keyring = createKeyring(process.env.CALLER_PRIVATE_KEY as unknown as string);
		const remarkCall = api.tx.system.remarkWithEvent("Hello");
		const wExtrinsic = await wrap(remarkCall, keyring.address, [
			wrapWithFeeProxy(api, { assetId: 17508 }),
			wrapWithFuturepass(api),
		]);

		expect(wExtrinsic.ok).toBe(true);
		const { extrinsic } = wExtrinsic.value as WrappedExtrinsic;
		return new Promise((resolve) => {
			let unsubscribe: () => void;
			extrinsic
				.signAndSend(keyring, (result) => {
					if (!result.status.isInBlock && !result.status.isFinalized) return;
					const [feeProxyEvent, swapEvent, futurepassEvent, remarkEvent] = filterExtrinsicEvents(
						result.events,
						[
							"FeeProxy.CallWithFeePreferences",
							"Dex.Swap",
							"Futurepass.ProxyExecuted",
							"System.Remarked",
						]
					);
					expect(feeProxyEvent).toBeDefined();
					expect(swapEvent).toBeDefined();
					expect(futurepassEvent).toBeDefined();
					expect(remarkEvent).toBeDefined();
					unsubscribe?.();
					resolve(result);
				})
				.then((unsub) => (unsubscribe = unsub));
		});
	}, 8000);
});
