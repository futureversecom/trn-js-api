export type NetworkName = "root" | "porcini" | "sprout-1" | "sprout-2";

export type HttpProviderUrl = `http${string}`;
export function getPublicProviderUrl(network: NetworkName): HttpProviderUrl {
	if (network === "root") {
		return "https://root.rootnet.live/archive";
	}
	if (network === "porcini") {
		return "https://porcini.rootnet.app/archive";
	}

	if (network === "sprout-1") {
		return "https://porcini.devnet.rootnet.app/archive";
	}

	if (network === "sprout-2") {
		return "https://root.devnet.rootnet.app/archive";
	}

	throw new Error(`Unrecognized network name: "${network}"`);
}
