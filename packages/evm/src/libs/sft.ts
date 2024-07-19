import { BytesLike, Contract, hexlify, toUtf8Bytes, TransactionResponse } from "ethers";
import { TAddress, TProviderOrSigner, TTokenId } from "../types";
import { Ownable } from "./ownable";
import { ERC1155_PRECOMPILE_ABI } from "./constants";
import { collectionIdToERC1155Address, contractAddressToNativeId } from "./commonUtils";

/** Class that allows to use a sft collection. */
export class Sft extends Ownable {
	provider: TProviderOrSigner;
	contractAddress: TAddress;
	contract: Contract;

	/**
	 * Initialize a new sft instance
	 * @param {TProviderOrSigner} provider - An ethers provider.
	 * @param {TAddress} contractAddress - The contractAddress of the collection
	 * @param {number} collectionId - The collectionId of the collection
	 */
	constructor(provider: TProviderOrSigner, contractAddress?: TAddress, collectionId?: number) {
		if (!contractAddress && !collectionId) {
			throw new Error("Either contractAddress or collectionId should be passed");
		}

		if (collectionId) {
			contractAddress = collectionIdToERC1155Address(collectionId);
		}

		if (!contractAddress) throw new Error("No contractAddress detected to initialize");

		super(provider, contractAddress);
		this.provider = provider;
		this.contractAddress = contractAddress;
		this.contract = new Contract(this.contractAddress, ERC1155_PRECOMPILE_ABI, this.provider);
	}

	/**
	 * Returns the contract instance
	 * @returns {Contract} Contract instance
	 */
	getContract(): Contract {
		return this.contract;
	}

	/**
	 * Get back the balance for a user of a specific tokenId
	 *
	 * @param {TAddress} owner - The owner we are querying the balance for
	 * @param {TTokenId} id - The tokenId we query the balance of
	 * @returns {bigint} The balance
	 */
	balanceOf = async (owner: TAddress, id: TTokenId): Promise<bigint> => {
		return this.contract.balanceOf(owner, id);
	};

	/**
	 * Get back the balances for different addresses of specific tokenIds
	 *
	 * @param {TAddress[]}owners - The owner we are querying the balance for
	 * @param {TTokenId[]} ids - The tokenIds we query the balance of
	 * @returns {bigint[]} The balances
	 */
	balanceOfBatch = async (owners: TAddress[], ids: TTokenId[]): Promise<bigint[]> => {
		return this.contract.balanceOfBatch(owners, ids);
	};

	/**
	 * Sets approval for a specific operator
	 *
	 * @param {TAddress} operator - The address that becomes approved
	 * @param {boolean} approved - Whether the approval is true or false
	 * @returns {TransactionResponse} Transaction object
	 */
	setApprovalForAll = async (
		operator: TAddress,
		approved: boolean
	): Promise<TransactionResponse> => {
		return this.contract.setApprovalForAll(operator, approved);
	};

	/**
	 * Checks the whether operator is approved on account
	 *
	 * @param {TAddress} account - The account that the operator operates
	 * @param {TAddress} operator - The operator address to check
	 * @returns {boolean} Whether approved or not
	 */
	isApprovedForAll = async (account: TAddress, operator: TAddress): Promise<boolean> => {
		return this.contract.isApprovedForAll(account, operator);
	};

	/**
	 * Allows to transfer a sft token with a certain quantity
	 *
	 * @param {TAddress} from - The sender
	 * @param {TAddress} to - The receiver
	 * @param {TTokenId} id - The tokenId
	 * @param {number} amount - The quantity of the tokenId we wish to send
	 * @param {BytesLike} data - Any additional data
	 * @returns {TransactionResponse} Transaction object
	 */
	safeTransferFrom = async (
		from: TAddress,
		to: TAddress,
		id: TTokenId,
		amount: number,
		data: BytesLike
	): Promise<TransactionResponse> => {
		return this.contract.safeTransferFrom(from, to, id, amount, data);
	};

