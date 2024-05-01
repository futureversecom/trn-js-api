import { ApiPromise } from "@polkadot/api";
import { fromPromise, ok } from "neverthrow";
import { Extrinsic, ExtrinsicSigner, XrplSigner } from "../types";
import { errWithPrefix } from "../utils";
import { blake256 } from "codechain-primitives";

function stringToHex(str: string) {
	return str
		.split("")
		.map((c) => c.charCodeAt(0).toString(16))
		.join("");
}

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
		const createResult = await fromPromise(
			createSignatureOptions(api, senderAddress, extrinsic),
			(e) => new Error(`Unable to create signature options for "${senderAddress}"`, { cause: e })
		);
		if (createResult.isErr())
			return errPrefix(createResult.error.message, createResult.error.cause);

		const memoData = createSigningMemoData(createResult.value);

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

async function createSignatureOptions(
	api: ApiPromise,
	senderAddress: string,
	extrinsic: Extrinsic
) {
	const [blockNumber, signingInfo] = await Promise.allSettled([
		api.query.system.number(),
		api.derive.tx.signingInfo(senderAddress),
	]);

	if (blockNumber.status === "rejected") throw blockNumber.reason;
	if (signingInfo.status === "rejected") throw signingInfo.reason;

	return {
		nonce: signingInfo.value.nonce.toString(),
		genesisHash: api.genesisHash.toHex().slice(2),
		maxBlockNumber: +blockNumber.value + signingInfo.value.mortalLength,
		hashedExtrinsicWithoutPrefix: blake256(extrinsic.toHex().slice(6)).toString(),
	};
}

interface XrplSignatureOptions {
	nonce: string;
	genesisHash: string;
	maxBlockNumber: number;
	hashedExtrinsicWithoutPrefix: string;
}
export type MemoData = Awaited<ReturnType<typeof createSigningMemoData>>;
function createSigningMemoData(signatureOptions: XrplSignatureOptions) {
	const { nonce, genesisHash, maxBlockNumber, hashedExtrinsicWithoutPrefix } = signatureOptions;

	return [
		{
			Memo: {
				MemoType: stringToHex("extrinsic"),
				MemoData: stringToHex(
					`${genesisHash}:${nonce}:${maxBlockNumber}:0:${hashedExtrinsicWithoutPrefix}`
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
