import { BytesLike, Contract, TransactionResponse } from "ethers";
import { TAddress, TProviderOrSigner, TTokenId } from "../types";
import { Ownable } from "./ownable";
import { ERC1155_PRECOMPILE_ABI } from "./constants";

export class Sft extends Ownable {
	provider: TProviderOrSigner;
	contractAddress: TAddress;
	contract: Contract;

	constructor(provider: TProviderOrSigner, contractAddress: TAddress) {
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
		id: number,
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
		ids: number[],
		amounts: number[],
		data: BytesLike
	): Promise<TransactionResponse> => {
		return this.contract.safeBatchTransferFrom(from, to, ids, amounts, data);
	};

	// // Burnable
	// "function burn(address account, uint256 id, uint256 value) external",
	// "function burnBatch(address account, uint256[] ids, uint256[] values) external",
	// // Supply
	// "function totalSupply(uint256 id) external view returns (uint256)",
	// "function exists(uint256 id) external view returns (bool)",
	// // Metadata
	// "function uri(uint256 id) external view returns (string memory)",

	// "function createToken(bytes name, uint128 initialIssuance, uint128 maxIssuance, address tokenOwner) external returns (uint32)",
	// "function mint(address owner, uint256 id, uint256 amount) external",
	// "function mintBatch(address owner, uint256[] ids, uint256[] amounts) external",
	// "function setMaxSupply(uint256 id, uint32 maxSupply) external",
	// "function setBaseURI(bytes baseURI) external",
}
