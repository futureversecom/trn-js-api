import { SubmittableExtrinsic as _SubmittableExtrinsic } from "@polkadot/api/types";
import { ISubmittableResult } from "@polkadot/types/types";
import { Result } from "neverthrow";

export type Extrinsic = _SubmittableExtrinsic<"promise", ISubmittableResult>;
export interface PaymentInfo {
	assetId: number;
	symbol: string;
	feeHuman: string;
	feeRaw: bigint;
}

export interface WrappedExtrinsic {
	extrinsic: Extrinsic;
	estimateFee?: (address: string) => Promise<[PaymentInfo, PaymentInfo?]>;
	senderAddress?: string;
}

export interface ExtrinsicWrapper {
	id: "futurepass" | "feeProxy";
	wrap: (extrinsic: WrappedExtrinsic) => Promise<Result<WrappedExtrinsic, Error>>;
}

export type PlainResult<T, E = Error> = { ok: true; value: T } | { ok: false; value: E };

export interface FuturepassWrapperOpts {
	senderAddress: string;
}

export interface FeeProxyWrapperOpts {
	senderAddress: string;
	assetId: number;
	slippage?: number;
}
