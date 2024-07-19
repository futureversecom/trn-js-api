import { Contract, TransactionResponse } from "ethers";
import {
	FUTUREPASS_REGISTRAR_PRECOMPILE_ABI,
	FUTUREPASS_REGISTRAR_PRECOMPILE_ADDRESS,
} from "./constants";
import { TAddress, TProviderOrSigner } from "../types";

export class FuturepassRegistry {
	provider: TProviderOrSigner;
	contract: Contract;

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
	 */
	getContract() {
		return this.contract;
	}

	futurepassOf = async (owner: TAddress): Promise<TAddress> => {
		return this.contract.futurepassOf(owner);
	};

	create = async (owner: TAddress): Promise<TransactionResponse> => {
		return this.contract.create(owner);
	};
}
