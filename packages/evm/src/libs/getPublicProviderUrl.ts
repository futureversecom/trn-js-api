export type NetworkName = "root" | "porcini" | "sprout-1" | "sprout-2";

export type HttpProviderUrl = `http${string}`;
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
