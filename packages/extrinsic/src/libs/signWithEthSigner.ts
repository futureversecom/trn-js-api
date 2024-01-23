import { ApiPromise } from "@polkadot/api";
import { EthereumSigner, Extrinsic, SignProvider, WrappedExtrinsic } from "../types";
import { SignerOptions } from "@polkadot/api-base/types/submittable";
import { fromPromise, ok } from "neverthrow";
import { SignerPayload } from "@polkadot/types/interfaces";
import { blake2AsHex } from "@polkadot/util-crypto";
import { SignatureOptions } from "@polkadot/types/types";
import { createSignatureOptions, errWithPrefix } from "../utils";

const err = errWithPrefix("EthSignerProvider");

export function signWithEthSigner(
	api: ApiPromise,
	ethereumSigner: EthereumSigner,
	signerOptions: Partial<SignerOptions> = {}
): SignProvider {
	return {
		id: "ethSigner",
		async sign(wrappedEx: WrappedExtrinsic) {
			const { extrinsic, senderAddress } = wrappedEx;

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

			return ok({
				...wrappedEx,
				extrinsic,
			});
		},
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

async function requestSign(ethereumSigner: EthereumSigner, ethHash: string, senderAddress: string) {
	return await fromPromise(
		"request" in ethereumSigner
			? ethereumSigner.request({
					method: "personal_sign",
					params: [ethHash, senderAddress],
			  })
			: ethereumSigner.signMessage(ethHash),
		(e) => (e instanceof Error ? e.message : `Unable to request signing for "${senderAddress}"`)
	);
}
