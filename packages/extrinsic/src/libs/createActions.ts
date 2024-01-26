import { ApiPromise } from "@polkadot/api";
import {
	Extrinsic,
	PartialSigner,
	PartialWrapper,
	ProgressCallback,
	SignActions,
	UnsignActions,
} from "../types";
import { wrap as wrapFn } from "./wrap";
import { sign as signFn } from "./sign";
import { send as sendFn } from "./send";

export function createActions(
	api: ApiPromise,
	senderAddress: string,
	partialWrappers: PartialWrapper[]
): UnsignActions;

export function createActions(
	api: ApiPromise,
	senderAddress: string,
	partialWrappers: PartialWrapper[],
	partialSigner: PartialSigner
): SignActions;

export function createActions(
	api: ApiPromise,
	senderAddress: string,
	partialWrappers: PartialWrapper[] = [],
	partialSigner?: PartialSigner
): SignActions | UnsignActions {
	const wrappers = partialWrappers.map((wrapper) => wrapper(api, senderAddress)());
	const signer = partialSigner?.(api, senderAddress)();
	const send = async (extrinsic: Extrinsic, onProgress?: ProgressCallback) => {
		const wrapResult = await wrapFn(extrinsic, wrappers);
		return await sendFn(wrapResult, onProgress);
	};
	if (!signer) return { send };
	const signAndSend = async (extrinsic: Extrinsic, onProgress?: ProgressCallback) => {
		const wrapResult = await wrapFn(extrinsic, wrappers);
		const signResult = await signFn(wrapResult, signer);
		return await sendFn(signResult, onProgress);
	};
	return { send, signAndSend };
}
