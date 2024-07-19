import { Contract, hexlify, toUtf8Bytes, TransactionResponse } from "ethers";
import { NFT_PRECOMPILE_ABI, NFT_PRECOMPILE_ADDRESS } from "..";

import { TAddress, TProviderOrSigner } from "../types";

export class NftPrecompile {
	provider: TProviderOrSigner;
	contract: Contract;

	constructor(provider: TProviderOrSigner) {
		this.provider = provider;

		this.contract = new Contract(NFT_PRECOMPILE_ADDRESS, NFT_PRECOMPILE_ABI, this.provider);
	}

	/**
	 * Returns the contract instance
	 */
	getContract() {
		return this.contract;
	}

	/**
	 * Allows a new collection to be initialized on the Nft pallet
	 *
	 * @param owner - The owner of the collection
	 * @param name - The name of the collection
	 * @param maxIssuance - The max total supply
	 * @param metadataPath - The metadata uri
	 * @param royaltyAddresses - The addresses to send the royalties to
	 * @param royaltyEntitlements - The royalty %'s
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
