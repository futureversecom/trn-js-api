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

			const createOptionsResult = await fromPromise(
				createSignatureOptions(api, senderAddress, signerOptions),
				(e) => {
					if (e instanceof Error) return e.message;
					return `Unable to create signature otions`;
				}
			);
			if (createOptionsResult.isErr()) return err(createOptionsResult.error);

			const [payload, ethHash] = createSignerPayload(api, createOptionsResult.value, extrinsic);

			const requestResult = await fromPromise(
				requestSign(ethereumSigner, ethHash, senderAddress),
				(e) => {
					if (e instanceof Error) return e.message;
					return `Unable to request signature from Ethereum provider`;
				}
			);
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
	return "request" in ethereumSigner
		? await ethereumSigner.request({
				method: "personal_sign",
				params: [ethHash, senderAddress],
		  })
		: await ethereumSigner.signMessage(ethHash);
}
