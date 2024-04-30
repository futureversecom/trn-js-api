import { Keyring } from "@polkadot/api";
import { hexToU8a } from "@polkadot/util";

export type Signer = ReturnType<InstanceType<typeof Keyring>["addFromSeed"]>;

export function createKeyring(seed: string): Signer {
	const keyring = new Keyring({ type: "ethereum" });
	const seedU8a = hexToU8a(seed);
	return keyring.addFromSeed(seedU8a);
}
