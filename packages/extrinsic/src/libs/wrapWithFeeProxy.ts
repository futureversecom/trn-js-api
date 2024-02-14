import { ApiPromise } from "@polkadot/api";
import { ok } from "neverthrow";
import { Extrinsic } from "../types";
import { errWithPrefix, fetchPaymentInfo } from "../utils";

const errPrefix = errWithPrefix("FeeProxyWrapper");

/**
 * Wraps a given extrinsic with `feeProxy.callWithFeePreferences` extrinsic
 *
 * @param api - An instance of `ApiPromise` from `@polkadot/api`
 * @param senderAddress - The sender address
 * @param assetId - The asset ID to pay the fee in
 * @param slippage - Percentage of buffer for max payment calculation
 * @returns An ExtrinsicWrapper function to be used with the `wrap` function
 */
export function wrapWithFeeProxy(
	api: ApiPromise,
	senderAddress: string,
	assetId: number,
	slippage = 0.05
) {
	return async (extrinsic: Extrinsic) => {
		const fetchResult = await fetchPaymentInfo(
			api,
			senderAddress,
			api.tx.feeProxy.callWithFeePreferences(assetId, 0, extrinsic),
			assetId
		);

		if (fetchResult.isErr()) return errPrefix(fetchResult.error.message, fetchResult.error.cause);
		const paymentInfo = fetchResult.value;
		const maxPayment = BigInt((Number(paymentInfo) * (1 + slippage)).toFixed());

		return ok(api.tx.feeProxy.callWithFeePreferences(assetId, maxPayment, extrinsic));
	};
}

export function feeProxyWrapper(assetId: number, slippage = 0.05) {
	return (api: ApiPromise, senderAddress: string) =>
		wrapWithFeeProxy.bind(undefined, api, senderAddress, assetId, slippage);
}
