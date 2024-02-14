import { ApiPromise } from "@polkadot/api";
import { SignerOptions } from "@polkadot/api/types";
import { SignerPayload } from "@polkadot/types/interfaces";
import { SignatureOptions } from "@polkadot/types/types";
import { blake2AsHex } from "@polkadot/util-crypto";
import { fromPromise, ok } from "neverthrow";
import { EthereumSigner, Extrinsic, ExtrinsicSigner } from "../types";
import { createSignatureOptions, errWithPrefix } from "../utils";

const errPrefix = errWithPrefix("EthereumWallet");

/**
 * A signer that uses compatible Ethereum wallet to sign the extrinsic.
 *
 * @param api - An instance of `ApiPromise` from `@polkadot/api`
 * @param senderAddress - The sender's address
 * @param ethereumSigner - A generic callback to interface with different Ethereum wallets
 * @param signerOptions - An object of `SignerOptions` to be included in the signing payload
 * @returns An ExtrinsicSigner function to be used by the `sign` function
 */
export function signWithEthereumWallet(
	api: ApiPromise,
	senderAddress: string,
	ethereumSigner: EthereumSigner,
	signerOptions: Partial<SignerOptions> = {}
): ExtrinsicSigner {
	return async (extrinsic: Extrinsic) => {
		const createResult = await createSignatureOptions(api, senderAddress, signerOptions);

		if (createResult.isErr())
			return errPrefix(createResult.error.message, createResult.error.cause);
		const [payload, ethHash] = createSignerPayload(api, createResult.value, extrinsic);

		const requestResult = await requestSign(ethereumSigner, ethHash, senderAddress);
		if (requestResult.isErr())
			return errPrefix(requestResult.error.message, requestResult.error.cause);

		extrinsic.addSignature(
			senderAddress,
			requestResult.value as `0x${string}`,
			payload.toPayload()
		);

		return ok(extrinsic);
	};
}

export function ethereumWalletSigner(
	ethereumSigner: EthereumSigner,
	signerOptions: Partial<SignerOptions> = {}
) {
	return (api: ApiPromise, senderAddress: string) =>
		signWithEthereumWallet.bind(undefined, api, senderAddress, ethereumSigner, signerOptions);
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
	return await fromPromise(
		ethereumSigner(message, senderAddress),
		(e) => new Error(`Unable to request signing for "${senderAddress}"`, { cause: e })
	);
}
