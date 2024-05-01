import { ApiPromise } from "@polkadot/api";
import { describe, expect, jest, test } from "@jest/globals";
import { signWithEthereumWallet } from "@therootnetwork/extrinsic/libs/signWithEthereumWallet";
import { Extrinsic } from "@therootnetwork/extrinsic/types";
import { Err } from "neverthrow";

describe("signWithEthereumWallet", () => {
	test("signs an extrinsic with an ok result", async () => {
		const api = {
			genesisHash: "0x0",
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
		};

		const senderAddress = "0x0";
		const signer = signWithEthereumWallet(
			api as unknown as ApiPromise,
			senderAddress,
			jest.fn(() => Promise.resolve("0x11"))
		);

		const extrinsic = {
			addSignature: jest.fn(),
		};

		const signResult = await signer(extrinsic as unknown as Extrinsic);

		expect(signResult.isOk()).toBe(true);
		expect(extrinsic.addSignature).toHaveBeenCalledTimes(1);
		expect(extrinsic.addSignature).toHaveBeenCalledWith("0x0", "0x11", "0x12");
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

		const signer1 = signWithEthereumWallet(
			api as unknown as ApiPromise,
			"0x0",
			jest.fn(() => Promise.resolve(""))
		);
		const signResult1 = await signer1({} as unknown as Extrinsic);
		expect(signResult1.isErr()).toBe(true);
		expect((signResult1 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((signResult1 as Err<never, Error>).error.message).toEqual(
			'EthereumWallet::Unable to fetch signing info for "0x0"'
		);
		expect((signResult1 as Err<never, Error>).error.cause).toEqual(new Error("error"));

		const signer2 = signWithEthereumWallet(
			api as unknown as ApiPromise,
			"0x1",
			jest.fn(() => Promise.resolve(""))
		);

		const signResult2 = await signer2({} as unknown as Extrinsic);
		expect(signResult2.isErr()).toBe(true);
		expect((signResult2 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((signResult2 as Err<never, Error>).error.message).toEqual(
			`EthereumWallet::Unable to fetch signing info for "0x1"`
		);
		expect((signResult2 as Err<never, Error>).error.cause).toEqual("error");
	});

	test("sign request ends with thrown error", async () => {
		const api = {
			genesisHash: "0x0",
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
		};

		const signer1 = signWithEthereumWallet(
			api as unknown as ApiPromise,
			"0x0",
			jest.fn(() => Promise.reject(new Error("error")))
		);
		const signResult1 = await signer1({} as unknown as Extrinsic);
		expect(signResult1.isErr()).toBe(true);
		expect((signResult1 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((signResult1 as Err<never, Error>).error.message).toEqual(
			'EthereumWallet::Unable to request signing for "0x0"'
		);
		expect((signResult1 as Err<never, Error>).error.cause).toEqual(new Error("error"));

		const signer2 = signWithEthereumWallet(
			api as unknown as ApiPromise,
			"0x1",
			jest.fn(() => Promise.reject("error"))
		);

		const signResult2 = await signer2({} as unknown as Extrinsic);
		expect(signResult2.isErr()).toBe(true);
		expect((signResult2 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((signResult2 as Err<never, Error>).error.message).toEqual(
			`EthereumWallet::Unable to request signing for "0x1"`
		);
		expect((signResult2 as Err<never, Error>).error.cause).toEqual("error");
	});
});
