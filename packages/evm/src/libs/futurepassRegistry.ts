import { Contract, TransactionResponse } from "ethers";
import {
	FUTUREPASS_REGISTRAR_PRECOMPILE_ABI,
	FUTUREPASS_REGISTRAR_PRECOMPILE_ADDRESS,
} from "./constants";
import { TAddress, TProviderOrSigner } from "../types";

/** Class that allows to use the futurepass registry pallet. */
export class FuturepassRegistry {
	provider: TProviderOrSigner;
	contract: Contract;
	/**
	 * Initialize a new futurepass registry instance
	 * @param {TProviderOrSigner} provider - An ethers provider.
	 */
	constructor(provider: TProviderOrSigner) {
		this.provider = provider;
		this.contract = new Contract(
			FUTUREPASS_REGISTRAR_PRECOMPILE_ADDRESS,
			FUTUREPASS_REGISTRAR_PRECOMPILE_ABI,
			this.provider
		);
	}

	/**
	 * Returns the contract instance
	 * @returns {Contract} Contract instance
	 */
	getContract(): Contract {
		return this.contract;
	}
	/**
	 * Returns the futurepass for given address
	 *
	 * @param {TAddress} owner - The address
	 * @returns {TAddress} The futurepass
	 */
	futurepassOf = async (owner: TAddress): Promise<TAddress> => {
		return this.contract.futurepassOf(owner);
	};

	/**
	 * Allows for creation of a new futurepass
	 *
	 * @param {TAddress} owner - The owner of the futurepass
	 * @returns {TransactionResponse} Transaction object
	 */
	create = async (owner: TAddress): Promise<TransactionResponse> => {
		return this.contract.create(owner);
	};
}
