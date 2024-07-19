import { BytesLike, Contract, TransactionResponse } from "ethers";
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

	/**
	 * Execute a transaction with the transaction fee paid in a different currency
	 *
	 * @param asset - The asset used as to pay the tx fees with
	 * @param maxPayment - The maximum amount paid for gas
	 * @param target - The target address
	 * @param input - The input data of the transaction (calldata)
	 */
	callWithFeePreferences = async (
		asset: TAddress,
		maxPayment: number,
		target: TAddress,
		input: BytesLike
	): Promise<TransactionResponse> => {
		return this.contract.callWithFeePreferences(asset, maxPayment, target, input);
	};
}
