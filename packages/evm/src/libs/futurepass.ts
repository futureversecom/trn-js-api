import { BytesLike, Contract, TransactionResponse, solidityPackedKeccak256 } from "ethers";
import { Ownable } from "./ownable";
import { FUTUREPASS_PRECOMPILE_ABI } from "./constants";
import { ProxyType, TAddress, TProviderOrSigner } from "../types";

export class Futurepass extends Ownable {
	provider: TProviderOrSigner;
	futurepassAddress: TAddress;
	contract: Contract;

	constructor(provider: TProviderOrSigner, futurepassAddress: TAddress) {
		super(provider, futurepassAddress);
		this.provider = provider;
		this.futurepassAddress = futurepassAddress;
		this.contract = new Contract(this.futurepassAddress, FUTUREPASS_PRECOMPILE_ABI, this.provider);
	}

	/**
	 * Returns the contract instance
	 */
	getContract() {
		return this.contract;
	}

	/**
	 * Gets the delegate type for given delegate
	 *
	 * @param delegate - The address to get the type for
	 */
	deletegateType = async (delegate: TAddress): Promise<ProxyType> => {
		return this.contract.delegateType(delegate);
	};

	/**
	 * Registers a new delegate using a signature
	 *
	 * @param delegate - The delegate address
	 * @param proxyType - The proxyType
	 * @param deadline - The epoch timestamp
	 */
	registerDelegateWithSignature = async (
		delegate: TAddress,
		proxyType: ProxyType,
		deadline: number
	): Promise<TransactionResponse> => {
		if (Math.floor(new Date().getTime() / 1000.0) >= deadline) {
			throw new Error("Provided deadline has already passed");
		}
		const message = solidityPackedKeccak256(
			["address", "address", "uint8", "uint32"],
			[this.futurepassAddress, delegate, proxyType, deadline]
		).substring(2);

		const signature = await this.provider?.provider?.signMessage(message);

		return this.contract.registerDelegateWithSignature(delegate, proxyType, deadline, signature);
	};

	/**
	 * Unregisters given delegate
	 *
	 * @param delegate - The address to unregister
	 */
	unregisterDelegate = async (delegate: TAddress): Promise<TransactionResponse> => {
		return this.contract.unregisterDelegate(delegate);
	};

	proxyCall = async (
		callType: number,
		callTo: TAddress,
		value: number,
		callData: BytesLike
	): Promise<TransactionResponse> => {
		return this.contract.proxyCall(callType, callTo, value, callData, { value });
	};
}
