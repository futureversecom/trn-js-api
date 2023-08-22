import { describe, expect, test } from "@jest/globals";
import {
	assetIdToERC20Address,
	collectionIdToERC1155Address,
	collectionIdToERC721Address,
} from "@trnja/evm/libs/commonUtils";

describe("assetIdToERC20Address", () => {
	test("returns contract address for asset id", () => {
		const address = assetIdToERC20Address(1);
		expect(address).toEqual("0xcCcCCccC00000001000000000000000000000000");
	});
});

describe("collectionIdToERC721Address", () => {
	test("returns contract address for collection id", () => {
		const address = collectionIdToERC721Address(1);
		expect(address).toEqual("0xaAAaAaaa00000001000000000000000000000000");
	});
});

describe("collectionIdToERC1155Address", () => {
	test("returns contract address for collection id", () => {
		const address = collectionIdToERC1155Address(1);
		expect(address).toEqual("0xBBBBBbbB00000001000000000000000000000000");
	});
});
