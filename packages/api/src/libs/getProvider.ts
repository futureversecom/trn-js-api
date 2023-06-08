import { HttpProvider, WsProvider } from "@polkadot/api";

export type WsProviderUrl = `ws${string}`;
export type HttpProviderUrl = `http${string}`;

export function getProvider(url: WsProviderUrl | HttpProviderUrl): WsProvider | HttpProvider {
	if (url.indexOf("http") === 0) return new HttpProvider(url);
	if (url.indexOf("ws") === 0) return new WsProvider(url);
	throw new Error(`Unrecognized provider url: "${url}"`);
}

export type NetworkName = "root" | "porcini";
export function getPublicProvider(network: NetworkName) {
	if (network === "root") return getProvider("wss://root.rootnet.live/ws");
	if (network === "porcini") return getProvider("wss://porcini.rootnet.app/ws");
	throw new Error(`Unregconize network name: "${network}"`);
}

export function getLocalProvider() {
	return getProvider("ws://127.0.0.1:9944");
}
