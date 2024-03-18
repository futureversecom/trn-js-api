import { ApiPromise } from "@polkadot/api";
import { SignerOptions } from "@polkadot/api/types";
import { err, fromPromise } from "neverthrow";
import { Extrinsic } from "../types";

export function signWithXRPLWallet(
	api: ApiPromise,
	senderPublicKey: string,
	signerOptions: Partial<SignerOptions> = {}
) {
	return async (extrinsic: Extrinsic) => {};
}

async function createSigningMemoData(
	api: ApiPromise,
	senderAddress: string,
	extrinsic: Extrinsic,
	options: Partial<Pick<SignerOptions, "nonce" | "tip">> = {}
) {
	api.tx.length.toExponential();
	const result = await fromPromise(
		api.derive.tx.signingInfo(senderAddress),
		(e) => new Error(`Unable to fetch signing info for "${senderAddress}"`, { cause: e })
	);

	if (result.isErr()) return err(result.error);
	const { header, mortalLength, nonce } = result.value;
	if (!header) return err(new Error(`Unable to retrieve block header`, { cause: result.value }));
}
