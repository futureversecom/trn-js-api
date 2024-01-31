import { ApiPromise } from "@polkadot/api";
import { XRP_ASSET_ID } from "../constants";
import { Extrinsic, Result } from "../types";
import { errWithPrefix, fetchPaymentInfo, safeReturn } from "../utils";
import { ok } from "neverthrow";

const errPrefix = errWithPrefix("Estimate");

export async function estimate(
	api: ApiPromise,
	senderAddress: string,
	extrinsicOrResult: Extrinsic | Result<Extrinsic, Error>,
	assetId = XRP_ASSET_ID
) {
	try {
		let extrinsic = extrinsicOrResult;
		if ("ok" in extrinsic) {
			if (!extrinsic.ok) return extrinsic;
			extrinsic = extrinsic.value;
		}
		const fetchResult = await fetchPaymentInfo(api, senderAddress, extrinsic, assetId);

		if (fetchResult.isErr())
			return safeReturn(errPrefix(fetchResult.error.message, fetchResult.error.cause));
		return safeReturn(ok(fetchResult.value));
	} catch (e) {
		return safeReturn(errPrefix(e instanceof Error ? e.message : `Unknown error`, e));
	}
}
