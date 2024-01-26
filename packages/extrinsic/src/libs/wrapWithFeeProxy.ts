import { ApiPromise } from "@polkadot/api";
import { RuntimeDispatchInfo } from "@polkadot/types/interfaces";
import { err, fromPromise, ok } from "neverthrow";
import { XRP_ASSET_ID } from "../constants";
import { DexAmountsIn, Extrinsic } from "../types";
import { errWithPrefix } from "../utils";

const errPrefix = errWithPrefix("FeeProxyWrapper");

export function wrapWithFeeProxy(
	api: ApiPromise,
	senderAddress: string,
	assetId: number,
	slippage = 0.05
) {
	return async (extrinsic: Extrinsic) => {
		const fetchResult = await fetchPaymentInfo(api, extrinsic, senderAddress, assetId);
		if (fetchResult.isErr()) return fetchResult;
		const paymentInfo = fetchResult.value;

		const calResult = await calculateMaxPayment(api, paymentInfo, assetId, slippage);
		if (calResult.isErr()) return calResult;
		const maxPayment = calResult.value.toString();

		return ok(api.tx.feeProxy.callWithFeePreferences(assetId, maxPayment, extrinsic));
	};
}

async function fetchPaymentInfo(
	api: ApiPromise,
	extrinsic: Extrinsic,
	senderAddress: string,
	assetId: number
) {
	const feeProxy = api.tx.feeProxy.callWithFeePreferences(assetId, 0, extrinsic);
	const result = await fromPromise(
		feeProxy.paymentInfo(senderAddress),
		(e) => new Error(`Unable to fetch payment info for "${senderAddress}"`, { cause: e })
	);

	if (result.isErr()) return err(result.error);
	const paymentInfo = result.value;
	if (paymentInfo.isEmpty)
		return err(
			new Error(`Unable to get payment info for "${senderAddress}"`, {
				cause: paymentInfo.toJSON(),
			})
		);

	return ok(paymentInfo);
}

async function calculateMaxPayment(
	api: ApiPromise,
	paymentInfo: RuntimeDispatchInfo,
	assetId: number,
	slippage: number
) {
	const fee = paymentInfo.partialFee.toString();
	const result = await fromPromise(
		api.rpc.dex.getAmountsIn(fee, [assetId, XRP_ASSET_ID]),
		(e) =>
			new Error(`Unable to fetch swap info for the pair "[${assetId}, ${XRP_ASSET_ID}]"`, {
				cause: e,
			})
	);

	if (result.isErr()) return err(result.error);
	const quote = result.value as unknown as DexAmountsIn;
	if (!quote.Ok)
		return err(
			new Error(`Unable to extract swap info for the pair "[${assetId}, ${XRP_ASSET_ID}]"`, {
				cause: quote,
			})
		);

	const amountIn = quote.Ok[0];
	const maxPayment = amountIn * (1 + slippage);

	return ok(maxPayment.toFixed());
}
