import { getAddress, isAddress } from "ethers";
import { TAddress } from "../types";

export const assetIdToERC20Address = (assetId: string | number): TAddress => {
	const assetIdInHex = (+assetId).toString(16).padStart(8, "0");
	return getAddress(`0xCCCCCCCC${assetIdInHex.toUpperCase()}000000000000000000000000`) as TAddress;
};

export const collectionIdToERC721Address = (collectionId: string | number): TAddress => {
	const collectionIdInHex = (+collectionId).toString(16).padStart(8, "0");
	return getAddress(
		`0xAAAAAAAA${collectionIdInHex.toUpperCase()}000000000000000000000000`
	) as TAddress;
};

export const collectionIdToERC1155Address = (collectionId: string | number): TAddress => {
	const collectionIdInHex = (+collectionId).toString(16).padStart(8, "0");
	return getAddress(
		`0xBBBBBBBB${collectionIdInHex.toUpperCase()}000000000000000000000000`
	) as TAddress;
};

export const contractAddressToNativeId = (contractAddress: `0x${string}`): number | null => {
	if (!isAddress(contractAddress)) throw new Error("contractAddress is not a valid address");
	const startPrefix = contractAddress?.substring(0, 10);
	const allowed = ["0xaaaaaaaa", "0xbbbbbbbb", "0xcccccccc"];
	if (!allowed?.includes(startPrefix?.toLowerCase())) {
		return null;
	}
	return parseInt(contractAddress?.substring(10, contractAddress?.length - 24), 16);
};

export const isFuturepass = (address: TAddress): boolean => {
	if (address?.toLowerCase()?.startsWith("0xffffffff")) return true;
	return false;
};
