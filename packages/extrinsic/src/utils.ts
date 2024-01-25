import { ApiPromise } from "@polkadot/api";
import { Result as NTResult, err, fromPromise, ok } from "neverthrow";
import { Result } from "./types";
import { SignatureOptions, IExtrinsicEra } from "@polkadot/types/types";
import { SignerOptions } from "@polkadot/api-base/types/submittable";

export function safeReturn<T>(result: NTResult<T, Error>): Result<T> {
	if (result.isErr()) {
		return {
			value: result.error,
			ok: false,
		};
	}

	return {
		value: result.value,
		ok: true,
	};
}

export function errWithPrefix(prefix: string) {
	return <T = never>(msg: string, cause?: unknown) =>
		err<T, Error>(new Error(`${prefix}::${msg}`, { cause }));
}

export async function createSignatureOptions(
	api: ApiPromise,
	senderAddress: string,
	options: Partial<SignerOptions>
) {
	const result = await fromPromise(api.derive.tx.signingInfo(senderAddress), (e) =>
		e instanceof Error ? e.message : `Unable to fetch signing info for "${senderAddress}"`
	);

	if (result.isErr()) return err(result.error);
	const { header, mortalLength, nonce } = result.value;
	if (!header) return err(`Unable to retrieve block header`);

	const era = api.registry.createTypeUnsafe<IExtrinsicEra>("ExtrinsicEra", [
		{
			current: header.number,
			period: mortalLength,
		},
	]);
	return ok({
		blockHash: header.hash,
		nonce,
		era,
		...options,
		genesisHash: api.genesisHash,
		runtimeVersion: api.runtimeVersion,
		signedExtensions: api.registry.signedExtensions,
		version: api.extrinsicVersion,
	} as SignatureOptions);
}
