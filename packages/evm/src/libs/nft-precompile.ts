import { Contract, hexlify, toUtf8Bytes, TransactionResponse } from "ethers";
import { NFT_PRECOMPILE_ABI, NFT_PRECOMPILE_ADDRESS } from "..";

import { TAddress, TProviderOrSigner } from "../types";

/** Class that allows to use the Nft Precompile pallet. */
export class NftPrecompile {
	provider: TProviderOrSigner;
	contract: Contract;

	/**
	 * Initialize a new Nft precompile instance
	 * @param {TProviderOrSigner} provider - An ethers provider.
	 */
	constructor(provider: TProviderOrSigner) {
		this.provider = provider;
		this.contract = new Contract(NFT_PRECOMPILE_ADDRESS, NFT_PRECOMPILE_ABI, this.provider);
	}

	/**
	 * Returns the contract instance
	 * @returns {Contract} Contract instance
	 */
	getContract(): Contract {
		return this.contract;
	}

	/**
	 * Allows a new collection to be initialized on the Nft pallet
	 *
	 * @param {TAddress} owner - The owner of the collection
	 * @param {string} name - The name of the collection
	 * @param {number} maxIssuance - The max total supply
	 * @param {string} metadataPath - The metadata uri
	 * @param {TAddress[]} royaltyAddresses - The addresses to send the royalties to
	 * @param {number[]}royaltyEntitlements - The royalty %'s
	 * @returns {TransactionResponse} Transaction object
	 */
	initializeCollection = async (
		owner: TAddress,
		name: string,
		maxIssuance: number,
		metadataPath: string,
		royaltyAddresses: TAddress[],
		royaltyEntitlements: number[]
	): Promise<TransactionResponse> => {
		return this.contract.initializeCollection(
			owner,
			hexlify(toUtf8Bytes(name)),
			maxIssuance,
			hexlify(toUtf8Bytes(metadataPath)),
			royaltyAddresses,
			royaltyEntitlements
		);
	};
}
