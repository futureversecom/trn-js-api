import { BytesLike, Contract, Signer, TransactionResponse, solidityPackedKeccak256 } from "ethers";
import { Ownable } from "./ownable";
import { FUTUREPASS_PRECOMPILE_ABI } from "./constants";
import { CallType, ProxyType, TAddress, TProviderOrSigner } from "../types";

/** Class that allows to use the futurepass pallet. */
export class Futurepass extends Ownable {
	provider: TProviderOrSigner;
	futurepassAddress: TAddress;
	contract: Contract;

	/**
	 * Initialize a new futurepass instance
	 * @param {TProviderOrSigner} provider - An ethers provider.
	 * @param {TAddress} futurepassAddress - The futurepass address we want to use
	 */
	constructor(provider: TProviderOrSigner, futurepassAddress: TAddress) {
		super(provider, futurepassAddress);
		this.provider = provider;
		this.futurepassAddress = futurepassAddress;
		this.contract = new Contract(this.futurepassAddress, FUTUREPASS_PRECOMPILE_ABI, this.provider);
	}

	/**
	 * Returns the contract instance
	 * @returns {Contract} A contract instance
	 */
	getContract(): Contract {
		return this.contract;
	}

	/**
	 * Gets the delegate type for given delegate
	 *
	 * @param {TAddress} delegate - The address to get the type for
	 * @returns {ProxyType} The proxy type
	 */
	deletegateType = async (delegate: TAddress): Promise<ProxyType> => {
		return this.contract.delegateType(delegate);
	};

	/**
	 * Registers a new delegate using a signature
	 *
	 * @param {TAddress} delegate - The delegate address
	 * @param {ProxyType} proxyType - The proxyType
	 * @param {number} deadline - The epoch timestamp
	 * @returns {TransactionResponse} Transaction object
	 */
	registerDelegateWithSignature = async (
		delegate: TAddress,
		proxyType: ProxyType,
		deadline: number
	): Promise<TransactionResponse> => {
		if (Math.floor(new Date().getTime() / 1000.0) >= deadline) {
			throw new Error("Provided deadline has already passed");
		}
		const repProvider: Signer = this.provider as Signer;
		if (!repProvider?.signMessage) throw new Error("Given provider is not a signer");

		const message = solidityPackedKeccak256(
			["address", "address", "uint8", "uint32"],
			[this.futurepassAddress, delegate, proxyType, deadline]
		).substring(2);

		const signature = await repProvider.signMessage(message);

		return this.contract.registerDelegateWithSignature(delegate, proxyType, deadline, signature);
	};

	/**
	 * Unregisters given delegate
	 *
	 * @param {TAddress} delegate - The address to unregister
	 * @returns {TransactionResponse} Transaction object
	 */
	unregisterDelegate = async (delegate: TAddress): Promise<TransactionResponse> => {
		return this.contract.unregisterDelegate(delegate);
	};

	/**
	 * Proxy a call
	 *
	 * @param {CallType} callType - The type of call
	 * @param {TAddress} callTo - The destination
	 * @param {number} value - The value of the transaction
	 * @param {BytesLike} callData - The data input of the transaction
	 * @returns {TransactionResponse} Transaction object
	 */
	proxyCall = async (
		callType: CallType,
		callTo: TAddress,
		value: number,
		callData: BytesLike
	): Promise<TransactionResponse> => {
		return this.contract.proxyCall(callType, callTo, value, callData, { value });
	};
}
