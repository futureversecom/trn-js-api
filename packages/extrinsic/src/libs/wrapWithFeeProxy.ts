import { ApiPromise } from "@polkadot/api";
import { ok } from "neverthrow";
import { Extrinsic } from "../types";
import { errWithPrefix, fetchPaymentInfo } from "../utils";

const errPrefix = errWithPrefix("FeeProxyWrapper");

/**
 * @param api -
 * @param senderAddress -
 * @param assetId -
 * @param slippage -
 * @returns
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
