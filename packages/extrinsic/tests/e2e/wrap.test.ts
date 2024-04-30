import { ApiPromise } from "@polkadot/api";
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";
import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import dotenv from "dotenv";
import { resolve } from "node:path";
import { wrap } from "@therootnetwork/extrinsic/libs/wrap";
import { wrapWithFuturepass } from "@therootnetwork/extrinsic/libs/wrapWithFuturepass";
import { wrapWithFeeProxy } from "@therootnetwork/extrinsic/libs/wrapWithFeeProxy";
import { Extrinsic } from "@therootnetwork/extrinsic/types";
import { ISubmittableResult } from "@polkadot/types/types/extrinsic";
import { filterExtrinsicEvents, createKeyringFromSeed } from "@therootnetwork/extrinsic/utils";

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
		const keyring = createKeyringFromSeed(process.env.CALLER_PRIVATE_KEY as unknown as string);
		const remarkCall = api.tx.system.remarkWithEvent("Hello");
		const wrapResult = await wrap(remarkCall, [wrapWithFuturepass(api, keyring.address)]);

		expect(wrapResult.ok).toBe(true);
		const extrinsic = wrapResult.value as Extrinsic;
		return new Promise((resolve) => {
			let unsubscribe: () => void;
			extrinsic
				.signAndSend(keyring, (result: ISubmittableResult) => {
					if (!result.status.isInBlock && !result.status.isFinalized) return;
					const [futurepassEvent, remarkEvent] = filterExtrinsicEvents(result.events, [
						"futurepass.ProxyExecuted",
						"system.Remarked",
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
		const keyring = createKeyringFromSeed(process.env.CALLER_PRIVATE_KEY as unknown as string);
		const assetId = 17508;
		const remarkCall = api.tx.system.remarkWithEvent("Hello");
		const wrapResult = await wrap(remarkCall, [wrapWithFeeProxy(api, keyring.address, assetId)]);

		expect(wrapResult.ok).toBe(true);
		const extrinsic = wrapResult.value as Extrinsic;
		return new Promise((resolve) => {
			let unsubscribe: () => void;
			extrinsic
				.signAndSend(keyring, (result: ISubmittableResult) => {
					if (!result.status.isInBlock && !result.status.isFinalized) return;
					const [feeProxyEvent, swapEvent, remarkEvent] = filterExtrinsicEvents(result.events, [
						"feeProxy.CallWithFeePreferences",
						"dex.Swap",
						"system.Remarked",
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
		const keyring = createKeyringFromSeed(process.env.CALLER_PRIVATE_KEY as unknown as string);
		const assetId = 17508;
		const remarkCall = api.tx.system.remarkWithEvent("Hello");
		const wrapResult = await wrap(remarkCall, [
			wrapWithFuturepass(api, keyring.address),
			wrapWithFeeProxy(api, keyring.address, assetId),
		]);

		expect(wrapResult.ok).toBe(true);
		const extrinsic = wrapResult.value as Extrinsic;
		return new Promise((resolve) => {
			let unsubscribe: () => void;
			extrinsic
				.signAndSend(keyring, (result: ISubmittableResult) => {
					if (!result.status.isInBlock && !result.status.isFinalized) return;
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
					unsubscribe?.();
					resolve(result);
				})
				.then((unsub) => (unsubscribe = unsub));
		});
	}, 8000);
});
