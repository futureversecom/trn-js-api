import { describe, expect, jest, test } from "@jest/globals";
import { err, ok } from "neverthrow";
import { wrap } from "@therootnetwork/extrinsic/libs/wrap";
import { Extrinsic, ExtrinsicWrapper } from "@therootnetwork/extrinsic/types";

describe("wrap", () => {
	test("wrap given extrinsic with `futurepass` wrapper that ends with error result", async () => {
		const extrinsic = {};
		const senderAddress = "0x0";
		const error = new Error("error");
		const futurepassWrapper = {
			id: "futurepass",
			wrap: jest.fn(() => err(error)),
		};
		const wrappedErrResult = await wrap(extrinsic as Extrinsic, senderAddress, [
			futurepassWrapper as unknown as ExtrinsicWrapper,
		]);

		expect(futurepassWrapper.wrap).toBeCalledTimes(1);
		expect(wrappedErrResult.ok).toEqual(false);
		expect(wrappedErrResult.value).toStrictEqual(error);
	});

	test("wrap given extrinsic with `futurepass` wrapper that ends with ok result", async () => {
		const extrinsic = {};
		const senderAddress = "0x0";
		const value = {};
		const futurepassWrapper = {
			id: "futurepass",
			wrap: jest.fn(() => ok(value)),
		};
		const wrappedOkResult = await wrap(extrinsic as Extrinsic, senderAddress, [
			futurepassWrapper as unknown as ExtrinsicWrapper,
		]);

		expect(futurepassWrapper.wrap).toBeCalledTimes(1);
		expect(wrappedOkResult.ok).toEqual(true);
		expect(wrappedOkResult.value).toStrictEqual(value);
	});

	test("wrap a given extrinsic with `feeProxy` wrapper that ends with error result", async () => {
		const extrinsic = {};
		const senderAddress = "0x0";
		const error = new Error("error");
		const feeProxyWrapper = {
			id: "feeProxy",
			wrap: jest.fn(() => err(error)),
		};
		const wrappedErrResult = await wrap(extrinsic as Extrinsic, senderAddress, [
			feeProxyWrapper as unknown as ExtrinsicWrapper,
		]);

		expect(feeProxyWrapper.wrap).toBeCalledTimes(1);
		expect(wrappedErrResult.ok).toEqual(false);
		expect(wrappedErrResult.value).toStrictEqual(error);
	});

	test("wrap a given extrinsic with `feeProxy` wrapper that ends with ok result", async () => {
		const extrinsic = {};
		const senderAddress = "0x0";
		const value = {};
		const feeProxyWrapper = {
			id: "feeProxy",
			wrap: jest.fn(() => ok(value)),
		};
		const wrappedOkResult = await wrap(extrinsic as Extrinsic, senderAddress, [
			feeProxyWrapper as unknown as ExtrinsicWrapper,
		]);

		expect(feeProxyWrapper.wrap).toBeCalledTimes(1);
		expect(wrappedOkResult.ok).toEqual(true);
		expect(wrappedOkResult.value).toStrictEqual(value);
	});

	test("wrap a given extrinsic with both `futurepass` and `feeProxy` wrappers that ends with the correct order", async () => {
		type MockExtrinsic = { steps: string[] };
		const extrinsic: MockExtrinsic = { steps: [] };
		const senderAddress = "0x0";
		const futurepassWrapper = {
			id: "futurepass",
			wrap: jest.fn((wrapExtrinsic: { extrinsic: MockExtrinsic }) => {
				wrapExtrinsic.extrinsic.steps.push("futurepass");
				return ok(wrapExtrinsic);
			}),
		};

		const feeProxyWrapper = {
			id: "feeProxy",
			wrap: jest.fn((wrapExtrinsic: { extrinsic: MockExtrinsic }) => {
				wrapExtrinsic.extrinsic.steps.push("feeProxy");
				return ok(wrapExtrinsic);
			}),
		};

		const wrappedOkResult = await wrap(extrinsic as unknown as Extrinsic, senderAddress, [
			feeProxyWrapper as unknown as ExtrinsicWrapper,
			futurepassWrapper as unknown as ExtrinsicWrapper,
		]);

		expect(futurepassWrapper.wrap).toBeCalledTimes(1);
		expect(feeProxyWrapper.wrap).toBeCalledTimes(1);
		expect(wrappedOkResult.ok).toEqual(true);
		expect(
			(wrappedOkResult.value as unknown as { extrinsic: MockExtrinsic }).extrinsic.steps
		).toEqual(["futurepass", "feeProxy"]);
	});
});
