export type NetworkName = "root" | "porcini";

export type HttpProviderUrl = `http${string}`;
export function getPublicProviderUrl(network: NetworkName): HttpProviderUrl {
  if (network === "root") {
    return "https://root.rootnet.live/archive";
  }
  if (network === "porcini") {
    return "https://porcini.rootnet.app/archive";
  }
  throw new Error(`Unrecognized network name: "${network}"`);
}
