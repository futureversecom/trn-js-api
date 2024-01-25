import { ApiPromise } from "@polkadot/api";
import { SignerOptions } from "@polkadot/api-base/types/submittable";
import { SignerPayload } from "@polkadot/types/interfaces";
import { SignatureOptions } from "@polkadot/types/types";
import { blake2AsHex } from "@polkadot/util-crypto";
import { fromPromise, ok } from "neverthrow";
import { EthereumSigner, Extrinsic, ExtrinsicSigner } from "../types";
import { createSignatureOptions, errWithPrefix } from "../utils";

const err = errWithPrefix("EthereumWallet");

export function signWithEthereumWallet(
	api: ApiPromise,
	senderAddress: string,
	ethereumSigner: EthereumSigner,
	signerOptions: Partial<SignerOptions> = {}
): ExtrinsicSigner {
	return async (extrinsic: Extrinsic) => {
		const createResult = await createSignatureOptions(api, senderAddress, signerOptions);

		if (createResult.isErr()) return err(createResult.error);
		const [payload, ethHash] = createSignerPayload(api, createResult.value, extrinsic);

		const requestResult = await requestSign(ethereumSigner, ethHash, senderAddress);
		if (requestResult.isErr()) return err(requestResult.error);

		extrinsic.addSignature(
			senderAddress,
			requestResult.value as `0x${string}`,
			payload.toPayload()
		);

		return ok(extrinsic);
	};
}

function createSignerPayload(
	api: ApiPromise,
	signatureOptions: SignatureOptions,
	extrinsic: Extrinsic
): [SignerPayload, `0x${string}`] {
	const payload = api.registry.createTypeUnsafe<SignerPayload>("SignerPayload", [
		{
			...signatureOptions,
			method: extrinsic.method,
		},
	]);
	const { data } = payload.toRaw();
	const ethHash = blake2AsHex(data.length > (256 + 1) * 2 ? blake2AsHex(data) : data);

	return [payload, ethHash];
}

async function requestSign(ethereumSigner: EthereumSigner, message: string, senderAddress: string) {
	return await fromPromise(ethereumSigner(message, senderAddress), (e) =>
		e instanceof Error ? e.message : `Unable to request signing for "${senderAddress}"`
	);
}
