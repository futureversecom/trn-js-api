import { describe, expect, jest, test } from "@jest/globals";
import { sign } from "@therootnetwork/extrinsic/libs/sign";
import { Extrinsic, ExtrinsicSigner, Result } from "@therootnetwork/extrinsic/types";
import { err, ok } from "neverthrow";

describe("sign", () => {
	test("sign a given extrinsic ends with sender address mismatched error", async () => {
		const extrinsic = { ok: false, value: new Error("error") };
		const error = new Error("error");
		const signer = jest.fn(() => err(error));
		const signResult = await sign(
			extrinsic as Result<never, Error>,
			signer as unknown as ExtrinsicSigner
		);

		expect(signResult.ok).toEqual(false);
		expect((signResult.value as Error).message).toStrictEqual(`error`);
	});

	test("sign a given extrinsic with a signer ends with sign error", async () => {
		const extrinsic = {};
		const error = new Error("error");
		const signer = jest.fn(() => err(error));
		const signResult = await sign(extrinsic as Extrinsic, signer as unknown as ExtrinsicSigner);

		expect(signer).toBeCalledTimes(1);
		expect(signResult.ok).toEqual(false);
		expect((signResult.value as Error).message).toStrictEqual(`Sign::error`);
	});

	test("sign a given extrinsic with a signer ends with sign ok", async () => {
		const extrinsic = {};
		const signer = jest.fn(() => ok(extrinsic));
		const signResult = await sign(extrinsic as Extrinsic, signer as unknown as ExtrinsicSigner);

		expect(signer).toBeCalledTimes(1);
		expect(signResult.ok).toEqual(true);
		expect(signResult.value).toStrictEqual(extrinsic);
	});
});
