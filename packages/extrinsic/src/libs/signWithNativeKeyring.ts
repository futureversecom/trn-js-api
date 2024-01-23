import { ApiPromise } from "@polkadot/api";
import { Keyring } from "@polkadot/keyring";
import { KeyringPair } from "@polkadot/keyring/types";
import { SignatureOptions, IExtrinsicEra } from "@polkadot/types/types";
import { hexToU8a } from "@polkadot/util";
import { SignProvider, WrappedExtrinsic } from "../types";
import { SignerOptions } from "@polkadot/api-base/types/submittable";
import { ok } from "neverthrow";

export function signWithNativeKeyring(
	api: ApiPromise,
	seedOrKeyring: string | KeyringPair,
	signOptions: Partial<SignerOptions> = {}
): SignProvider {
	return {
		id: "nativeKeyring",
		async sign(wrappedEx: WrappedExtrinsic) {
			const { extrinsic, senderAddress } = wrappedEx;

			const account =
				typeof seedOrKeyring === "string" ? createKeyringFromSeed(seedOrKeyring) : seedOrKeyring;

			const signatureOptions = await createSignatureOptions(api, senderAddress, signOptions);

			extrinsic.sign(account, signatureOptions);

			return Promise.resolve(
				ok({
					...wrappedEx,
					extrinsic,
				})
			);
		},
	};
}

function createKeyringFromSeed(seed: string): KeyringPair {
	const keyring = new Keyring({ type: "ethereum" });
	const seedU8a = hexToU8a(seed);
	return keyring.addFromSeed(seedU8a);
}

async function createSignatureOptions(
	api: ApiPromise,
	senderAddress: string,
	options: Partial<SignerOptions>
) {
	const { header, mortalLength, nonce } = await api.derive.tx.signingInfo(senderAddress);
	const era = api.registry.createTypeUnsafe("ExtrinsicEra", [
		{
			current: header?.number,
			period: mortalLength,
		},
	]) as IExtrinsicEra;
	return {
		blockHash: header?.hash,
		nonce,
		era,
		...options,
		genesisHash: api.genesisHash,
		runtimeVersion: api.runtimeVersion,
		signedExtensions: api.registry.signedExtensions,
	} as SignatureOptions;
}
