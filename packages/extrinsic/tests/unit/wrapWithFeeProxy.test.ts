import { ApiPromise } from "@polkadot/api";
import { describe, expect, jest, test } from "@jest/globals";
import { wrapWithFeeProxy } from "@therootnetwork/extrinsic/libs/wrapWithFeeProxy";
import { Extrinsic, WrappedExtrinsic } from "@therootnetwork/extrinsic/types";
import { Err } from "neverthrow";

describe("wrapWithFeeProxy", () => {
	test("wraps extrinsic with `feeProxy.callWithFeePreferences` with an ok result", async () => {
		const senderAddress = "0x0";
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

		const wrapper = wrapWithFeeProxy(api as unknown as ApiPromise, { assetId: 1124 });
		const wrapResult = await wrapper.wrap({
			extrinsic: extrinsic as unknown as Extrinsic,
			senderAddress,
		});

		expect(wrapper.id).toBe("feeProxy");
		expect(wrapResult.isOk()).toBe(true);
		expect(api.tx.feeProxy.callWithFeePreferences).toBeCalledTimes(2);
		expect(api.tx.feeProxy.callWithFeePreferences).toHaveBeenLastCalledWith(
			1124,
			"105000000",
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

		const wrapper = wrapWithFeeProxy(api as unknown as ApiPromise, { assetId: 1124 });

		const extrinsic = {
			paymentInfo: jest.fn((address: string) => {
				return Promise.reject(address === "0x0" ? new Error("error") : "error");
			}),
		};

		const wrapResult1 = await wrapper.wrap({
			extrinsic: extrinsic as unknown as Extrinsic,
			senderAddress: "0x0",
		} as WrappedExtrinsic);

		expect(wrapResult1.isErr()).toBe(true);
		expect((wrapResult1 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult1 as Err<never, Error>).error.message).toEqual("FeeProxyWrapper::error");

		const wrapResult2 = await wrapper.wrap({
			extrinsic: extrinsic as unknown as Extrinsic,
			senderAddress: "0x1",
		} as WrappedExtrinsic);

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
		const wrapper = wrapWithFeeProxy(api as unknown as ApiPromise, { assetId: 1124 });

		const extrinsic = {
			paymentInfo: jest.fn(() => {
				return Promise.resolve({ isEmpty: true });
			}),
		};
		const wrapResult = await wrapper.wrap({
			extrinsic: extrinsic as unknown as Extrinsic,
			senderAddress: "0x0",
		} as WrappedExtrinsic);

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

		const wrapper = wrapWithFeeProxy(api as unknown as ApiPromise, { assetId: 1124 });

		const extrinsic1 = {
			paymentInfo() {
				return Promise.resolve({ partialFee: 100000 });
			},
		};
		const wrapResult1 = await wrapper.wrap({
			extrinsic: extrinsic1 as unknown as Extrinsic,
			senderAddress: `0x0`,
		});

		expect(wrapResult1.isErr()).toBe(true);
		expect((wrapResult1 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult1 as Err<never, Error>).error.message).toEqual("FeeProxyWrapper::error");

		api.tx.feeProxy.callWithFeePreferences = jest.fn(() => extrinsic2);
		const extrinsic2 = {
			paymentInfo() {
				return Promise.resolve({ partialFee: 110000 });
			},
		};
		const wrapResult2 = await wrapper.wrap({
			extrinsic: extrinsic2 as unknown as Extrinsic,
			senderAddress: `0x0`,
		});

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
						return Promise.resolve({ Ok: undefined });
					}),
				},
			},
			tx: {
				feeProxy: {
					callWithFeePreferences: jest.fn(() => extrinsic),
				},
			},
		};

		const wrapper = wrapWithFeeProxy(api as unknown as ApiPromise, { assetId: 1124 });

		const extrinsic = {
			paymentInfo() {
				return Promise.resolve({ partialFee: 100000 });
			},
		};
		const wrapResult = await wrapper.wrap({
			extrinsic: extrinsic as unknown as Extrinsic,
			senderAddress: `0x0`,
		});

		expect(wrapResult.isErr()).toBe(true);
		expect((wrapResult as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult as Err<never, Error>).error.message).toEqual(
			`FeeProxyWrapper::Unable to extract swap info for the pair "[1124, 2]"`
		);
	});
});
