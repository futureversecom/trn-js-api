import { ApiPromise } from "@polkadot/api";
import { SignerOptions } from "@polkadot/api/types";
import { fromPromise, ok } from "neverthrow";
import { Extrinsic, XrplDecodedTx, XrplExtrinsicSigner, XrplSigner } from "../types";
import { createSignatureOptions, errWithPrefix } from "../utils";
import { XummPostPayloadBodyJson } from "xumm-sdk/dist/src/types";
import { blake256 } from "codechain-primitives";
import { Value } from "@sinclair/typebox/value";
import { decode } from "xrpl-binary-codec-prerelease";
import { SignatureOptions } from "@polkadot/types/types";
import { stringToHex } from "@polkadot/util";

const errPrefix = errWithPrefix("XrplWallet");

interface XrplOptions {
	instructions?: string;
}

type WithXrplOptions<T> = T & XrplOptions;

/**
 * @param api - An instance of `ApiPromise` from `@polkadot/api`
 * @param senderAddress - The sender's address
 * @param xrplSigner - A generic callback to interface with different XRPL wallets
 * @param signerOptions - An object of `SignerOptions` to be included in the signing payload, with optional `instructions`
 * @returns An ExtrinsicSigner function to be used by the `sign` function
 */
export function signWithXrplWallet(
	api: ApiPromise,
	senderAddress: string,
	xrplSigner: XrplSigner,
	signerOptions: Partial<WithXrplOptions<SignerOptions>> = {}
): XrplExtrinsicSigner {
	return async (extrinsic: Extrinsic) => {
		const createResult = await createSignatureOptions(api, senderAddress, signerOptions);

		if (createResult.isErr())
			return errPrefix(createResult.error.message, createResult.error.cause);
		const payload = await createSigningMemoData(api, createResult.value, extrinsic);

		const requestResult = await requestSign(xrplSigner, payload, senderAddress);
		if (requestResult.isErr())
			return errPrefix(requestResult.error.message, requestResult.error.cause);

		const txHex = requestResult.value;
		if (!txHex) return errPrefix("Transaction hex is empty");

		const decodedTx = decode(txHex);
		if (!Value.Check(XrplDecodedTx, decodedTx)) return errPrefix("Decoded transaction is invalid");

		return ok({
			txHex,
			decodedTx: Value.Decode(XrplDecodedTx, decodedTx),
		});
	};
}

export function xrplWalletSigner(
	xrplSigner: XrplSigner,
	signerOptions: Partial<WithXrplOptions<SignerOptions>> = {}
) {
	return (api: ApiPromise, senderAddress: string) =>
		signWithXrplWallet.bind(undefined, api, senderAddress, xrplSigner, signerOptions);
}

async function createSigningMemoData(
	api: ApiPromise,
	signatureOptions: Partial<WithXrplOptions<SignatureOptions>>,
	extrinsic: Extrinsic
): Promise<XummPostPayloadBodyJson> {
	const maxBlockNumber = +(await api.query.system.number()) + 20;
	const hashedExtrinsicWithoutPrefix = blake256(extrinsic.toHex().slice(6)).toString();

	return {
		txjson: {
			TransactionType: "SignIn",
			Memos: [
				{
					Memo: {
						MemoType: stringToHex("extrinsic"),
						MemoData: stringToHex(
							`${signatureOptions.genesisHash}:${signatureOptions.nonce}:${maxBlockNumber}:0:${hashedExtrinsicWithoutPrefix}`
						),
					},
				},
			],
		},
		custom_meta: {
			instruction: signatureOptions?.instructions ?? "Sign extrinsic",
		},
	};
}

async function requestSign(
	xrplSigner: XrplSigner,
	payload: XummPostPayloadBodyJson,
	senderAddress: string
) {
	return await fromPromise(
		xrplSigner(payload, senderAddress),
		(e) => new Error(`Unable to request signing for "${senderAddress}"`, { cause: e })
	);
}
