import { BytesLike, Contract, hexlify, toUtf8Bytes, TransactionResponse } from "ethers";
import { TAddress, TProviderOrSigner, TTokenId } from "../types";
import { Ownable } from "./ownable";
import { ERC1155_PRECOMPILE_ABI } from "./constants";
import { collectionIdToERC1155Address, contractAddressToNativeId } from "./commonUtils";

export class Sft extends Ownable {
	provider: TProviderOrSigner;
	contractAddress: TAddress;
	contract: Contract;

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
	 */
	getContract() {
		return this.contract;
	}

	/**
	 * Get back the balance for a user of a specific tokenId
	 *
	 * @param owner - The owner we are querying the balance for
	 * @param amount - The tokenId we query the balance of
	 */
	balanceOf = async (owner: TAddress, id: TTokenId): Promise<bigint> => {
		return this.contract.balanceOf(owner, id);
	};

	/**
	 * Get back the balances for different addresses of specific tokenIds
	 *
	 * @param owner - The owner we are querying the balance for
	 * @param ids - The tokenIds we query the balance of
	 */
	balanceOfBatch = async (owner: TAddress[], ids: TTokenId[]): Promise<bigint[]> => {
		return this.contract.balanceOfBatch(owner, ids);
	};

	/**
	 * Sets approval for a specific operator
	 *
	 * @param operator - The address that becomes approved
	 * @param approved - Whether the approval is true or false
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
	 * @param account - The account that the operator operates
	 * @param operator - The operator address to check
	 */
	isApprovedForAll = async (account: TAddress, operator: TAddress): Promise<boolean> => {
		return this.contract.isApprovedForAll(account, operator);
	};

	/**
	 * Allows to transfer a sft token with a certain quantity
	 *
	 * @param from - The sender
	 * @param to - The receiver
	 * @param id - The tokenId
	 * @param amount - The quantity of the tokenId we wish to send
	 * @param data - Any additional hexadecimal data
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
	 * @param from - The sender
	 * @param to - The receiver
	 * @param ids - The tokenIds
	 * @param amounts - The quantities of the tokenIds we wish to send
	 * @param data - Any additional hexadecimal data
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
	 * @param account - The address to burn from
	 * @param id - The tokenId to burn
	 * @param value - The quantity to burn
	 */
	burn = async (account: TAddress, id: TTokenId, value: number): Promise<TransactionResponse> => {
		return this.contract.burn(account, id, value);
	};

	/**
	 * Allows to burn a sft tokens with set quantities
	 *
	 * @param account - The address to burn from
	 * @param ids - The tokenIds to burn
	 * @param values - The quantities to burn
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
	 * @param id - The tokenId
	 */
	totalSupply = async (id: TTokenId): Promise<string> => {
		return this.contract.totalSupply(id);
	};

	/**
	 * Check whether specific token exists
	 *
	 * @param id - The tokenId
	 */
	exists = async (id: TTokenId): Promise<string> => {
		return this.contract.exists(id);
	};

	/**
	 * Retrieve the metadata uri for a specific token
	 *
	 * @param id - The tokenId
	 */
	uri = async (id: TTokenId): Promise<string> => {
		return this.contract.uri(id);
	};

	/**
	 * Allows to mint new sft tokens
	 *
	 * @param account - The address to mint to
	 * @param id - The tokenId to mint
	 * @param amount - The quantity to mint
	 */
	mint = async (owner: TAddress, id: TTokenId, amount: number): Promise<TransactionResponse> => {
		return this.contract.mint(owner, id, amount);
	};

	/**
	 * Allows to mint multiple sft tokens at once
	 *
	 * @param account - The address to mint to
	 * @param ids - The tokenIds to mint
	 * @param amounts - The quantities to mint
	 */
	mintBatch = async (
		owner: TAddress,
		ids: TTokenId,
		amounts: number
	): Promise<TransactionResponse> => {
		return this.contract.mintBatch(owner, ids, amounts);
	};

	/**
	 * Update the maximum supply for a specific tokenId
	 *
	 * @param id - The tokenIds set the max supply for
	 * @param maxSupply - The maximum supply
	 */
	setMaxSupply = async (id: TTokenId, maxSupply: number): Promise<TransactionResponse> => {
		return this.contract.setMaxSupply(id, maxSupply);
	};

	/**
	 * Updates the metadata uri for the entire collection
	 *
	 * @param baseURI - The new baseUri
	 */
	setBaseURI = async (baseURI: string): Promise<TransactionResponse> => {
		return this.contract.setBaseURI(hexlify(toUtf8Bytes(baseURI)));
	};

	/**
	 * Gives back the collectionId for the collection if there is one
	 */
	getCollectionId = () => {
		return contractAddressToNativeId(this.contractAddress);
	};

	// "function createToken(bytes name, uint128 initialIssuance, uint128 maxIssuance, address tokenOwner) external returns (uint32)",
}
