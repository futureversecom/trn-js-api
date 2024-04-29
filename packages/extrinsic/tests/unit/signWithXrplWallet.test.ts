import { ApiPromise } from "@polkadot/api";
import { describe, expect, jest, test } from "@jest/globals";
import { signWithXrplWallet } from "@therootnetwork/extrinsic/libs/signWithXrplWallet";
import { Extrinsic } from "@therootnetwork/extrinsic/types";
import { Err } from "neverthrow";
import { XummJsonTransaction } from "xumm-sdk/dist/src/types";

jest.mock("xrpl-binary-codec-prerelease", () => ({
	__esModule: true,
	encode: jest.fn(() => "0x0"),
}));

describe("signWithXrplWallet", () => {
	test("signs an extrinsic with an ok result", async () => {
		const api = {
			genesisHash: {
				toHex: jest.fn(() => "0x0"),
			},
			runtimeVersion: 1,
			registry: {
				signedExtensions: [],
				createTypeUnsafe: jest.fn(() => ({
					toPayload: () => "0x12",
					toRaw: () => ({ data: "0x0" }),
				})),
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
			query: {
				system: {
					number: jest.fn(() => Promise.resolve(1)),
				},
			},
			tx: {
				xrpl: {
					transact: jest.fn(),
				},
			},
		};
		const extrinsic = {
			toHex: jest.fn(() => "0xa"),
		} as unknown as Extrinsic;

		const senderAddress = "0x0";
		const signer = signWithXrplWallet(
			api as unknown as ApiPromise,
			senderAddress,
			jest.fn(() =>
				Promise.resolve({
					signature: "0x11",
					payload: {} as XummJsonTransaction,
				})
			)
		);

		const signResult = await signer(extrinsic);

		expect(signResult.isOk()).toBe(true);
		expect(extrinsic.toHex).toHaveBeenCalledTimes(1);
	});

	test("signature options creation ends with thrown error", async () => {
		const api = {
			genesisHash: {
				toHex: jest.fn(() => "0x0"),
			},
			derive: {
				tx: {
					signingInfo: jest.fn((address) => {
						return Promise.reject(address === "0x0" ? new Error("error") : "error");
					}),
				},
			},
		};
		const extrinsic = {
			toHex: jest.fn(() => "0xa"),
		} as unknown as Extrinsic;

		const signer1 = signWithXrplWallet(
			api as unknown as ApiPromise,
			"0x0",
			jest.fn(() =>
				Promise.resolve({
					signature: "0x11",
					payload: {} as XummJsonTransaction,
				})
			)
		);
		const signResult1 = await signer1(extrinsic);
		expect(signResult1.isErr()).toBe(true);
		expect((signResult1 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((signResult1 as Err<never, Error>).error.message).toEqual(
			'XrplWallet::Unable to fetch signing info for "0x0"'
		);
		expect((signResult1 as Err<never, Error>).error.cause).toEqual(new Error("error"));

		const signer2 = signWithXrplWallet(
			api as unknown as ApiPromise,
			"0x1",
			jest.fn(() =>
				Promise.resolve({
					signature: "0x11",
					payload: {} as XummJsonTransaction,
				})
			)
		);

		const signResult2 = await signer2(extrinsic);
		expect(signResult2.isErr()).toBe(true);
		expect((signResult2 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((signResult2 as Err<never, Error>).error.message).toEqual(
			`XrplWallet::Unable to fetch signing info for "0x1"`
		);
		expect((signResult2 as Err<never, Error>).error.cause).toEqual("error");
	});

	test("sign request ends with thrown error", async () => {
		const api = {
			genesisHash: {
				toHex: jest.fn(() => "0x0"),
			},
			runtimeVersion: 1,
			registry: {
				signedExtensions: [],
				createTypeUnsafe: jest.fn(() => ({ toRaw: () => ({ data: "0x0" }) })),
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
			query: {
				system: {
					number: jest.fn(() => Promise.resolve(1)),
				},
			},
		};
		const extrinsic = {
			toHex: jest.fn(() => "0xa"),
		} as unknown as Extrinsic;

		const signer1 = signWithXrplWallet(
			api as unknown as ApiPromise,
			"0x0",
			jest.fn(() => Promise.reject(new Error("error")))
		);
		const signResult1 = await signer1(extrinsic);
		expect(signResult1.isErr()).toBe(true);
		expect((signResult1 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((signResult1 as Err<never, Error>).error.message).toEqual(
			'XrplWallet::Unable to request signing for "0x0"'
		);
		expect((signResult1 as Err<never, Error>).error.cause).toEqual(new Error("error"));

		const signer2 = signWithXrplWallet(
			api as unknown as ApiPromise,
			"0x1",
			jest.fn(() => Promise.reject("error"))
		);

		const signResult2 = await signer2(extrinsic);
		expect(signResult2.isErr()).toBe(true);
		expect((signResult2 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((signResult2 as Err<never, Error>).error.message).toEqual(
			`XrplWallet::Unable to request signing for "0x1"`
		);
		expect((signResult2 as Err<never, Error>).error.cause).toEqual("error");
	});
});
