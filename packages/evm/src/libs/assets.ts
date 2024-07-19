import { Contract, TransactionResponse } from "ethers";
import { TAddress, TProviderOrSigner } from "../types";
import { Ownable } from "./ownable";
import { ERC20_PRECOMPILE_ABI } from "./constants";

export class Assets extends Ownable {
	provider: TProviderOrSigner;
	contractAddress: TAddress;
	contract: Contract;

	constructor(provider: TProviderOrSigner, contractAddress: TAddress) {
		super(provider, contractAddress);
		this.provider = provider;
		this.contractAddress = contractAddress;
		this.contract = new Contract(this.contractAddress, ERC20_PRECOMPILE_ABI, this.provider);
	}

	/**
	 * Returns the contract instance
	 */
	getContract() {
		return this.contract;
	}

	/**
	 * Adjusts the approval amount for spender
	 *
	 * @param spender - The spender's address
	 * @param amount - The approval amount
	 */
	approve = async (spender: TAddress, amount: number): Promise<TransactionResponse> => {
		return this.contract.approve(spender, amount);
	};

	/**
	 * Returns the allowance of the spender for owner address
	 *
	 * @param owner - The owner's address
	 * @param spender - The spender's address
	 */
	allowance = async (owner: TAddress, spender: TAddress): Promise<bigint> => {
		return this.contract.allowance(owner, spender);
	};

	/**
	 * Returns the balance for given address
	 *
	 * @param owner - The owner's address
	 */
	balanceOf = async (owner: TAddress): Promise<bigint> => {
		return this.contract.balanceOf(owner);
	};

	/**
	 * Returns the token name
	 */
	name = async (): Promise<string> => {
		return this.contract.name();
	};

	/**
	 * Returns the token symbol
	 */
	symbol = async (): Promise<string> => {
		return this.contract.symbol();
	};

	/**
	 * Returns the token decimals
	 */
	decimals = async (): Promise<bigint> => {
		return this.contract.decimals();
	};

	/**
	 * Transfer token to given address
	 *
	 * @param who - The address to transfer to
	 * @param amount - The amount to transfer
	 */
	transfer = async (who: TAddress, amount: number): Promise<TransactionResponse> => {
		return this.contract.transfer(who, amount);
	};
}
