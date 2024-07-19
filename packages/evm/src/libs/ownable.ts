import { Contract, TransactionResponse } from "ethers";
import { OWNABLE_ABI } from "..";
import { TAddress, TProviderOrSigner } from "../types";

/** Class that allows to use a contract with ownable implemented. */
export class Ownable {
	provider: TProviderOrSigner;
	contractAddress: TAddress;
	contract: Contract;
	/**
	 * Initialize a new ownable instance
	 * @param {TProviderOrSigner} provider - An ethers provider.
	 * @param {TAddress} contractAddress - The contractAddress of the collection
	 */
	constructor(provider: TProviderOrSigner, contractAddress: TAddress) {
		this.provider = provider;
		this.contractAddress = contractAddress;
		this.contract = new Contract(this.contractAddress, OWNABLE_ABI, this.provider);
	}
	/**
	 * Returns the contract's owner
	 * @returns {TAddress} The contract owner
	 */
	owner = async (): Promise<TAddress> => {
		return this.contract.owner();
	};

	/**
	 * Renounces ownership of the contract
	 * @returns {TransactionResponse} Transaction object
	 */
	renounceOwnership = async (): Promise<TransactionResponse> => {
		return this.contract.renounceOwnership();
	};

	/**
	 * Transfers ownership of the contract
	 *
	 * @param {TAddress} owner - The address of the new owner
	 * @returns {TransactionResponse} Transaction object
	 */
	transferOwnership = async (owner: TAddress): Promise<TransactionResponse> => {
		return this.contract.transferOwnership(owner);
	};
}
