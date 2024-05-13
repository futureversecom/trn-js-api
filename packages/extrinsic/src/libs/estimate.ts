import { ApiPromise } from "@polkadot/api";
import { XRP_ASSET_ID } from "../constants";
import { Extrinsic, Result } from "../types";
import { errWithPrefix, fetchPaymentInfo, safeReturn } from "../utils";
import { ok } from "neverthrow";

const errPrefix = errWithPrefix("Estimate");

const mockXrplPayload = {
	message:
		"0x5916969036626990000000000000000000F236FD752B5E4C84810AB3D41A3C25807321EDFB2A3A850B43E24D2700532EF1F9CCB2475DFF4F62B634B0C58845F23C26396581145116224CEF7355137BEBBA8E277A9BE18E0596E7F9EA7C0965787472696E7369637D8E383339353966376634323632373632663735393963326661343862343138623765313032663932633831666162396536656632326162333739616264623732663A333A31323639343937353A303A33623034653934373565373336353763616665393561653138656335363963336436383738353539643661633939333437316364623562646635396339636432E1F1",
	signature:
		"0x3BC417D12C9595ABB4551CE518ACDD70AE3B9D9B55CF5110BD5009B4A098AE62CC8C66CD422A0DF67A2B08894C15E423CE6F1EFFCAC540964F84A57E31399102",
};

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
	isXrplSigner = false
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
			isXrplSigner
				? api.tx.xrpl.transact(mockXrplPayload.message, mockXrplPayload.signature, extrinsic)
				: extrinsic,
			assetId
		);

		if (fetchResult.isErr())
			return safeReturn(errPrefix(fetchResult.error.message, fetchResult.error.cause));
		return safeReturn(ok(fetchResult.value));
	} catch (e) {
		return safeReturn(errPrefix(e instanceof Error ? e.message : `Unknown error`, e));
	}
}
