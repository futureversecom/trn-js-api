import { expect, test } from "@jest/globals";
import { ethers } from "ethers";
import { getPublicProviderUrl } from "@therootnetwork/api/index";
import { Nft } from "@therootnetwork/evm/index";

// Amulets on Mainnet
const contractAddress = "0xAAaaAAaa00000864000000000000000000000000";
const provider = new ethers.JsonRpcProvider(getPublicProviderUrl("root", false, true));
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
