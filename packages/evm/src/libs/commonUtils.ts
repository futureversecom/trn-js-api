import { getAddress, isAddress } from "ethers";

export const assetIdToERC20Address = (assetId: string | number): string => {
	const assetIdInHex = (+assetId).toString(16).padStart(8, "0");
	return getAddress(`0xCCCCCCCC${assetIdInHex.toUpperCase()}000000000000000000000000`);
};

export const collectionIdToERC721Address = (collectionId: string | number): string => {
	const collectionIdInHex = (+collectionId).toString(16).padStart(8, "0");
	return getAddress(`0xAAAAAAAA${collectionIdInHex.toUpperCase()}000000000000000000000000`);
};

export const collectionIdToERC1155Address = (collectionId: string | number): string => {
	const collectionIdInHex = (+collectionId).toString(16).padStart(8, "0");
	return getAddress(`0xBBBBBBBB${collectionIdInHex.toUpperCase()}000000000000000000000000`);
};

export const contractAddressToNativeId = (contractAddress: `0x${string}`): number | null => {
	if (!isAddress(contractAddress)) throw new Error("contractAddress is not a valid address");
	const startPrefix = contractAddress?.substring(0, 10);
	const allowed = ["0xaaaaaaaa", "0xcccccccc", "0xbbbbbbbb"];
	if (!allowed?.includes(startPrefix?.toLowerCase())) {
		return null;
	}
	return parseInt(contractAddress?.substring(10, contractAddress?.length - 24), 16);
};
