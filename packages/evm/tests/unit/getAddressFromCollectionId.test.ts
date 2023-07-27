import { describe, expect, test } from "@jest/globals";
import { collectionIdToERC721Address } from "@trnja/evm/libs/commonUtils";

describe("collectionIdToERC721Address", () => {
	test("returns contract address for collection id", () => {
		const address = collectionIdToERC721Address(1);
		expect(address).toEqual("0xaAAaAaaa00000001000000000000000000000000");
	});
});
