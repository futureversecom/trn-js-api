import { getAddress, isAddress } from "ethers";
import { TAddress } from "../types";

/**
 * Converts an asset's assetId to a contractAddress
 * @param {string | number} assetId - The assetId we are converting
 * @returns {TAddress} The contractaddress
 */
export const assetIdToERC20Address = (assetId: string | number): TAddress => {
	const assetIdInHex = (+assetId).toString(16).padStart(8, "0");
	return getAddress(`0xCCCCCCCC${assetIdInHex.toUpperCase()}000000000000000000000000`) as TAddress;
};

/**
 * Converts a nft collectionId to a contractAddress
 * @param {string | number} collectionId - The collectionId we are converting
 * @returns {TAddress} The contractaddress
 */
export const collectionIdToERC721Address = (collectionId: string | number): TAddress => {
	const collectionIdInHex = (+collectionId).toString(16).padStart(8, "0");
	return getAddress(
		`0xAAAAAAAA${collectionIdInHex.toUpperCase()}000000000000000000000000`
	) as TAddress;
};

/**
 * Converts a sft collectionId to a contractAddress
 * @param {string | number} collectionId - The collectionId we are converting
 * @returns {TAddress} The contractaddress
 */
export const collectionIdToERC1155Address = (collectionId: string | number): TAddress => {
	const collectionIdInHex = (+collectionId).toString(16).padStart(8, "0");
	return getAddress(
		`0xBBBBBBBB${collectionIdInHex.toUpperCase()}000000000000000000000000`
	) as TAddress;
};

/**
 * Converts a contractaddress back to it's nativeId (collectionId or assetId) if possible
 * @param {TAddress} contractAddress - The address we are checking
 * @returns {number | null} NativeID or null when conversion failed
 */
export const contractAddressToNativeId = (contractAddress: TAddress): number | null => {
	if (!isAddress(contractAddress)) throw new Error("contractAddress is not a valid address");
	const startPrefix = contractAddress?.substring(0, 10);
	const allowed = ["0xaaaaaaaa", "0xbbbbbbbb", "0xcccccccc"];
	if (!allowed?.includes(startPrefix?.toLowerCase())) {
		return null;
	}
	return parseInt(contractAddress?.substring(10, contractAddress?.length - 24), 16);
};

/**
 * Retrieves whether address is a Futurepass
 * @param {TAddress} address - The address we are checking
 * @returns {boolean} Whether it's a futurepass or not
 */
export const isFuturepass = (address: TAddress): boolean => {
	if (address?.toLowerCase()?.startsWith("0xffffffff")) return true;
	return false;
};
