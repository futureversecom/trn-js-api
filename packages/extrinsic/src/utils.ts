import { ApiPromise } from "@polkadot/api";
import { SignerOptions } from "@polkadot/api-base/types/submittable";
import { RuntimeDispatchInfo } from "@polkadot/types/interfaces";
import { IExtrinsicEra, SignatureOptions } from "@polkadot/types/types";
import { ethereumEncode } from "@polkadot/util-crypto/ethereum";
import { Result as NTResult, err, fromPromise, ok } from "neverthrow";
import { deriveAddress } from "ripple-keypairs";
import { XRP_ASSET_ID } from "./constants";
import { DexRpc, Extrinsic, Result } from "./types";

export function safeReturn<T>(result: NTResult<T, Error>): Result<T> {
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
	const result = await fromPromise(
		api.derive.tx.signingInfo(senderAddress),
		(e) => new Error(`Unable to fetch signing info for "${senderAddress}"`, { cause: e })
	);

	if (result.isErr()) return err(result.error);
	const { header, mortalLength, nonce } = result.value;
	if (!header) return err(new Error(`Unable to retrieve block header`, { cause: result.value }));

	const era = api.registry.createTypeUnsafe<IExtrinsicEra>("ExtrinsicEra", [
		{
			current: header.number,
			period: mortalLength,
		},
	]);
	return ok({
		blockHash: header.hash,
		nonce,
		era,
		...options,
		genesisHash: api.genesisHash,
		runtimeVersion: api.runtimeVersion,
		signedExtensions: api.registry.signedExtensions,
		version: api.extrinsicVersion,
	} as SignatureOptions);
}

export async function fetchPaymentInfo(
	api: ApiPromise,
	senderAddress: string,
	extrinsic: Extrinsic,
	assetId: number
) {
	const paymentInfoResult = await fromPromise(
		extrinsic.paymentInfo(senderAddress),
		(e) => new Error(`Unable to fetch payment info for "${senderAddress}"`, { cause: e })
	);

	if (paymentInfoResult.isErr()) return err(paymentInfoResult.error);
	const paymentInfo = paymentInfoResult.value as RuntimeDispatchInfo;

	if (paymentInfo.isEmpty)
		return err(
			new Error(`Unable to get payment info for "${senderAddress}"`, {
				cause: paymentInfo.toJSON(),
			})
		);

	if (assetId === XRP_ASSET_ID) return ok(BigInt(paymentInfo.partialFee.toString()));

	const fee = paymentInfoResult.value.partialFee.toString();
	const getAmountsInResult = await fromPromise(
		(api as ApiPromise & DexRpc).rpc.dex.getAmountsIn(fee, [assetId, XRP_ASSET_ID]),
		(e) =>
			new Error(`Unable to fetch swap info for the pair "[${assetId}, ${XRP_ASSET_ID}]"`, {
				cause: e,
			})
	);

	if (getAmountsInResult.isErr()) return err(getAmountsInResult.error);
	const quote = getAmountsInResult.value;
	if (!quote.Ok)
		return err(
			new Error(`Unable to extract swap info for the pair "[${assetId}, ${XRP_ASSET_ID}]"`, {
				cause: quote,
			})
		);

	return ok(BigInt(quote.Ok[0].toString()));
}

/**
 * Derive a given public key into an ETH address format and XRPL r-address format
 *
 * @param publicKey - Public key to derive the pair of addresses for
 * @returns Tupple of `ethAddress` and `xrplAddress`
 */
export function deriveAddressPair(publicKey: string) {
	const ethAddress = ethereumEncode(publicKey);
	const xrplAddress = deriveAddress(publicKey);

	return [ethAddress, xrplAddress];
}
