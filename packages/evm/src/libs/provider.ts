import { NetworkName } from "../types";
import { JsonRpcProvider } from "ethers";
import {
	MAINNET_CHAINID,
	PORCINI_CHAINID,
	RNS_REGISTRAR_ADDRESS_PORCINI,
	RNS_REGISTRAR_ADDRESS_ROOT,
} from "./constants";
import { getPublicProviderUrl } from "./getPublicProviderUrl";

export const getProvider = (network: NetworkName) => {
	return new JsonRpcProvider(getPublicProviderUrl(network), {
		name: "provider",
		chainId:
			network === "root" ? MAINNET_CHAINID : network === "porcini" ? PORCINI_CHAINID : undefined,
		ensAddress:
			network === "root"
				? RNS_REGISTRAR_ADDRESS_ROOT
				: network === "porcini"
					? RNS_REGISTRAR_ADDRESS_PORCINI
					: undefined,
	});
};
