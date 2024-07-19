import { HttpProviderUrl, NetworkName } from "../types";

/**
 * Retrieve RPC URL for given network
 * @param {NetworkName} network - The desired network
 * @returns {HttpProviderUrl} The rpc url
 */
export function getPublicProviderUrl(network: NetworkName): HttpProviderUrl {
	const networks: Record<NetworkName, HttpProviderUrl> = {
		"root": "https://root.rootnet.live/archive",
		"porcini": "https://porcini.rootnet.app/archive",
		"sprout-1": "https://porcini.devnet.rootnet.app/archive",
		"sprout-2": "https://root.devnet.rootnet.app/archive",
	};

	if (networks[network]) {
		return networks[network];
	}

	throw new Error(`Unrecognized network name: "${network}"`);
}
