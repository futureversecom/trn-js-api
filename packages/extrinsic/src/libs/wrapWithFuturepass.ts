import { ApiPromise } from "@polkadot/api";
import { fromPromise, ok, err } from "neverthrow";
import { errWithPrefix } from "../utils";
import { Extrinsic } from "../types";
import { Option, U8aFixed } from "@polkadot/types";

const errPrefix = errWithPrefix("FuturepassWrapper");

/**
 * Wraps a given extrinsic with `futurepass.proxyExtrinsic` extrinsic
 *
 * @param api - An instance of `ApiPromise` from `@polkadot/api`
 * @param senderAddress - The sender's address
 * @param fpAddressHint - Hinted fpAddress value, used when log in as delegate
 * @returns An `ExtrinsicWrapper` function to be used with the `wrap` function
 */
export function wrapWithFuturepass(api: ApiPromise, senderAddress: string, fpAddressHint?: string) {
	return async (extrinsic: Extrinsic) => {
		const fetchResult = fpAddressHint
			? ok(fpAddressHint)
			: await fetchFuturepassAddress(api, senderAddress);
		if (fetchResult.isErr()) return errPrefix(fetchResult.error.message, fetchResult.error.cause);
		const fpAddress = fetchResult.value;

		return ok(api.tx.futurepass.proxyExtrinsic(fpAddress, extrinsic));
	};
}

export function futurepassWrapper(fpAddressHint?: string) {
	return (api: ApiPromise, senderAddress: string) =>
		wrapWithFuturepass.bind(undefined, api, senderAddress, fpAddressHint);
}

async function fetchFuturepassAddress(api: ApiPromise, senderAddress: string) {
	const result = await fromPromise(
		api.query.futurepass.holders(senderAddress),
		(e) => new Error(`Unable to fetch Futurepass address for "${senderAddress}"`, { cause: e })
	);

	if (result.isErr()) return err(result.error);
	const fpAddress = result.value as Option<U8aFixed>;

	if (fpAddress.isEmpty)
		return err(new Error(`Unable to extract Futurepass address for "${senderAddress}"`));

	return ok(fpAddress.unwrap());
}
