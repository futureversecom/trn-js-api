import { ApiPromise } from "@polkadot/api";
import { describe, expect, jest, test } from "@jest/globals";
import { wrapWithFuturepass } from "@therootnetwork/extrinsic/libs/wrapWithFuturepass";
import { Err } from "neverthrow";
import { Extrinsic } from "@therootnetwork/extrinsic/types";

describe("wrapWithFuturepass", () => {
	test("wraps extrinsic with `futurepass.proxyExtrinsic` with an ok result", async () => {
		const api = {
			query: {
				futurepass: {
					holders: jest.fn(() => {
						return Promise.resolve({
							isEmpty: false,
							toJSON() {
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
		const extrinsic = {} as Extrinsic;
		const wrapper = wrapWithFuturepass(api as unknown as ApiPromise, senderAddress);
		const wrapResult = await wrapper(extrinsic);

		expect(wrapResult.isOk()).toEqual(true);
		expect(api.tx.futurepass.proxyExtrinsic).toBeCalledTimes(1);
		expect(api.tx.futurepass.proxyExtrinsic).toHaveBeenCalledWith(fpAddress, extrinsic);
	});

	test("futurepass address fetching ends with thrown error", async () => {
		const api = {
			query: {
				futurepass: {
					holders: jest.fn((value) => {
						return Promise.reject(value === "0x0" ? new Error("error") : "error");
					}),
				},
			},
		};

		const senderAddress1 = "0x0";
		const wrapper1 = wrapWithFuturepass(api as unknown as ApiPromise, senderAddress1);
		const wrapResult1 = await wrapper1({} as Extrinsic);

		expect(wrapResult1.isErr()).toBe(true);
		expect((wrapResult1 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult1 as Err<never, Error>).error.message).toEqual(
			'FuturepassWrapper::Unable to fetch Futurepass address for "0x0"'
		);
		expect((wrapResult1 as Err<never, Error>).error.cause).toEqual(new Error("error"));

		const senderAddress2 = "0x1";
		const wrapper2 = wrapWithFuturepass(api as unknown as ApiPromise, senderAddress2);
		const wrapResult2 = await wrapper2({} as Extrinsic);

		expect(wrapResult2.isErr()).toBe(true);
		expect((wrapResult2 as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult2 as Err<never, Error>).error.message).toEqual(
			`FuturepassWrapper::Unable to fetch Futurepass address for "0x1"`
		);
		expect((wrapResult2 as Err<never, Error>).error.cause).toEqual(`error`);
	});

	test("futurepass address fetching ends with empty error", async () => {
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
		const wrapper = wrapWithFuturepass(api as unknown as ApiPromise, senderAddress);
		const wrapResult = await wrapper({} as Extrinsic);

		expect(wrapResult.isErr()).toBe(true);
		expect((wrapResult as Err<never, Error>).error).toBeInstanceOf(Error);
		expect((wrapResult as Err<never, Error>).error.message).toEqual(
			`FuturepassWrapper::Unable to extract Futurepass address for "0x0"`
		);
	});
});
