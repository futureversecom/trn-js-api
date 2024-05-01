import { ApiPromise } from "@polkadot/api";
import { SignerOptions } from "@polkadot/api/types";
import { IKeyringPair } from "@polkadot/types/types";
import { ok } from "neverthrow";
import { Extrinsic, ExtrinsicSigner } from "../types";
import { createKeyringFromSeed, createSignatureOptions, errWithPrefix } from "../utils";

const errPrefix = errWithPrefix("NativeWallet");

/**
 * A signer that uses the native KeyringPair instance to sign the extrinsic
 *
 * @param api - An instance of `ApiPromise` from `@polkadot/api`
 * @param senderAddress - The sender address
 * @param seedOrKeyringPair - Either the private key in string or instance of KeyringPair
 * @param signerOptions - An object of `SignerOptions` to be included in the signing payload
 * @returns An ExtrinsicSigner to be used with the `sign` function
 */
export function signWithNativeWallet(
	api: ApiPromise,
	senderAddress: string,
	seedOrKeyringPair: string | IKeyringPair,
	signerOptions: Partial<SignerOptions> = {}
): ExtrinsicSigner {
	return async (extrinsic: Extrinsic) => {
		const sender =
			typeof seedOrKeyringPair === "string"
				? createKeyringFromSeed(seedOrKeyringPair)
				: seedOrKeyringPair;

		const createResult = await createSignatureOptions(api, senderAddress, signerOptions);

		if (createResult.isErr())
			return errPrefix(createResult.error.message, createResult.error.cause);
		const signatureOptions = createResult.value;
		extrinsic.sign(sender, signatureOptions);

		return ok(extrinsic);
	};
}

export function nativeWalletSigner(
	seedOrKeyringPair: string | IKeyringPair,
	signerOptions: Partial<SignerOptions> = {}
) {
	return (api: ApiPromise, senderAddress: string) =>
		signWithNativeWallet.bind(undefined, api, senderAddress, seedOrKeyringPair, signerOptions);
}
