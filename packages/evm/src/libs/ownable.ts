import { Contract, TransactionResponse } from "ethers";
import { OWNABLE_ABI } from "..";
import { TAddress, TProviderOrSigner } from "../types";

export class Ownable {
	provider: TProviderOrSigner;
	contractAddress: TAddress;
	contract: Contract;

	constructor(provider: TProviderOrSigner, contractAddress: TAddress) {
		this.provider = provider;
		this.contractAddress = contractAddress;
		this.contract = new Contract(this.contractAddress, OWNABLE_ABI, this.provider);
	}
	/**
	 * Returns the contract's owner
	 */
	owner = async (): Promise<TAddress> => {
		return this.contract.owner();
	};

	/**
	 * Renounces ownership of the contract
	 */
	renounceOwnership = async (): Promise<TransactionResponse> => {
		return this.contract.renounceOwnership();
	};

	/**
	 * Transfers ownership of the contract
	 *
	 * @param owner - The address of the new owner
	 */
	transferOwnership = async (owner: TAddress): Promise<TransactionResponse> => {
		return this.contract.transferOwnership(owner);
	};
}
