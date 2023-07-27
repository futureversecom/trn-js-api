import { describe, expect, test } from "@jest/globals";
import { assetIdToERC20ContractAddress } from "@trnja/evm/libs/commonUtils";

describe("assetIdToERC20ContractAddress", () => {
	test("returns contract address for asset id", () => {
		const address = assetIdToERC20ContractAddress(1);
		expect(address).toEqual("0xcCcCCccC00000001000000000000000000000000");
	});
});
