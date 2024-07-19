import { HttpProviderUrl, TAddress } from "../types";
import { getPublicProviderUrl } from "./getPublicProviderUrl";

interface IHardhatNetworks {
	networks: Record<"porcini" | "root", IHardhatNetworkConfig>;
}

interface IHardhatNetworkConfig {
	url: HttpProviderUrl;
	chainId: number;
	accounts: TAddress[];
}
/**
 * Retrieve Hardhat network config
 * @param {TAddress[]} accounts - An array of private keys
 * @returns {IHardhatNetworks} Networks to be used in a hardhat config
 */
export const getHardhatNetworkConfig = (accounts: TAddress[]): IHardhatNetworks => {
	return {
		networks: {
			porcini: {
				url: getPublicProviderUrl("porcini"),
				chainId: 7672,
				accounts,
			},
			root: {
				url: getPublicProviderUrl("root"),
				chainId: 7668,
				accounts,
			},
		},
	};
};
