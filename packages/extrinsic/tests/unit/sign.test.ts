import { describe, expect, jest, test } from "@jest/globals";
import { sign } from "@therootnetwork/extrinsic/libs/sign";
import { Extrinsic, SignProvider, WrappedExtrinsic } from "@therootnetwork/extrinsic/types";
import { err } from "neverthrow";

describe("sign", () => {
	test("sign a given extrinsic ends with sender address mismatched error", async () => {
		const wrappedEx = { extrinsic: {}, senderAddress: "0x0" };
		const error = new Error("error");
		const signer = {
			id: "nativeKeyring",
			sign: jest.fn(() => err(error)),
		};
		const signResult = await sign(
			wrappedEx as WrappedExtrinsic,
			"0x1",
			signer as unknown as SignProvider
		);

		expect(signResult.ok).toEqual(false);
		expect((signResult.value as Error).message).toStrictEqual(
			`Sign::Received sender address "0x1" is different with the value inside the wrapped extrinsic`
		);
	});

	test("sign a given extrinsic with `nativeKeyring` signer ends with sign error", async () => {
		const extrinsic = {};
		const senderAddress = "0x0";
		const error = new Error("error");
		const signer = {
			id: "nativeKeyring",
			sign: jest.fn(() => err(error)),
		};
		const signResult = await sign(
			extrinsic as Extrinsic,
			senderAddress,
			signer as unknown as SignProvider
		);

		expect(signer.sign).toBeCalledTimes(1);
		expect(signResult.ok).toEqual(false);
		expect(signResult.value).toStrictEqual(error);
	});
});
