import { ApiPromise } from "@polkadot/api";
import { fromPromise, ok, err } from "neverthrow";
import { errWithPrefix } from "../utils";
import { Extrinsic } from "../types";

const errPrefix = errWithPrefix("FuturepassWrapper");

/**
 * Creates an extrinsic wrapper that wrap a given extrinsic with `futurepass.proxyExtrinsic()`
 *
 * @param api - An instance of `ApiPromise` from `@polkadot/api`
 * @returns A `futurepass` extrinsic wrapper
 */
export function wrapWithFuturepass(api: ApiPromise, senderAddress: string) {
	return async (extrinsic: Extrinsic) => {
		const fetchResult = await fetchFuturepassAddress(api, senderAddress);
		if (fetchResult.isErr()) return errPrefix(fetchResult.error.message, fetchResult.error.cause);
		const fpAddress = fetchResult.value;

		return ok(api.tx.futurepass.proxyExtrinsic(fpAddress, extrinsic));
	};
}

async function fetchFuturepassAddress(api: ApiPromise, senderAddress: string) {
	const result = await fromPromise(
		api.query.futurepass.holders(senderAddress),
		(e) => new Error(`Unable to fetch Futurepass address for "${senderAddress}"`, { cause: e })
	);

	if (result.isErr()) return err(result.error);
	const fpAddress = result.value;

	if (fpAddress.isEmpty)
		return err(new Error(`Unable to extract Futurepass address for "${senderAddress}"`));

	return ok(fpAddress.unwrap());
}
