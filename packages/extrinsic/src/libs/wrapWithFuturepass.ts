import { ApiPromise } from "@polkadot/api";
import { FuturepassWrapperOpts, WrappedExtrinsic } from "../types";
import { ok, fromPromise } from "neverthrow";
import { errWithPrefix } from "../utils";

/**
 * Creates an extrinsic wrapper that wrap a given extrinsic with `futurepass.proxyExtrinsic()`
 *
 * @param api - An instance of `ApiPromise` from `@polkadot/api`
 * @param opts - The wrapper options, see `FuturepassWrapperOpts`
 * @returns A `futurepass` extrinsic wrapper
 */
export async function wrapWithFuturepass(api: ApiPromise, opts: FuturepassWrapperOpts) {
	const err = errWithPrefix("FuturepassWrapper");
	return {
		id: "futurepass",
		async wrap(wrappedEx: WrappedExtrinsic) {
			const { senderAddress } = opts;

			const result = await fromPromise(api.query.futurepass.holders(senderAddress), (e) => {
				if (e instanceof Error) return `${e.message}`;
				return `Unable to fetch Futurepass address for "${senderAddress}"`;
			});

			if (result.isErr()) return err(result.error);
			const fpAccount = result.value;

			if (fpAccount.isEmpty) {
				return err(`Unable to find Futurepass address for "${senderAddress}"`);
			}

			return ok({
				...wrappedEx,
				extrinsic: api.tx.futurepass.proxyExtrinsic(fpAccount.unwrap(), wrappedEx.extrinsic),
				senderAddress,
			});
		},
	};
}
