import { Json } from "@polkadot/types-codec";
import { BN } from "@polkadot/util";
import { describe, expect, test, jest } from "@jest/globals";
import { parseJsonRpcResult } from "@therootnetwork/extrinsic/utils";

const registry = {
	findMetaError: jest.fn(() => ({
		section: "system",
		name: "Remark",
		docs: [],
	})),
};

describe("parseJsonRpcResult", () => {
	test("it returns expected type for ok result", () => {
		const expected = { Ok: true, registry };
		const actual = parseJsonRpcResult<{ Ok: boolean }>(expected as unknown as Json);

		expect(actual.isOk()).toBe(true);
		if (actual.isErr()) throw "Unexpected error result";

		expect(actual.value).toEqual(expected.Ok);
	});
	test("it returns error details for bad result", () => {
		const actual = parseJsonRpcResult<{ Ok: boolean }>({
			Err: {
				Module: {
					index: 1,
					error: [1, 0, 0, 0],
				},
			},
			registry,
		} as unknown as Json);

		expect(actual.isErr()).toBe(true);
		if (actual.isOk()) throw "Unexpected ok result";

		expect(registry.findMetaError).toBeCalledWith({
			index: new BN(1),
			error: new Uint8Array([1, 0, 0, 0]),
		});

		expect(actual.error.message).toBe("RPC Error");
		expect(actual.error.cause).toEqual({
			section: "system",
			name: "Remark",
			docs: [],
		});
	});
});
