import { BytesLike, Contract, TransactionResponse } from "ethers";
import { TAddress, TProviderOrSigner } from "../types";
import { FEE_PROXY_PRECOMPILE_ABI, FEE_PROXY_PRECOMPILE_ADDRESS } from "./constants";

/** Class that allows to use the fee proxy pallet. */
export class FeeProxy {
	provider: TProviderOrSigner;
	contract: Contract;

	/**
	 * Initialize a new fee proxy instance
	 * @param {TProviderOrSigner} provider - An ethers provider.
	 */
	constructor(provider: TProviderOrSigner) {
		this.provider = provider;
		this.contract = new Contract(
			FEE_PROXY_PRECOMPILE_ADDRESS,
			FEE_PROXY_PRECOMPILE_ABI,
			this.provider
		);
	}

	/**
	 * Returns the contract instance
	 * @returns {Contract} The contract instance
	 */
	getContract(): Contract {
		return this.contract;
	}

	/**
	 * Execute a transaction with the transaction fee paid in a different currency
	 *
	 * @param {TAddress} asset - The asset used as to pay the tx fees with
	 * @param {number} maxPayment - The maximum amount paid for gas
	 * @param {TAddress} target - The target address
	 * @param {BytesLike} input - The input data of the transaction (calldata)
	 * @returns {TransactionResponse} Transaction object
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
