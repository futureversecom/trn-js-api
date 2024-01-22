import { ApiPromise } from "@polkadot/api";
import { WrappedExtrinsic } from "../types";
import { ok, fromPromise } from "neverthrow";
import { errWithPrefix } from "../utils";

const err = errWithPrefix("FuturepassWrapper");

/**
 * Creates an extrinsic wrapper that wrap a given extrinsic with `futurepass.proxyExtrinsic()`
 *
 * @param api - An instance of `ApiPromise` from `@polkadot/api`
 * @returns A `futurepass` extrinsic wrapper
 */
export function wrapWithFuturepass(api: ApiPromise) {
	return {
		id: "futurepass" as const,
		async wrap(wrappedEx: WrappedExtrinsic) {
			const { senderAddress } = wrappedEx;
			const fpAddressResult = await fetchFuturepassAddress(api, senderAddress);
			if (fpAddressResult.isErr()) return fpAddressResult;
			const fpAddress = fpAddressResult.value;

			return ok({
				...wrappedEx,
				extrinsic: api.tx.futurepass.proxyExtrinsic(fpAddress, wrappedEx.extrinsic),
			});
		},
	};
}

async function fetchFuturepassAddress(api: ApiPromise, senderAddress: string) {
	const result = await fromPromise(api.query.futurepass.holders(senderAddress), (e) => {
		if (e instanceof Error) return e.message;
		return `Unable to fetch Futurepass address for "${senderAddress}"`;
	});

	if (result.isErr()) return err(result.error);
	const fpAddress = result.value;

	if (fpAddress.isEmpty) return err(`Unable to extract Futurepass address for "${senderAddress}"`);

	return ok(fpAddress.unwrap());
}
