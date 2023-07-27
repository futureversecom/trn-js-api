import { getAddress } from "ethers";

export const assetIdToERC20ContractAddress = (assetId: string | number): string => {
	const asset_id_hex = (+assetId).toString(16).padStart(8, "0");
	return getAddress(`0xCCCCCCCC${asset_id_hex.toUpperCase()}000000000000000000000000`);
};

export const collectionIdToERC721Address = (collectionId: string | number): string => {
	const collection_id_hex = (+collectionId).toString(16).padStart(8, "0");
	return getAddress(`0xAAAAAAAA${collection_id_hex.toUpperCase()}000000000000000000000000`);
};
