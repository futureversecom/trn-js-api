import { ApiPromise } from "@polkadot/api";
import { describe, expect, jest, test } from "@jest/globals";
import { estimate } from "@therootnetwork/extrinsic/libs/estimate";
import { Extrinsic, Result } from "@therootnetwork/extrinsic/types";

describe("estimate", () => {
	test("estimates a given extrinsic ends with ok result", async () => {
		const extrinsic = {
			paymentInfo: jest.fn(() =>
				Promise.resolve({ isEmpty: false, partialFee: { toString: () => "100000" } })
			),
		};

		const estimateResult = await estimate(
			{} as unknown as ApiPromise,
			"0x0",
			extrinsic as unknown as Extrinsic
		);

		expect(extrinsic.paymentInfo).toBeCalledTimes(1);
		expect(estimateResult.ok).toEqual(true);
		expect(estimateResult.value).toStrictEqual(BigInt(100000));
	});

	test("estimates a given extrinsic ends with error from received result", async () => {
		const extrinsic = { ok: false, value: new Error("error") };
		const estimateResult = await estimate(
			{} as unknown as ApiPromise,
			"0x0",
			extrinsic as Result<never, Error>
		);

		expect(estimateResult.ok).toEqual(false);
		expect((estimateResult.value as Error).message).toStrictEqual(`error`);
	});

	test("estimates a given extrinsic with a fetch call ends with error", async () => {
		const extrinsic = {
			paymentInfo: jest.fn(() => Promise.reject("error")),
		};

		const estimateResult = await estimate(
			{} as unknown as ApiPromise,
			"0x0",
			extrinsic as unknown as Extrinsic
		);

		expect(estimateResult.ok).toEqual(false);
		expect((estimateResult.value as Error).message).toStrictEqual(
			`Estimate::Unable to fetch payment info for "0x0"`
		);
	});
});
