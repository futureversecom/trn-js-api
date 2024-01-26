import "@therootnetwork/api-types";
import { ApiPromise } from "@polkadot/api";
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";
import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import dotenv from "dotenv";
import { resolve } from "node:path";
import { createActions } from "@therootnetwork/extrinsic/libs/createActions";
import { newFuturepassWrapper } from "@therootnetwork/extrinsic/libs/wrapWithFuturepass";
import { newFeeProxyWrapper } from "@therootnetwork/extrinsic/libs/wrapWithFeeProxy";
import { newNativeWalletSigner } from "@therootnetwork/extrinsic/libs/signWithNativeWallet";
import { ExtrinsicResult } from "@therootnetwork/extrinsic/types";
import { filterExtrinsicEvents } from "./utils";

describe("createActions", () => {
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
		const { signAndSend } = createActions(
			api,
			senderAddress,
			[newFuturepassWrapper(), newFeeProxyWrapper(17508)],
			newNativeWalletSigner(process.env.CALLER_PRIVATE_KEY as unknown as string)
		);

		{
			const remarkResult = await signAndSend(api.tx.system.remarkWithEvent("hello"));
			expect(remarkResult.ok).toBe(true);
			const { id, result } = remarkResult.value as ExtrinsicResult;

			expect(id).toBeDefined();
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
		}

		{
			const transferResult = await signAndSend(api.tx.assets.transfer(2, senderAddress, "100000"));
			expect(transferResult.ok).toBe(true);
			const { id, result } = transferResult.value as ExtrinsicResult;

			expect(id).toBeDefined();
			const [feeProxyEvent, swapEvent, futurepassEvent, transferEvent] = filterExtrinsicEvents(
				result.events,
				[
					"FeeProxy.CallWithFeePreferences",
					"Dex.Swap",
					"Futurepass.ProxyExecuted",
					"Assets.Transferred",
				]
			);

			expect(feeProxyEvent).toBeDefined();
			expect(swapEvent).toBeDefined();
			expect(futurepassEvent).toBeDefined();
			expect(transferEvent).toBeDefined();
		}
	}, 10000);
});
