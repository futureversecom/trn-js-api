import { describe, expect, jest, test } from "@jest/globals";
import { err, ok } from "neverthrow";
import { wrap } from "@therootnetwork/extrinsic/libs/wrap";
import { Extrinsic, ExtrinsicWrapper } from "@therootnetwork/extrinsic/types";

describe("wrap", () => {
	test("wrap given extrinsic with a wrapper ends with error result", async () => {
		const extrinsic = {};
		const error = new Error("error");
		const futurepassWrapper = jest.fn(() => err(error));
		const wrappedErrResult = await wrap(extrinsic as Extrinsic, [
			futurepassWrapper as unknown as ExtrinsicWrapper,
		]);

		expect(futurepassWrapper).toBeCalledTimes(1);
		expect(wrappedErrResult.ok).toEqual(false);
		expect((wrappedErrResult.value as Error).message).toEqual("Wrap::error");
	});

	test("wrap given extrinsic with a wrapper ends with ok result", async () => {
		const extrinsic = {};
		const value = {};
		const futurepassWrapper = jest.fn(() => ok(value));
		const wrappedOkResult = await wrap(extrinsic as Extrinsic, [
			futurepassWrapper as unknown as ExtrinsicWrapper,
		]);

		expect(futurepassWrapper).toBeCalledTimes(1);
		expect(wrappedOkResult.ok).toEqual(true);
		expect(wrappedOkResult.value).toStrictEqual(value);
	});

	test("wrap a given extrinsic with 1+ wrappers ends with ok result", async () => {
		type MockExtrinsic = { steps: string[] };
		const extrinsic: MockExtrinsic = { steps: [] };
		const wrapper1 = jest.fn((extrinsic: MockExtrinsic) => {
			extrinsic.steps.push("futurepass");
			return ok(extrinsic);
		});

		const wrapper2 = jest.fn((extrinsic: MockExtrinsic) => {
			extrinsic.steps.push("feeProxy");
			return ok(extrinsic);
		});

		const wrappedOkResult = await wrap(extrinsic as unknown as Extrinsic, [
			wrapper1 as unknown as ExtrinsicWrapper,
			wrapper2 as unknown as ExtrinsicWrapper,
		]);

		expect(wrapper1).toBeCalledTimes(1);
		expect(wrapper2).toBeCalledTimes(1);
		expect(wrappedOkResult.ok).toEqual(true);
		expect((wrappedOkResult.value as unknown as MockExtrinsic).steps).toEqual([
			"futurepass",
			"feeProxy",
		]);
	});
});
