import { ApiPromise } from "@polkadot/api";
import { describe, expect, jest, test } from "@jest/globals";
import { signWithEthSigner } from "@therootnetwork/extrinsic/libs/signWithEthSigner";
import { Extrinsic, PersonalSignRequest, WrappedExtrinsic } from "@therootnetwork/extrinsic/types";
import { Err } from "neverthrow";

describe("signWithEthSigner", () => {
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

		const signer = signWithEthSigner(api as unknown as ApiPromise, {
			signMessage: jest.fn(() => Promise.resolve("0x11")),
		});

		const extrinsic = {
			addSignature: jest.fn(),
		};

		const signResult = await signer.sign({
			extrinsic: extrinsic as unknown as Extrinsic,
			senderAddress: "0x0",
		});

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

		const signer = signWithEthSigner(api as unknown as ApiPromise, {
			signMessage: jest.fn(() => Promise.resolve("")),
		});
		const signResult1 = await signer.sign({ senderAddress: "0x0" } as WrappedExtrinsic);
		expect(signResult1.isErr()).toBe(true);
		expect((signResult1 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((signResult1 as Err<never, Error>).error.message).toEqual("EthSignerProvider::error");

		const signResult2 = await signer.sign({ senderAddress: "0x1" } as WrappedExtrinsic);
		expect(signResult2.isErr()).toBe(true);
		expect((signResult2 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((signResult2 as Err<never, Error>).error.message).toEqual(
			`EthSignerProvider::Unable to fetch signing info for "0x1"`
		);
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

		const signer = signWithEthSigner(api as unknown as ApiPromise, {
			request: jest.fn((request: PersonalSignRequest) => {
				const {
					params: [, address],
				} = request;
				return Promise.reject(address === "0x0" ? new Error("error") : "error");
			}),
		});
		const signResult1 = await signer.sign({
			extrinsic: { method: "" },
			senderAddress: "0x0",
		} as unknown as WrappedExtrinsic);
		expect(signResult1.isErr()).toBe(true);
		expect((signResult1 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((signResult1 as Err<never, Error>).error.message).toEqual("EthSignerProvider::error");

		const signResult2 = await signer.sign({
			extrinsic: { method: "" },
			senderAddress: "0x1",
		} as unknown as WrappedExtrinsic);
		expect(signResult2.isErr()).toBe(true);
		expect((signResult2 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((signResult2 as Err<never, Error>).error.message).toEqual(
			`EthSignerProvider::Unable to request signing for "0x1"`
		);
	});
});
