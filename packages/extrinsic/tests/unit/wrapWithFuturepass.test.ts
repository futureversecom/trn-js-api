import { ApiPromise } from "@polkadot/api";
import { describe, expect, jest, test } from "@jest/globals";
import { wrapWithFuturepass } from "@therootnetwork/extrinsic/libs/wrapWithFuturepass";
import { WrappedExtrinsic } from "@therootnetwork/extrinsic/types";
import { Err } from "neverthrow";

describe("wrapWithFuturepass", () => {
	test("wrap with `futurepass.proxyExtrinsic` with an ok result", async () => {
		const api = {
			query: {
				futurepass: {
					holders: jest.fn(() => {
						return Promise.resolve({
							isEmpty: false,
							unwrap() {
								return fpAddress;
							},
						});
					}),
				},
			},

			tx: {
				futurepass: {
					proxyExtrinsic: jest.fn(),
				},
			},
		};

		const senderAddress = "0x0";
		const fpAddress = "0xf";
		const wrappedExtrinsic = { extrinsic: {}, senderAddress } as WrappedExtrinsic;
		const wrapper = wrapWithFuturepass(api as unknown as ApiPromise);
		const wrapResult = await wrapper.wrap(wrappedExtrinsic);

		expect(wrapResult.isOk()).toEqual(true);
		expect(api.tx.futurepass.proxyExtrinsic).toBeCalledTimes(1);
		expect(api.tx.futurepass.proxyExtrinsic).toHaveBeenCalledWith(
			fpAddress,
			wrappedExtrinsic.extrinsic
		);
	});

	test("futurepass address fetching that ends with error due to throw", async () => {
		const api = {
			query: {
				futurepass: {
					holders: jest.fn((value) => {
						return Promise.reject(value === "0x0" ? new Error("error") : "error");
					}),
				},
			},
		};

		const senderAddress = "0x0";
		const wrapper = wrapWithFuturepass(api as unknown as ApiPromise);
		const wrapResult1 = await wrapper.wrap({ extrinsic: {}, senderAddress } as WrappedExtrinsic);

		expect(wrapResult1.isErr()).toBe(true);
		expect((wrapResult1 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult1 as Err<never, Error>).error.message).toEqual("FuturepassWrapper::error");

		const wrapResult2 = await wrapper.wrap({
			extrinsic: {},
			senderAddress: "0x1",
		} as WrappedExtrinsic);

		expect(wrapResult2.isErr()).toBe(true);
		expect((wrapResult2 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult2 as Err<never, Error>).error.message).toEqual(
			`FuturepassWrapper::Unable to fetch Futurepass address for "0x1"`
		);
	});

	test("futurepass address fetching that ends with error due to empty", async () => {
		const api = {
			query: {
				futurepass: {
					holders: jest.fn(() => {
						return Promise.resolve({ isEmpty: true });
					}),
				},
			},
		};

		const senderAddress = "0x0";
		const wrapper = wrapWithFuturepass(api as unknown as ApiPromise);
		const wrapResult = await wrapper.wrap({ extrinsic: {}, senderAddress } as WrappedExtrinsic);

		expect(wrapResult.isErr()).toBe(true);
		expect((wrapResult as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult as Err<never, Error>).error.message).toEqual(
			`FuturepassWrapper::Unable to get Futurepass address for "${senderAddress}"`
		);
	});
});
