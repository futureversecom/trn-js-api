import { Contract, getAddress, hexlify, toUtf8Bytes, TransactionResponse } from "ethers";
import { collectionIdToERC721Address, contractAddressToNativeId, ERC721_ABI } from "..";

import { TAddress, TProviderOrSigner, TTokenId } from "../types";
import { Ownable } from "./ownable";
import { Multicall } from "./multicall";

/** Class that allows to use a nft collection. */
export class Nft extends Ownable {
	provider: TProviderOrSigner;
	contractAddress: TAddress;
	contract: Contract;
	multicall: Multicall;

	/**
	 * Initialize a new nft instance
	 * @param {TProviderOrSigner} provider - An ethers provider.
	 * @param {TAddress} contractAddress - The contractAddress of the collection
	 * @param {number} collectionId - The collectionId of the collection
	 */
	constructor(provider: TProviderOrSigner, contractAddress?: TAddress, collectionId?: number) {
		if (!contractAddress && !collectionId) {
			throw new Error("Either contractAddress or collectionId should be passed");
		}

		if (collectionId) {
			contractAddress = collectionIdToERC721Address(collectionId);
		}

		if (!contractAddress) throw new Error("No contractAddress detected to initialize");

		super(provider, contractAddress);
		this.provider = provider;
		this.contractAddress = contractAddress;
		this.contract = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		this.multicall = new Multicall(this.provider);
	}

	/**
	 * Returns the contract instance
	 * @returns {Contract} Contract instance
	 */
	getContract(): Contract {
		return this.contract;
	}

	/**
	 * Retrieves the current owner of an NFT
	 *
	 * @param {TTokenId} tokenId - The tokenId of the nft we wish to query
	 * @returns {TAddress} The address of the owner
	 */
	ownerOf = async (tokenId: TTokenId): Promise<TAddress> => {
		return this.contract.ownerOf(tokenId);
	};

	/**
	 * Retrieves the balance of an address, as in: how many nft's do they own of this collection
	 *
	 * @param {TAddress} owner - The owner's address we wish to query
	 * @returns {number} The balance as an integer
	 */
	balanceOf = async (owner: TAddress): Promise<number> => {
		return this.contract.balanceOf(owner);
	};

	/**
	 * Retrieves name of the collection
	 *
	 * @returns {string} The name
	 */
	name = async (): Promise<string> => {
		return this.contract.name();
	};

	/**
	 * Retrieves symbol of the collection
	 *
	 * @returns {string} The symbol
	 */
	symbol = async (): Promise<string> => {
		return this.contract.symbol();
	};

	/**
	 * Retrieves the tokenUri of a specific tokenId
	 *
	 * @returns {string} The tokenUri as a string
	 */
	tokenURI = async (tokenId: TTokenId): Promise<string> => {
		return this.contract.tokenURI(tokenId);
	};

	/**
	 * Retrieves whether operator is approved to operate
	 *
	 * @returns {boolean} Returns a boolean value
	 */
	isApprovedForAll = async (owner: TAddress, operator: TAddress): Promise<boolean> => {
		return this.contract.isApprovedForAll(owner, operator);
	};

	/**
	 * Retrieves the total supply of the nft collection
	 *
	 * @returns {bigint} Returns the supply an integer
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
	 * @param {TAddress} from - The address from where it gets transferred
	 * @param {TAddress} to - The address to where it gets transferred
	 * @param {TTokenId} tokenId - The tokenId to be transferred
	 * @returns {TransactionResponse} Transaction object
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
	 * @param {TAddress} from - The address from where it gets transferred
	 * @param {TAddress} to - The address to where it gets transferred
	 * @param {TTokenId} tokenId - The tokenId to be transferred
	 * @returns {TransactionResponse} Transaction object
	 */
	transferFrom = async (
		from: TAddress,
		to: TAddress,
		tokenId: TTokenId
	): Promise<TransactionResponse> => {
		return this.contract.transferFrom(from, to, tokenId);
	};

	/**
	 * Sets approval for specific address on a specific tokenId
	 *
	 * @param {TAddress} to - The address that gets the approval
	 * @param {TTokenId} tokenId - The tokenId that gets approved
	 * @returns {TransactionResponse} Transaction object
	 */
	approve = async (to: TAddress, tokenId: TTokenId): Promise<TransactionResponse> => {
		return this.contract.approve(to, tokenId);
	};

	/**
	 * Get approval of a specific tokenId
	 *
	 * @param {TTokenId} tokenId - The tokenId to get the approval for
	 * @returns {TAddress} The approved address
	 */
	getApproved = async (tokenId: TTokenId): Promise<TAddress> => {
		return this.contract.getApproved(tokenId);
	};

	/**
	 * Sets approval for entire collection for specific address
	 *
	 * @param {TAddress} operator - The address that gets the approval
	 * @param {boolean} approved - Whether approved or not
	 * @returns {TransactionResponse} Transaction object
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
	 * @param {TAddress} owner - The address that the minted NFTs will end up
	 * @param {number} quantity - The amount we wish to mint
	 * @returns {TransactionResponse} Transaction object
	 */
	mint = async (owner: TAddress, quantity: number): Promise<TransactionResponse> => {
		return this.contract.mint(owner, quantity);
	};

	/**
	 * Allows to set a hard cap on the amount of NFT's that can be issued
	 *
	 * @param {number} maxSupply - The cap amount
	 * @returns {TransactionResponse} Transaction object
	 */
	setMaxSupply = async (maxSupply: number): Promise<TransactionResponse> => {
		return this.contract.setMaxSupply(maxSupply);
	};

	/**
	 * Allows the metadata uri to be updated
	 *
	 * @param {string} baseURI - The new metadata uri
	 * @returns {TransactionResponse} Transaction object
	 */
	setBaseURI = async (baseURI: string): Promise<TransactionResponse> => {
		return this.contract.setBaseURI(hexlify(toUtf8Bytes(baseURI)));
	};

	/**
	 * Gives back the collectionId of the initialized collection
	 * @returns {number | null} The assetId
	 */
	getCollectionId = async (): Promise<number | null> => {
		return contractAddressToNativeId(this.contractAddress);
	};

	/**
	 * Gives back whether provided address is owner of tokenId
	 * @param {TAddress} owner - The address we are querying
	 * @param {TTokenId} tokenId - The tokenId
	 * @returns {boolean} Whether owned or not
	 */
	isOwnerOf = async (owner: TAddress, tokenId: TTokenId): Promise<boolean> => {
		const currentOwner = await this.ownerOf(tokenId);
		return getAddress(currentOwner) === getAddress(owner);
	};

	/**
	 * Gives back owners of Nft's in a single aggregated query
	 * @param {number[]} tokenIds - The desired tokenIds
	 * @returns {{ success: boolean; result: TAddress }[]} The owners and whether the call succeeded or failed
	 */
	getMultipleOwners = async (
		tokenIds: number[]
	): Promise<{ success: boolean; result: TAddress }[]> => {
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
