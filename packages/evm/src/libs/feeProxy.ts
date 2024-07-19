import { Contract } from "ethers";
import { TAddress, TProviderOrSigner } from "../types";
import { FEE_PROXY_PRECOMPILE_ABI, FEE_PROXY_PRECOMPILE_ADDRESS } from "./constants";

export class FeeProxy {
	provider: TProviderOrSigner;
	contractAddress: TAddress;
	contract: Contract;

	constructor(provider: TProviderOrSigner, contractAddress: TAddress) {
		this.provider = provider;
		this.contractAddress = contractAddress;
		this.contract = new Contract(
			FEE_PROXY_PRECOMPILE_ADDRESS,
			FEE_PROXY_PRECOMPILE_ABI,
			this.provider
		);
	}

	/**
	 * Returns the contract instance
	 */
	getContract() {
		return this.contract;
	}

	// "function callWithFeePreferences(address asset, uint128 maxPayment, address target, bytes input)",
}
