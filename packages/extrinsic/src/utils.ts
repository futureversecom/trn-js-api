import { ApiPromise } from "@polkadot/api";
import { Result, err } from "neverthrow";
import { PlainResult } from "./types";
import { SignatureOptions, IExtrinsicEra } from "@polkadot/types/types";
import { SignerOptions } from "@polkadot/api-base/types/submittable";

export function safeReturn<T>(result: Result<T, Error>): PlainResult<T> {
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
		version: api.extrinsicVersion,
	} as SignatureOptions;
}
