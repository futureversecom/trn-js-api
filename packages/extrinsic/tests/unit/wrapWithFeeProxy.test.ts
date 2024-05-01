import { ApiPromise } from "@polkadot/api";
import { describe, expect, jest, test } from "@jest/globals";
import { wrapWithFeeProxy } from "@therootnetwork/extrinsic/libs/wrapWithFeeProxy";
import { Extrinsic } from "@therootnetwork/extrinsic/types";
import { Err } from "neverthrow";

describe("wrapWithFeeProxy", () => {
	test("wraps extrinsic with `feeProxy.callWithFeePreferences` with an ok result", async () => {
		const senderAddress = "0x0";
		const assetId = 1124;
		const extrinsic = {
			paymentInfo() {
				return Promise.resolve({ partialFee: 100000 });
			},
		};

		const api = {
			rpc: {
				dex: {
					getAmountsIn: jest.fn(() => {
						return Promise.resolve({ Ok: [100000000] });
					}),
				},
			},
			tx: {
				feeProxy: {
					callWithFeePreferences: jest.fn(() => extrinsic),
				},
			},
		};

		const wrapper = wrapWithFeeProxy(api as unknown as ApiPromise, senderAddress, assetId);
		const wrapResult = await wrapper(extrinsic as unknown as Extrinsic);

		expect(wrapResult.isOk()).toBe(true);
		expect(api.tx.feeProxy.callWithFeePreferences).toBeCalledTimes(2);
		expect(api.tx.feeProxy.callWithFeePreferences).toHaveBeenLastCalledWith(
			1124,
			BigInt(105000000),
			extrinsic
		);
	});

	test("extrinsic payment info fetching ends with thrown error", async () => {
		const api = {
			tx: {
				feeProxy: {
					callWithFeePreferences: jest.fn(() => extrinsic),
				},
			},
		};

		const assetId = 1124;
		const extrinsic = {
			paymentInfo: jest.fn((address: string) => {
				return Promise.reject(address === "0x0" ? new Error("error") : "error");
			}),
		};
		const senderAddress1 = "0x0";
		const wrapper1 = wrapWithFeeProxy(api as unknown as ApiPromise, senderAddress1, assetId);
		const wrapResult1 = await wrapper1(extrinsic as unknown as Extrinsic);

		expect(wrapResult1.isErr()).toBe(true);
		expect((wrapResult1 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult1 as Err<never, Error>).error.message).toEqual(
			'FeeProxyWrapper::Unable to fetch payment info for "0x0"'
		);

		const senderAddress2 = "0x1";
		const wrapper2 = wrapWithFeeProxy(api as unknown as ApiPromise, senderAddress2, assetId);
		const wrapResult2 = await wrapper2(extrinsic as unknown as Extrinsic);

		expect(wrapResult2.isErr()).toBe(true);
		expect((wrapResult2 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult2 as Err<never, Error>).error.message).toEqual(
			`FeeProxyWrapper::Unable to fetch payment info for "0x1"`
		);
	});

	test("extrinsic payment info fetching ends with empty error", async () => {
		const api = {
			tx: {
				feeProxy: {
					callWithFeePreferences: jest.fn(() => extrinsic),
				},
			},
		};
		const senderAddress = "0x0";
		const assetId = 1124;
		const wrapper = wrapWithFeeProxy(api as unknown as ApiPromise, senderAddress, assetId);

		const extrinsic = {
			paymentInfo: jest.fn(() => {
				return Promise.resolve({ isEmpty: true, toJSON: () => ({}) });
			}),
		};
		const wrapResult = await wrapper(extrinsic as unknown as Extrinsic);

		expect(wrapResult.isErr()).toBe(true);
		expect((wrapResult as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult as Err<never, Error>).error.message).toEqual(
			`FeeProxyWrapper::Unable to get payment info for "0x0"`
		);
	});

	test("dex swap info fetching ends with thrown error", async () => {
		const api = {
			rpc: {
				dex: {
					getAmountsIn: jest.fn((fee) => {
						return Promise.reject(fee === "100000" ? new Error("error") : "error");
					}),
				},
			},
			tx: {
				feeProxy: {
					callWithFeePreferences: jest.fn(() => extrinsic1),
				},
			},
		};

		const senderAddress = "0x0";
		const assetId = 1124;
		const wrapper = wrapWithFeeProxy(api as unknown as ApiPromise, senderAddress, assetId);

		const extrinsic1 = {
			paymentInfo() {
				return Promise.resolve({ partialFee: 100000 });
			},
		};
		const wrapResult1 = await wrapper(extrinsic1 as unknown as Extrinsic);

		expect(wrapResult1.isErr()).toBe(true);
		expect((wrapResult1 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult1 as Err<never, Error>).error.message).toEqual(
			'FeeProxyWrapper::Unable to fetch swap info for the pair "[1124, 2]"'
		);

		api.tx.feeProxy.callWithFeePreferences = jest.fn(() => extrinsic2);
		const extrinsic2 = {
			paymentInfo() {
				return Promise.resolve({ partialFee: 110000 });
			},
		};
		const wrapResult2 = await wrapper(extrinsic2 as unknown as Extrinsic);

		expect(wrapResult2.isErr()).toBe(true);
		expect((wrapResult2 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult2 as Err<never, Error>).error.message).toEqual(
			`FeeProxyWrapper::Unable to fetch swap info for the pair "[1124, 2]"`
		);
	});

	test("dex swap amount fetching ends with empty error", async () => {
		const api = {
			rpc: {
				dex: {
					getAmountsIn: jest.fn(() => {
						return Promise.resolve({
							Err: {
								Module: {
									index: 0,
									error: 0,
									message: "error",
								},
							},
							registry: {
								findMetaError: jest.fn(() => ({
									section: "dex",
									name: "getAmountsIn",
									docs: [],
								})),
							},
						});
					}),
				},
			},
			tx: {
				feeProxy: {
					callWithFeePreferences: jest.fn(() => extrinsic),
				},
			},
		};

		const senderAddress = "0x0";
		const assetId = 1124;
		const wrapper = wrapWithFeeProxy(api as unknown as ApiPromise, senderAddress, assetId);

		const extrinsic = {
			paymentInfo() {
				return Promise.resolve({ partialFee: 100000 });
			},
		};
		const wrapResult = await wrapper(extrinsic as unknown as Extrinsic);

		expect(wrapResult.isErr()).toBe(true);
		expect((wrapResult as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult as Err<never, Error>).error.message).toEqual("FeeProxyWrapper::RPC Error");
	});
});
