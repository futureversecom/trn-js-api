import { AbstractProvider } from "ethers";
import { TAddress } from "../types";

/** Class that allows to use the RNS registry. */
export class RNS {
	provider: AbstractProvider;

	/**
	 * Initialize a new RNS instance
	 * @param {AbstractProvider} provider - An ethers provider.
	 */
	constructor(provider: AbstractProvider) {
		this.provider = provider;
	}

	/**
	 * Get the address of a name
	 * @returns {TAddress | null} The address of the name, if present
	 */
	getAddressFromName = async (name: string): Promise<TAddress | null> => {
		return this.provider.resolveName(name) as Promise<TAddress | null>;
	};

	/**
	 * Get the name of an address
	 * @returns {string | null} The name if present
	 */
	getNameForAddress = async (address: TAddress): Promise<string | null> => {
		return this.provider.lookupAddress(address);
	};
}
