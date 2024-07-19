import { expect, test } from "@jest/globals";
import { ethers, isAddress } from "ethers";
import { Nft, getPublicProviderUrl } from "@therootnetwork/evm/index";

// Amulets on Mainnet
const contractAddress = "0xAAaaAAaa00000864000000000000000000000000";
const provider = new ethers.JsonRpcProvider(getPublicProviderUrl("root"));
const amulets = new Nft(provider, contractAddress);

test("ownerOf indeed returns", async () => {
	const owner = await amulets.ownerOf(1);
	expect(owner).toContain("0x");
});

test("balanceOf returns a value bigger than 0 based on an ownerOf", async () => {
	const owner = await amulets.ownerOf(1);
	const balance = await amulets.balanceOf(owner);
	expect(balance).toBeGreaterThan(0);
});

test("name returns the name of the token", async () => {
	const name = await amulets.name();
	expect(typeof name).toEqual("string");
});

test("symbol returns the name of the token", async () => {
	const symbol = await amulets.symbol();
	expect(typeof symbol).toEqual("string");
});

test("tokenURI returns a string", async () => {
	const tokenURI = await amulets.tokenURI(1);
	expect(typeof tokenURI).toEqual("string");
});

test("totalSupply returns a number", async () => {
	const totalSupply = await amulets.totalSupply();
	expect(typeof totalSupply).toEqual("bigint");
});

test("isApprovedForAll returns a boolean value", async () => {
	const ownerOne = await amulets.ownerOf(1);
	const ownerTwo = await amulets.ownerOf(2);
	const isApprovedForAll = await amulets.isApprovedForAll(ownerOne, ownerTwo);
	expect(typeof isApprovedForAll).toEqual("boolean");
});

test("ownedTokens returns an array with values", async () => {
	const owner = await amulets.ownerOf(1);
	const ownedTokens = await amulets.ownedTokens(owner, 10, 0);
	expect(typeof ownedTokens).toEqual("object");
});

test("getMultipleOwners should returns an array of owners", async () => {
	const owners = await amulets.getMultipleOwners([1, 2, 3, 4, 5]);
	for (const owner of owners) {
		await expect(owner.success).toEqual(true);
		await expect(isAddress(owner.result)).toEqual(true);
	}
});

test("getMultipleBalances should returns an array of balances", async () => {
	const owner = await amulets.ownerOf(1);
	const owners = await amulets.getMultipleBalances([owner, owner, owner]);
	for (const owner of owners) {
		await expect(owner.success).toEqual(true);
		await expect(typeof owner.result).toEqual("bigint");
	}
});
