import { describe, expect, test } from "@jest/globals";
import {
	assetIdToERC20Address,
	collectionIdToERC1155Address,
	collectionIdToERC721Address,
	contractAddressToNativeId,
} from "@therootnetwork/evm/libs/commonUtils";

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

describe("contractAddressToNativeId", () => {
	test("returns the native id of a contractaddress, if there is one", () => {
		const result = contractAddressToNativeId("0xCccCccCc00001064000000000000000000000000");
		expect(result).toEqual(4196);
	});
	test("returns null if contractaddress does not have a native id", () => {
		const result = contractAddressToNativeId("0xAE8b49269C372FF6a8b3B08ca5330Ce6b21D427F");
		expect(result).toEqual(null);
	});
});
