import { expect, test } from "@jest/globals";
import { ethers } from "ethers";
import { ROOT_ADDRESS, getPublicProviderUrl } from "@therootnetwork/evm/index";
import { Assets } from "@therootnetwork/evm/libs/assets";

const contractAddress = ROOT_ADDRESS;
const provider = new ethers.JsonRpcProvider(getPublicProviderUrl("root"));
const asset = new Assets(provider, contractAddress);

test("name indeed returns string", async () => {
	const name = await asset.name();
	await expect(typeof name).toEqual("string");
});

test("symbol indeed returns string", async () => {
	const symbol = await asset.symbol();
	await expect(typeof symbol).toEqual("string");
});

test("decimals indeed returns bigint", async () => {
	const decimals = await asset.decimals();
	await expect(typeof decimals).toEqual("bigint");
});
