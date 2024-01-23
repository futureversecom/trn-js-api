import { ApiPromise } from "@polkadot/api";
import { Keyring } from "@polkadot/keyring";
import { KeyringPair } from "@polkadot/keyring/types";
import { hexToU8a } from "@polkadot/util";
import { SignProvider, WrappedExtrinsic } from "../types";
import { SignerOptions } from "@polkadot/api-base/types/submittable";
import { fromPromise, ok } from "neverthrow";
import { createSignatureOptions, errWithPrefix } from "../utils";

const err = errWithPrefix("NativeKeyringProvider");

export function signWithNativeKeyring(
	api: ApiPromise,
	seedOrKeyring: string | KeyringPair,
	signerOptions: Partial<SignerOptions> = {}
): SignProvider {
	return {
		id: "nativeKeyring",
		async sign(wrappedEx: WrappedExtrinsic) {
			const { extrinsic, senderAddress } = wrappedEx;

			const account =
				typeof seedOrKeyring === "string" ? createKeyringFromSeed(seedOrKeyring) : seedOrKeyring;

			const createOptionsResult = await fromPromise(
				createSignatureOptions(api, senderAddress, signerOptions),
				(e) => {
					if (e instanceof Error) return e.message;
					return `Unable to create signature otions`;
				}
			);

			if (createOptionsResult.isErr()) return err(createOptionsResult.error);
			const signatureOptions = createOptionsResult.value;
			extrinsic.sign(account, signatureOptions);

			return ok({
				...wrappedEx,
				extrinsic,
			});
		},
	};
}

function createKeyringFromSeed(seed: string): KeyringPair {
	const keyring = new Keyring({ type: "ethereum" });
	const seedU8a = hexToU8a(seed);
	return keyring.addFromSeed(seedU8a);
}
