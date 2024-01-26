import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { ISubmittableResult } from "@polkadot/types/types";
import { Result as NTResult } from "neverthrow";

export type Result<T, E = Error> = { ok: true; value: T } | { ok: false; value: E };
export type Extrinsic = SubmittableExtrinsic<"promise", ISubmittableResult>;
export type ExtrinsicWrapper = (extrinsic: Extrinsic) => Promise<NTResult<Extrinsic, Error>>;
export type ExtrinsicSigner = (extrinsic: Extrinsic) => Promise<NTResult<Extrinsic, Error>>;
export type EthereumSigner = (message: string, senderAddress: string) => Promise<string>;
export type ExtrinsicResult = {
	id: string;
	result: InBlockResult;
};
export type InBlockResult = ISubmittableResult & { blockNumber: number; txIndex: number };
export interface DexAmountsIn {
	Ok: [number, number];
}
export type ProgressStatus = "Future" | "Ready" | "Broadcast" | "Retracted";
export type ProgressCallback = (status: ProgressStatus, result: ISubmittableResult) => void;
export type PartialWrapper = (api: ApiPromise, senderAddress: string) => () => ExtrinsicWrapper;
export type PartialSigner = (api: ApiPromise, senderAddress: string) => () => ExtrinsicSigner;

export type SendAction = (
	extrinsic: Extrinsic,
	onProgress?: ProgressCallback
) => Promise<Result<ExtrinsicResult, Error>>;

export type UnsignActions = {
	send: SendAction;
};

export type SignActions = UnsignActions & {
	signAndSend: SendAction;
};
