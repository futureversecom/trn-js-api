import { ApiPromise } from "@polkadot/api";
import { SignerOptions } from "@polkadot/api/types";
import { fromPromise, ok } from "neverthrow";
import { Extrinsic, ExtrinsicSigner, XrplSigner } from "../types";
import { createSignatureOptions, errWithPrefix } from "../utils";
import { XummJsonTransaction } from "xumm-sdk/dist/src/types";
import { blake256 } from "codechain-primitives";
import { SignatureOptions } from "@polkadot/types/types";
import { encode } from "xrpl-binary-codec-prerelease";

const stringToHex = (str: string) => {
	return str
		.split("")
		.map((c) => c.charCodeAt(0).toString(16))
		.join("");
};

const errPrefix = errWithPrefix("XrplWallet");

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
	signerOptions: Partial<SignerOptions> = {}
): ExtrinsicSigner {
	return async (extrinsic: Extrinsic) => {
		const createResult = await createSignatureOptions(api, senderAddress, signerOptions);

		if (createResult.isErr())
			return errPrefix(createResult.error.message, createResult.error.cause);
		const memoData = await createSigningMemoData(api, createResult.value, extrinsic);

		const requestResult = await requestSign(xrplSigner, memoData, senderAddress);
		if (requestResult.isErr())
			return errPrefix(requestResult.error.message, requestResult.error.cause);

		const { signature, payload } = requestResult.value;
		if (!signature) return errPrefix("Signature is empty");

		return ok(api.tx.xrpl.transact(`0x${encode(payload)}`, `0x${signature}`, extrinsic));
	};
}

export function xrplWalletSigner(
	xrplSigner: XrplSigner,
	signerOptions: Partial<SignerOptions> = {}
) {
	return (api: ApiPromise, senderAddress: string) =>
		signWithXrplWallet.bind(undefined, api, senderAddress, xrplSigner, signerOptions);
}

async function createSigningMemoData(
	api: ApiPromise,
	signatureOptions: Pick<SignatureOptions, "nonce">,
	extrinsic: Extrinsic
): Promise<Partial<XummJsonTransaction>> {
	const maxBlockNumber = +(await api.query.system.number()) + 20;
	const hashedExtrinsicWithoutPrefix = blake256(extrinsic.toHex().slice(6)).toString();

	return {
		AccountTxnID: "16969036626990000000000000000000F236FD752B5E4C84810AB3D41A3C2580",
		Memos: [
			{
				Memo: {
					MemoType: stringToHex("extrinsic"),
					MemoData: stringToHex(
						`${api.genesisHash.toHex().slice(2)}:${
							signatureOptions.nonce
						}:${maxBlockNumber}:0:${hashedExtrinsicWithoutPrefix}`
					),
				},
			},
		],
	} as Partial<XummJsonTransaction>;
}

async function requestSign(
	xrplSigner: XrplSigner,
	payload: Partial<XummJsonTransaction>,
	senderAddress: string
) {
	return await fromPromise(
		xrplSigner(payload, senderAddress),
		(e) => new Error(`Unable to request signing for "${senderAddress}"`, { cause: e })
	);
}
