import { ApiPromise } from "@polkadot/api";
import { Json } from "@polkadot/types-codec";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { ISubmittableResult } from "@polkadot/types/types";
import { Result as NTResult } from "neverthrow";
import { MemoData } from "./libs/signWithXrplWallet";
import { DispatchErrorModule } from "@polkadot/types/interfaces/system";

export type Result<T, E = Error> = { ok: true; value: T } | { ok: false; value: E };
export type DispatcherResult<T> = { ok: T; err: DispatchResultError };
export type DispatchResultError = { module: DispatchErrorModule };
export type Extrinsic = SubmittableExtrinsic<"promise", ISubmittableResult>;
export type ExtrinsicWrapper = (extrinsic: Extrinsic) => Promise<NTResult<Extrinsic, Error>>;
export type ExtrinsicSigner = (extrinsic: Extrinsic) => Promise<NTResult<Extrinsic, Error>>;
export type EthereumSigner = (message: string, senderAddress: string) => Promise<string>;

export type XrplSigner = (
	memos: MemoData,
	senderAddress: string
) => Promise<{
	signature: string;
	message: string;
}>;

export type ExtrinsicResult = {
	id: string;
	result: InBlockResult;
	events: ExtrinsicEvent[];
};
export type ExtrinsicEvent = {
	phase: "ApplyExtrinsic" | "Finalization" | "Initialization";
	name: string;
	data: Record<string, unknown>;
};

export type InBlockResult = ISubmittableResult & { blockNumber: number; txIndex: number };
export type ProgressStatus = "Future" | "Ready" | "Broadcast" | "Retracted";
export type ProgressCallback = (status: ProgressStatus, result: ISubmittableResult) => void;
export type PartialWrapper = (api: ApiPromise, senderAddress: string) => () => ExtrinsicWrapper;
export type PartialSigner = (api: ApiPromise, senderAddress: string) => () => ExtrinsicSigner;

export type SendAction = (
	extrinsic: Extrinsic,
	onProgress?: ProgressCallback
) => Promise<Result<ExtrinsicResult, Error>>;
export type EstimateAction = (
	extrinsic: Extrinsic,
	assetId?: number
) => Promise<Result<bigint, Error>>;

export type UnsignDispatcher = {
	send: SendAction;
	estimate: EstimateAction;
};
export type SendDispatcher = UnsignDispatcher;

export type SignDispatcher = UnsignDispatcher & {
	signAndSend: SendAction;
	estimate: EstimateAction;
};

export type JsonRpc = {
	rpc: Record<string, Record<string, (...args: unknown[]) => Promise<Json>>>;
};

export interface JsonRpcError {
	Err: {
		Module: {
			index: number;
			error: number[];
			message: string | null;
		};
	};
}

export interface DispatcherOptions {
	isXrplDispatcher?: boolean;
	failedIfProxyError?: boolean;
}

export interface FeeProxyOptions extends DispatcherOptions {
	slippage?: number;
}
