import { SubmittableExtrinsic } from "@polkadot/api/types";
import { ISubmittableResult } from "@polkadot/types/types";
import { Result } from "neverthrow";

export type Extrinsic = SubmittableExtrinsic<"promise", ISubmittableResult>;
export interface PaymentInfo {
	assetId: number;
	symbol: string;
	feeHuman: string;
	feeRaw: bigint;
}

export interface WrappedExtrinsic {
	extrinsic: Extrinsic;
	senderAddress: string;
	signProvider?: SignProvider["id"];
	estimateFee?: (address: string) => Promise<[PaymentInfo, PaymentInfo?]>;
}

export type ExtrinsicWrapper = {
	id: "futurepass" | "feeProxy";
	wrap: (extrinsic: WrappedExtrinsic) => Promise<Result<WrappedExtrinsic, Error>>;
};

export type PlainResult<T, E = Error> = { ok: true; value: T } | { ok: false; value: E };

export interface FeeProxyWrapperOpts {
	assetId: number;
	slippage?: number;
}

export interface DexAmountsIn {
	Ok: [number, number];
}

export type SignProvider = {
	id: "nativeKeyring" | "ethSigner";
	sign: (extrinsic: WrappedExtrinsic) => Promise<Result<WrappedExtrinsic, Error>>;
};

export type EthereumSigner =
	| {
			request: (request: { method: "personal_sign"; params: [string, string] }) => Promise<string>;
	  }
	| {
			signMessage: (message: string) => Promise<string>;
	  };
