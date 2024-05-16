import { ApiPromise } from "@polkadot/api";
import { XRP_ASSET_ID } from "../constants";
import { Extrinsic, Result } from "../types";
import { errWithPrefix, fetchPaymentInfo, safeReturn } from "../utils";
import { ok } from "neverthrow";

const errPrefix = errWithPrefix("Estimate");

/**
 * Returns fee estimation for a given extrinsic
 *
 * @param api - An instance of `ApiPromise` from `@polkadot/api`
 * @param senderAddress - The sender's address
 * @param extrinsicOrResult - Extrinsic to provide fee estimation
 * @param assetId - Asset ID to use for fee estimation, use `dex.swap` to convert
 * @returns A result with value either a fee estimation or an error
 */
export async function estimate(
	api: ApiPromise,
	senderAddress: string,
	extrinsicOrResult: Extrinsic | Result<Extrinsic, Error>,
	assetId = XRP_ASSET_ID,
	isXrplDispatcher = false
) {
	try {
		let extrinsic = extrinsicOrResult;
		if ("ok" in extrinsic) {
			if (!extrinsic.ok) return extrinsic;
			extrinsic = extrinsic.value;
		}
		const fetchResult = await fetchPaymentInfo(
			api,
			senderAddress,
			extrinsic,
			assetId,
			isXrplDispatcher
		);

		if (fetchResult.isErr())
			return safeReturn(errPrefix(fetchResult.error.message, fetchResult.error.cause));
		return safeReturn(ok(fetchResult.value));
	} catch (e) {
		return safeReturn(errPrefix(e instanceof Error ? e.message : `Unknown error`, e));
	}
}
