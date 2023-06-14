import { HttpProvider, WsProvider } from "@polkadot/api";
import { ApiOptions } from "@polkadot/api/types";

export type WsProviderUrl = `ws${string}`;
export type HttpProviderUrl = `http${string}`;

export function getProvider(
	url: WsProviderUrl | HttpProviderUrl,
): { provider: ApiOptions["provider"] } {
	if (url.indexOf("http") === 0) return { provider: new HttpProvider(url) };
	if (url.indexOf("ws") === 0) return { provider: new WsProvider(url) };
	throw new Error(`Unrecognized provider url: "${url}"`);
}

export type NetworkName = "root" | "porcini";
export function getPublicProvider(network: NetworkName): ReturnType<typeof getProvider> {
	if (network === "root") return getProvider("wss://root.rootnet.live/ws");
	if (network === "porcini") return getProvider("wss://porcini.rootnet.app/ws");
	throw new Error(`Unrecognized network name: "${network}"`);
}

export function getLocalProvider(): ReturnType<typeof getProvider> {
	return getProvider("ws://127.0.0.1:9944");
}
