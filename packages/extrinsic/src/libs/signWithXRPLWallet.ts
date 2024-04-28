import { ApiPromise } from "@polkadot/api";
import { SignerOptions } from "@polkadot/api/types";
import { fromPromise, ok } from "neverthrow";
import { Extrinsic, ExtrinsicSigner, XrplSigner } from "../types";
import { createSignatureOptions, errWithPrefix } from "../utils";
import { XummJsonTransaction } from "xumm-sdk/dist/src/types";
import { blake256 } from "codechain-primitives";
import { Value } from "@sinclair/typebox/value";
import { decode, encode, encodeForSigning } from "xrpl-binary-codec-prerelease";
import { SignatureOptions } from "@polkadot/types/types";
import { stringToHex } from "@polkadot/util";
import { Type } from "@sinclair/typebox";
import { deriveAddress } from "ripple-keypairs";

const errPrefix = errWithPrefix("XrplWallet");

interface XrplOptions {
	instructions?: string;
}

type WithXrplOptions<T> = T & XrplOptions;

const XrplDecodedTx = Type.Object({
	AccountTxnID: Type.String(),
	SigningPubKey: Type.String(),
	TxnSignature: Type.String(),
	Account: Type.String(),
});

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
): ExtrinsicSigner {
	return async (extrinsic: Extrinsic) => {
		const createResult = await createSignatureOptions(api, senderAddress, signerOptions);

		if (createResult.isErr())
			return errPrefix(createResult.error.message, createResult.error.cause);
		const payload = await createSigningMemoData(api, senderAddress, createResult.value, extrinsic);

		const requestResult = await requestSign(xrplSigner, payload, senderAddress);
		if (requestResult.isErr())
			return errPrefix(requestResult.error.message, requestResult.error.cause);

		const signature = requestResult.value;
		if (!signature) return errPrefix("Signature is empty");

		return ok(api.tx.xrpl.transact(`0x${encode(payload)}`, `0x${signature}`, extrinsic));
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
	senderAddress: string,
	signatureOptions: Partial<WithXrplOptions<SignatureOptions>>,
	extrinsic: Extrinsic
): Promise<XummJsonTransaction> {
	const maxBlockNumber = +(await api.query.system.number()) + 20;
	const hashedExtrinsicWithoutPrefix = blake256(extrinsic.toHex().slice(6)).toString();

	return {
		SigningPubKey: senderAddress.slice(2),
		Account: deriveAddress(senderAddress.slice(2)),
		Memos: [
			{
				Memo: {
					MemoType: stringToHex("extrinsic"),
					MemoData: stringToHex(
						`${signatureOptions.genesisHash}:${signatureOptions.nonce}:${maxBlockNumber}:${
							signatureOptions.tip ?? 0
						}:${hashedExtrinsicWithoutPrefix}`
					),
				},
			},
		],
	} as unknown as XummJsonTransaction;
}

async function requestSign(
	xrplSigner: XrplSigner,
	payload: XummJsonTransaction,
	senderAddress: string
) {
	return await fromPromise(
		xrplSigner(payload, senderAddress),
		(e) => new Error(`Unable to request signing for "${senderAddress}"`, { cause: e })
	);
}
