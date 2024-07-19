import { Contract, getAddress, hexlify, toUtf8Bytes, TransactionResponse } from "ethers";
import {
	contractAddressToNativeId,
	ERC721_ABI,
	NFT_PRECOMPILE_ABI,
	NFT_PRECOMPILE_ADDRESS,
} from "..";

import { TAddress, TProviderOrSigner, TTokenId } from "../types";
import { Ownable } from "./ownable";
import { Multicall } from "./multicall";

export class Nft extends Ownable {
	provider: TProviderOrSigner;
	contractAddress: TAddress;
	contract: Contract;
	multicall: Multicall;

	constructor(provider: TProviderOrSigner, contractAddress: TAddress) {
		super(provider, contractAddress);
		this.provider = provider;
		this.contractAddress = contractAddress;
		this.contract = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		this.multicall = new Multicall(this.provider);
	}

	/**
	 * Returns the contract instance
	 */
	getContract() {
		return this.contract;
	}

	/**
	 * Retrieves the current owner of an NFT
	 *
	 * @param tokenId - The tokenId of the nft we wish to query
	 * @returns The address of the owner
	 */
	ownerOf = async (tokenId: TTokenId): Promise<TAddress> => {
		return this.contract.ownerOf(tokenId);
	};

	/**
	 * Retrieves the balance of an address, as in: how many nft's do they own of this collection
	 *
	 * @param owner - The owner's address we wish to query
	 * @returns The balance as an integer
	 */
	balanceOf = async (owner: TAddress): Promise<number> => {
		return this.contract.balanceOf(owner);
	};

	/**
	 * Retrieves name of the collection
	 *
	 * @returns The name
	 */
	name = async (): Promise<string> => {
		return this.contract.name();
	};

	/**
	 * Retrieves symbol of the collection
	 *
	 * @returns The symbol
	 */
	symbol = async (): Promise<string> => {
		return this.contract.symbol();
	};

	/**
	 * Retrieves the tokenUri of a specific tokenId
	 *
	 * @returns The tokenUri as a string
	 */
	tokenURI = async (tokenId: TTokenId): Promise<string> => {
		return this.contract.tokenURI(tokenId);
	};

	/**
	 * Retrieves whether operator is approved to operate
	 *
	 * @returns Returns a boolean value
	 */
	isApprovedForAll = async (owner: TAddress, operator: TAddress): Promise<boolean> => {
		return this.contract.isApprovedForAll(owner, operator);
	};

	/**
	 * Retrieves the total supply of the nft collection
	 *
	 * @returns Returns the supply an integer
	 */
	totalSupply = async (): Promise<bigint> => {
		return this.contract.totalSupply();
	};

	/**
	 * Allows for paginated results for owned tokens
	 */
	ownedTokens = async (
		who: TAddress,
		limit: number,
		cursor: number
	): Promise<[bigint, bigint, bigint[]]> => {
		return this.contract.ownedTokens(who, limit, cursor);
	};

	/**
	 * Allows one to transfer an nft to another address
	 *
	 * @param from - The address from where it gets transferred
	 * @param to - The address to where it gets transferred
	 * @param tokenId - The tokenId to be transferred
	 */
	safeTransferFrom = async (
		from: TAddress,
		to: TAddress,
		tokenId: TTokenId
	): Promise<TransactionResponse> => {
		return this.contract.safeTransferFrom(from, to, tokenId);
	};

	/**
	 * Allows one to transfer an nft to another address
	 *
	 * @param from - The address from where it gets transferred
	 * @param to - The address to where it gets transferred
	 * @param tokenId - The tokenId to be transferred
	 */
	transferFrom = async (from: TAddress, to: TAddress, tokenId: TTokenId) => {
		return this.contract.transferFrom(from, to, tokenId);
	};

	/**
	 * Sets approval for specific address on a specific tokenId
	 *
	 * @param to - The address that gets the approval
	 * @param tokenId - The tokenId that gets approved
	 */
	approve = async (to: TAddress, tokenId: TTokenId) => {
		return this.contract.approve(to, tokenId);
	};

	/**
	 * Get approval of a specific tokenId
	 *
	 * @param tokenId - The tokenId to get the approval for
	 */
	getApproved = async (tokenId: TTokenId) => {
		return this.contract.getApproved(tokenId);
	};

	/**
	 * Sets approval for entire collection for specific address
	 *
	 * @param to - The address that gets the approval
	 * @param approved - Whether approved or not
	 */
	setApprovalForAll = async (
		operator: TAddress,
		approved: boolean
	): Promise<TransactionResponse> => {
		return this.contract.setApprovalForAll(operator, approved);
	};

	/**
	 * Allows for minting new nft's
	 *
	 * @param owner - The address that the minted NFTs will end up
	 * @param approved - The amount we wish to mint
	 */
	mint = async (owner: TAddress, quantity: number): Promise<TransactionResponse> => {
		return this.contract.mint(owner, quantity);
	};

	/**
	 * Allows to set a hard cap on the amount of NFT's that can be issued
	 *
	 * @param maxSupply - The cap amount
	 */
	setMaxSupply = async (maxSupply: number): Promise<TransactionResponse> => {
		return this.contract.setMaxSupply(maxSupply);
	};

	/**
	 * Allows the metadata uri to be updated
	 *
	 * @param baseURI - The new metadata uri
	 */
	setBaseURI = async (baseURI: string): Promise<TransactionResponse> => {
		const cb = toUtf8Bytes(baseURI);
		return this.contract.setBaseURI(cb);
	};

	initializeCollection = async (
		owner: TAddress,
		name: string,
		maxIssuance: number,
		metadataPath: string,
		royaltyAddresses: TAddress[],
		royaltyEntitlements: number[]
	): Promise<TransactionResponse> => {
		const c = new Contract(NFT_PRECOMPILE_ADDRESS, NFT_PRECOMPILE_ABI, this.provider);
		return c.initializeCollection(
			owner,
			hexlify(toUtf8Bytes(name)),
			maxIssuance,
			hexlify(toUtf8Bytes(metadataPath)),
			royaltyAddresses,
			royaltyEntitlements
		);
	};

	/**
	 * Gives back the assetId of the initialized collection
	 */
	getAssetId = async (): Promise<number | null> => {
		return contractAddressToNativeId(this.contractAddress);
	};

	/**
	 * Gives back whether provided address is owner of tokenId
	 */
	isOwnerOf = async (owner: TAddress, tokenId: TTokenId): Promise<boolean> => {
		const currentOwner = await this.ownerOf(tokenId);
		return getAddress(currentOwner) === getAddress(owner);
	};

	/**
	 * Gives back owners of Nft's in a single aggregated query
	 */
	getMultipleOwners = async (tokenIds: number[]) => {
		const calls = tokenIds.map((tokenId) => {
			return {
				target: this.contractAddress,
				abi: ERC721_ABI,
				functionName: "ownerOf",
				args: [tokenId],
			};
		});

		return this.multicall.calls(calls);
	};

	/**
	 * Gives back balances of owners in a single aggregated query
	 */
	getMultipleBalances = async (owners: TAddress[]) => {
		const calls = owners.map((owner) => {
			return {
				target: this.contractAddress,
				abi: ERC721_ABI,
				functionName: "balanceOf",
				args: [owner],
			};
		});

		return this.multicall.calls(calls);
	};
}
