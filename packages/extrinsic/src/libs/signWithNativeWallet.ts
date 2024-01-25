import { ApiPromise, Keyring } from "@polkadot/api";
import { IKeyringPair } from "@polkadot/types/types";
import { hexToU8a } from "@polkadot/util";
import { ExtrinsicSigner, Extrinsic } from "../types";
import { SignerOptions } from "@polkadot/api-base/types/submittable";
import { ok } from "neverthrow";
import { createSignatureOptions, errWithPrefix } from "../utils";

const err = errWithPrefix("NativeWallet");

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

		if (createResult.isErr()) return err(createResult.error);
		const signatureOptions = createResult.value;
		extrinsic.sign(sender, signatureOptions);

		return ok(extrinsic);
	};
}

function createKeyringFromSeed(seed: string) {
	const keyring = new Keyring({ type: "ethereum" });
	const seedU8a = hexToU8a(seed);
	return keyring.addFromSeed(seedU8a);
}
