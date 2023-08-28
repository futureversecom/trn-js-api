import { HttpProvider, WsProvider } from "@polkadot/api";
import { ApiOptions } from "@polkadot/api/types";

export type WsProviderUrl = `ws${string}`;
export type HttpProviderUrl = `http${string}`;

export function getProvider(url: WsProviderUrl | HttpProviderUrl): {
  provider: ApiOptions["provider"];
} {
  if (url.indexOf("http") === 0) return { provider: new HttpProvider(url) };
  if (url.indexOf("ws") === 0) return { provider: new WsProvider(url) };
  throw new Error(`Unrecognized provider url: "${url}"`);
}

export type NetworkName = "root" | "porcini";
export function getPublicProvider(
  network: NetworkName,
  useWsProvider = true
): ReturnType<typeof getProvider> {
  return getProvider(getPublicProviderUrl(network, useWsProvider));
}

export function getPublicProviderUrl(
  network: NetworkName,
  useWsProvider = true
): WsProviderUrl | HttpProviderUrl {
  if (network === "root") {
    return useWsProvider
      ? "wss://root.rootnet.live/archive/ws"
      : "https://root.rootnet.live/archive";
  }
  if (network === "porcini") {
    return useWsProvider
      ? "wss://porcini.rootnet.app/archive/ws"
      : "https://porcini.rootnet.app/archive";
  }
  throw new Error(`Unrecognized network name: "${network}"`);
}

export function getLocalProvider(useWsProvider = true): ReturnType<typeof getProvider> {
  return getProvider(useWsProvider ? "ws://127.0.0.1:9944" : "http://127.0.0.1:9933");
}
