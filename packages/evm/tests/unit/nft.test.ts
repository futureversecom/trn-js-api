import { beforeAll, expect, test } from "@jest/globals";
import { ethers, Provider } from "ethers";
import { getPublicProviderUrl } from "@therootnetwork/api/index";
import { Nft } from "@therootnetwork/evm/index";

// Amulets on Mainnet
const contractAddress = "0xAAaaAAaa00000864000000000000000000000000";
const provider = new ethers.JsonRpcProvider(getPublicProviderUrl("root", false, true));
const nft = new Nft(provider);

test("ownerOf indeed returns", async () => {
	const owner = await nft.ownerOf(contractAddress, 1);
	expect(owner).toContain("0x");
});

test("balanceOf returns a value bigger than 0 based on an ownerOf", async () => {
	const owner = await nft.ownerOf(contractAddress, 1);
	const balance = await nft.balanceOf(contractAddress, owner);
	expect(balance).toBeGreaterThan(0);
});

test("name returns the name of the token", async () => {
	const name = await nft.name(contractAddress);
	expect(typeof name).toEqual("string");
});

test("symbol returns the name of the token", async () => {
	const symbol = await nft.symbol(contractAddress);
	expect(typeof symbol).toEqual("string");
});

test("tokenURI returns a string", async () => {
	const tokenURI = await nft.tokenURI(contractAddress, 1);
	expect(typeof tokenURI).toEqual("string");
});

test("isApprovedForAll returns a boolean value", async () => {
	const ownerOne = await nft.ownerOf(contractAddress, 1);
	const ownerTwo = await nft.ownerOf(contractAddress, 2);
	const isApprovedForAll = await nft.isApprovedForAll(contractAddress, ownerOne, ownerTwo);
	expect(typeof isApprovedForAll).toEqual("boolean");
});

test("ownedTokens returns an array with values", async () => {
	const owner = await nft.ownerOf(contractAddress, 1);
	const ownedTokens = await nft.ownedTokens(contractAddress, owner, 10, 0);
	expect(typeof ownedTokens).toEqual("object");
});
