import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";
import { sign } from "@therootnetwork/extrinsic/libs/sign";
import { signWithNativeWallet } from "@therootnetwork/extrinsic/libs/signWithNativeWallet";
import { send } from "@therootnetwork/extrinsic/libs/send";
import dotenv from "dotenv";
import { resolve } from "node:path";
import { ExtrinsicResult } from "@therootnetwork/extrinsic/types";

describe("send", () => {
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

	test("sends a given extrinsic", async () => {
		const senderAddress = "0xE04CC55ebEE1cBCE552f250e85c57B70B2E2625b";
		const remarkCall = api.tx.system.remarkWithEvent("hello");
		const signResult = await sign(
			remarkCall,
			signWithNativeWallet(api, senderAddress, process.env.CALLER_PRIVATE_KEY as unknown as string)
		);
		const sendResult = await send(signResult, (status, result) => {
			expect(["Future", "Ready", "Broadcast", "Retracted"].includes(status)).toBe(true);
			expect(result).toBeDefined();
		});

		expect(sendResult.ok).toBe(true);
		const { result } = sendResult.value as ExtrinsicResult;
		const remarkEvent = result.findRecord("system", "Remarked");

		expect(remarkEvent).toBeDefined();
	}, 10000);
});
