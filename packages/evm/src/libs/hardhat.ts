import { TAddress } from "../types";
import { getPublicProviderUrl } from "./getPublicProviderUrl";

export const getHardhatNetworkConfig = (accounts: TAddress[]) => {
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
