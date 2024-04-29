import { ApiPromise } from "@polkadot/api";
import { fromPromise, ok } from "neverthrow";
import { Extrinsic, ExtrinsicSigner, XrplSigner, XummTransaction } from "../types";
import { errWithPrefix } from "../utils";
import { blake256 } from "codechain-primitives";
import { u32 } from "@polkadot/types";
import { XummJsonTransaction } from "xumm-sdk/dist/src/types";

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
	xrplSigner: XrplSigner
): ExtrinsicSigner {
	return async (extrinsic: Extrinsic) => {
		const memoData = await createSigningMemoData(api, senderAddress, extrinsic);

		const requestResult = await requestSign(xrplSigner, memoData, senderAddress);
		if (requestResult.isErr())
			return errPrefix(requestResult.error.message, requestResult.error.cause);

		const { signature, message } = requestResult.value;
		if (!signature || !message)
			return errPrefix(`${!signature ? "Signature" : "Message"} is empty`);

		return ok(api.tx.xrpl.transact(`0x${message}`, `0x${signature}`, extrinsic));
	};
}

export function xrplWalletSigner(xrplSigner: XrplSigner) {
	return (api: ApiPromise, senderAddress: string) =>
		signWithXrplWallet.bind(undefined, api, senderAddress, xrplSigner);
}

export type MemoData = Awaited<ReturnType<typeof createSigningMemoData>>;
async function createSigningMemoData(api: ApiPromise, senderAddress: string, extrinsic: Extrinsic) {
	const maxBlockNumber = +(await api.query.system.number()) + 20;
	const hashedExtrinsicWithoutPrefix = blake256(extrinsic.toHex().slice(6)).toString();
	const nonce = (
		(await api.query.system.account(senderAddress)) as unknown as { nonce: u32 }
	).nonce.toString();

	return [
		{
			Memo: {
				MemoType: stringToHex("extrinsic"),
				MemoData: stringToHex(
					`${api.genesisHash
						.toHex()
						.slice(2)}:${nonce}:${maxBlockNumber}:0:${hashedExtrinsicWithoutPrefix}`
				),
			},
		},
	];
}

async function requestSign(xrplSigner: XrplSigner, memos: MemoData, senderAddress: string) {
	return await fromPromise(
		xrplSigner(memos, senderAddress),
		(e) => new Error(`Unable to request signing for "${senderAddress}"`, { cause: e })
	);
}
