import { ApiPromise } from "@polkadot/api";
import { describe, expect, jest, test } from "@jest/globals";
import { signWithNativeKeyring } from "@therootnetwork/extrinsic/libs/signWithNativeKeyring";
import { Extrinsic, WrappedExtrinsic } from "@therootnetwork/extrinsic/types";
import { Err } from "neverthrow";

describe("signWithNativeKeyring", () => {
	test("signs an extrinsic with an ok result", async () => {
		const api = {
			genesisHash: "0x0",
			runtimeVersion: 1,
			registry: {
				signedExtensions: [],
				createTypeUnsafe: jest.fn(() => ({})),
			},
			extrinsicVersion: 1,
			derive: {
				tx: {
					signingInfo: jest.fn(() => {
						return Promise.resolve({
							header: { number: 1, hash: "0x0" },
							mortalLength: 10,
							nonce: 0,
						});
					}),
				},
			},
		};

		const extrinsic = {
			sign: jest.fn(),
		};

		const signer = signWithNativeKeyring(
			api as unknown as ApiPromise,
			"0x1000000000000000000000000000000000000000000000000000000000000000"
		);
		const signResult = await signer.sign({
			extrinsic: extrinsic as unknown as Extrinsic,
			senderAddress: "0x0",
		});

		expect(signResult.isOk()).toBe(true);
		expect(extrinsic.sign).toHaveBeenCalledTimes(1);
		expect(extrinsic.sign.mock.calls[0][0]).toBeDefined();
		expect(extrinsic.sign.mock.calls[0][1]).toMatchObject({
			blockHash: "0x0",
			nonce: 0,
			era: {},
			genesisHash: "0x0",
			runtimeVersion: 1,
			signedExtensions: [],
			version: 1,
		});
	});

	test("signature options creation ends with thrown error", async () => {
		const api = {
			derive: {
				tx: {
					signingInfo: jest.fn((address) => {
						return Promise.reject(address === "0x0" ? new Error("error") : "error");
					}),
				},
			},
		};

		const signer = signWithNativeKeyring(
			api as unknown as ApiPromise,
			"0x1000000000000000000000000000000000000000000000000000000000000000"
		);
		const signResult1 = await signer.sign({ senderAddress: "0x0" } as WrappedExtrinsic);
		expect(signResult1.isErr()).toBe(true);
		expect((signResult1 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((signResult1 as Err<never, Error>).error.message).toEqual(
			"NativeKeyringProvider::error"
		);

		const signResult2 = await signer.sign({ senderAddress: "0x1" } as WrappedExtrinsic);
		expect(signResult2.isErr()).toBe(true);
		expect((signResult2 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((signResult2 as Err<never, Error>).error.message).toEqual(
			`NativeKeyringProvider::Unable to fetch signing info for "0x1"`
		);
	});
});