	/**
	 * Allows to transfer sft tokens with a certain quantity in a batch
	 *
	 * @param {TAddress} from - The sender
	 * @param {TAddress} to - The receiver
	 * @param {TTokenId[]} ids - The tokenIds
	 * @param {number[]}amounts - The quantities of the tokenIds we wish to send
	 * @param {BytesLike} data - Any additional hexadecimal data
	 * @returns {TransactionResponse} Transaction object
	 */
	safeBatchTransferFrom = async (
		from: TAddress,
		to: TAddress,
		ids: TTokenId[],
		amounts: number[],
		data: BytesLike
	): Promise<TransactionResponse> => {
		return this.contract.safeBatchTransferFrom(from, to, ids, amounts, data);
	};

	/**
	 * Allows to burn a sft token with a set quantity
	 *
	 * @param {TAddress} account - The address to burn from
	 * @param {TTokenId} id - The tokenId to burn
	 * @param {number} value - The quantity to burn
	 * @returns {TransactionResponse} Transaction object
	 */
	burn = async (account: TAddress, id: TTokenId, value: number): Promise<TransactionResponse> => {
		return this.contract.burn(account, id, value);
	};

	/**
	 * Allows to burn a sft tokens with set quantities
	 *
	 * @param {TAddress} account - The address to burn from
	 * @param {TTokenId[]} ids - The tokenIds to burn
	 * @param {number[]} values - The quantities to burn
	 * @returns {TransactionResponse} Transaction object
	 */
	burnBatch = async (
		account: TAddress,
		ids: TTokenId[],
		values: number[]
	): Promise<TransactionResponse> => {
		return this.contract.burnBatch(account, ids, values);
	};

	/**
	 * Returns the total supply of a specific tokenId
	 *
	 * @param {TTokenId} id - The tokenId
	 * @returns {bigint} The total supply
	 */
	totalSupply = async (id: TTokenId): Promise<bigint> => {
		return this.contract.totalSupply(id);
	};

	/**
	 * Check whether specific token exists
	 *
	 * @param {TTokenId} id - The tokenId
	 * @returns {boolean} Whether token exists or not
	 */
	exists = async (id: TTokenId): Promise<boolean> => {
		return this.contract.exists(id);
	};

	/**
	 * Retrieve the metadata uri for a specific token
	 *
	 * @param {TTokenId} id - The tokenId
	 * @returns {string} The uri
	 */
	uri = async (id: TTokenId): Promise<string> => {
		return this.contract.uri(id);
	};

	/**
	 * Allows to mint new sft tokens
	 *
	 * @param {TAddress} owner - The address to mint to
	 * @param {TTokenId} id - The tokenId to mint
	 * @param {number} amount - The quantity to mint
	 * @returns {TransactionResponse} Transaction object
	 */
	mint = async (owner: TAddress, id: TTokenId, amount: number): Promise<TransactionResponse> => {
		return this.contract.mint(owner, id, amount);
	};

	/**
	 * Allows to mint multiple sft tokens at once
	 *
	 * @param {TAddress} owner - The address to mint to
	 * @param {TTokenId[]} ids - The tokenIds to mint
	 * @param {number[]} amounts - The quantities to mint
	 * @returns {TransactionResponse} Transaction object
	 */
	mintBatch = async (
		owner: TAddress,
		ids: TTokenId[],
		amounts: number[]
	): Promise<TransactionResponse> => {
		return this.contract.mintBatch(owner, ids, amounts);
	};

	/**
	 * Update the maximum supply for a specific tokenId
	 *
	 * @param {TTokenId} id - The tokenIds set the max supply for
	 * @param {number} maxSupply - The maximum supply
	 * @returns {TransactionResponse} Transaction object
	 */
	setMaxSupply = async (id: TTokenId, maxSupply: number): Promise<TransactionResponse> => {
		return this.contract.setMaxSupply(id, maxSupply);
	};

	/**
	 * Updates the metadata uri for the entire collection
	 *
	 * @param {string} baseURI - The new baseUri
	 * @returns {TransactionResponse} Transaction object
	 */
	setBaseURI = async (baseURI: string): Promise<TransactionResponse> => {
		return this.contract.setBaseURI(hexlify(toUtf8Bytes(baseURI)));
	};

	/**
	 * Gives back the collectionId for the collection if there is one
	 * @returns {number | null} CollectionId if available
	 */
	getCollectionId = (): number | null => {
		return contractAddressToNativeId(this.contractAddress);
	};

	// "function createToken(bytes name, uint128 initialIssuance, uint128 maxIssuance, address tokenOwner) external returns (uint32)",
}
