import { ApiPromise } from "@polkadot/api";
import { ok } from "neverthrow";
import { FeeProxyWrapperOpts, WrappedExtrinsic } from "../types";

export async function wrapWithFeeProxy(api: ApiPromise, opts: FeeProxyWrapperOpts) {
	const err = errWithPrefix("FeeProxyWrapper");

	return {
		id: "feeProxy",
		async wrap(wrappedEx: WrappedExtrinsic) {
			const { assetId, slippage = 0.05, senderAddress } = opts;

			if (wrappedEx.senderAddress && wrappedEx.senderAddress !== senderAddress)
				return err(
					`provided sender address "${senderAddress}" is different from the value set by another wrapper`
				);

			return ok({ ...wrappedEx });
		},
	};
}
