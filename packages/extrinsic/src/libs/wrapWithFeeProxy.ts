import { ApiPromise } from "@polkadot/api";
import { RuntimeDispatchInfo } from "@polkadot/types/interfaces";
import { fromPromise, ok } from "neverthrow";
import { FeeProxyWrapperOpts, WrappedExtrinsic, DexAmountsIn } from "../types";
import { errWithPrefix } from "../utils";
import { XRP_ASSET_ID } from "../constants";

const err = errWithPrefix("FeeProxyWrapper");

export function wrapWithFeeProxy(api: ApiPromise, opts: FeeProxyWrapperOpts) {
	return {
		id: "feeProxy",
		async wrap(wrappedEx: WrappedExtrinsic) {
			const { extrinsic, senderAddress } = wrappedEx;
			const { assetId } = opts;

			const paymentInfoResult = await fetchPaymentInfo(extrinsic, senderAddress);
			if (paymentInfoResult.isErr()) return paymentInfoResult;
			const paymentInfo = paymentInfoResult.value;

			const maxPaymentResult = await calculateMaxPayment(api, paymentInfo, opts);
			if (maxPaymentResult.isErr()) return maxPaymentResult;
			const maxPayment = maxPaymentResult.value;

			return ok({
				...wrappedEx,
				extrinsic: api.tx.feeProxy.callWithFeePreferences(assetId, maxPayment, extrinsic),
			});
		},
	};
}

async function fetchPaymentInfo(
	extrinsic: WrappedExtrinsic["extrinsic"],
	senderAddress: WrappedExtrinsic["senderAddress"]
) {
	const result = await fromPromise(extrinsic.paymentInfo(senderAddress), (e) => {
		if (e instanceof Error) return e.message;
		return `Unable to fetch payment info for "${senderAddress}"`;
	});

	if (result.isErr()) return err(result.error);
	const paymentInfo = result.value;
	if (paymentInfo.isEmpty) return err(`Unable to get payment info for "${senderAddress}"`);

	return ok(paymentInfo);
}

type MaxPaymentOpts = Pick<FeeProxyWrapperOpts, "assetId" | "slippage">;
async function calculateMaxPayment(
	api: ApiPromise,
	paymentInfo: RuntimeDispatchInfo,
	opts: MaxPaymentOpts
) {
	const { assetId, slippage = 0.05 } = opts;
	const fee = paymentInfo.partialFee.toString();
	const result = await fromPromise(api.rpc.dex.getAmountsIn(fee, [assetId, XRP_ASSET_ID]), (e) => {
		if (e instanceof Error) return e.message;
		return `Unable to fetch swap info for the pair "[${assetId}, ${XRP_ASSET_ID}]"`;
	});

	if (result.isErr()) return err(result.error);
	const quote = result.value as unknown as DexAmountsIn;
	if (!quote.Ok)
		return err(`Unable to extract swap info for the pair "[${assetId}, ${XRP_ASSET_ID}]"`);

	return ok(Number(quote.Ok[0]) * (1 + slippage));
}
