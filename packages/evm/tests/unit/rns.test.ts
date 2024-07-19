import { expect, test } from "@jest/globals";
import { isAddress } from "ethers";
import { RNS } from "@therootnetwork/evm/libs/rns";
import { getProvider } from "@therootnetwork/evm/libs/provider";
import { TAddress } from "@therootnetwork/evm/types";

const provider = getProvider("root");
const rns = new RNS(provider);

test("getAddressForName resolves an address", async () => {
	const address = await rns.getAddressFromName("therootnetwork.root");
	expect(isAddress(address)).toEqual(true);
});

test("getAddressForName resolves an address", async () => {
	const address = await rns.getAddressFromName("therootnetwork.root");
	const name = await rns.getNameForAddress(address as TAddress);
	expect(typeof name).toEqual("string");
});
