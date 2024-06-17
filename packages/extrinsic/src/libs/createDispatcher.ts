import { ApiPromise } from "@polkadot/api";
import {
	DispatcherOptions,
	Extrinsic,
	PartialSigner,
	PartialWrapper,
	ProgressCallback,
	SignDispatcher,
	UnsignDispatcher,
} from "../types";
import { wrap as wrapFn } from "./wrap";
import { sign as signFn } from "./sign";
import { send as sendFn } from "./send";
import { estimate as estimateFn } from "./estimate";
import { XRP_ASSET_ID } from "../constants";

export function createDispatcher(
	api: ApiPromise,
	senderAddress: string,
	partialWrappers: PartialWrapper[]
): UnsignDispatcher;

export function createDispatcher(
	api: ApiPromise,
	senderAddress: string,
	partialWrappers: PartialWrapper[],
	partialSigner: PartialSigner,
	options?: DispatcherOptions
): SignDispatcher;

/**
 * Creates a dispatcher object with relevant methods to work with the extrinsics
 *
 * @param api - An instance of `ApiPromise` from `@polkadot/api`
 * @param senderAddress - The sender's address
 * @param partialWrappers - List of the warappers to wrap all extrinsics dispatched by this dispatcher
 * @param partialSigner - Designated signer for all extrinsics dispatched by this dispatcher
 * @returns Either a sign dispatcher or an unsign dispatcher
 */
export function createDispatcher(
	api: ApiPromise,
	senderAddress: string,
	partialWrappers: PartialWrapper[] = [],
	partialSigner?: PartialSigner,
	options: DispatcherOptions = {}
): SignDispatcher | UnsignDispatcher {
	const wrappers = partialWrappers.map((wrapper) => wrapper(api, senderAddress)());

	const estimate = async (extrinsic: Extrinsic, assetId = XRP_ASSET_ID) => {
		const wrapResult = await wrapFn(extrinsic, wrappers);
		return await estimateFn(api, senderAddress, wrapResult, assetId, options?.isXrplDispatcher);
	};

	const send = async (extrinsic: Extrinsic, onProgress?: ProgressCallback) => {
		const wrapResult = await wrapFn(extrinsic, wrappers);
		const { failedIfProxyError = false } = options;
		return await sendFn(api, wrapResult, onProgress, { failedIfProxyError });
	};

	if (!partialSigner) return { estimate, send } as UnsignDispatcher;
	const signer = partialSigner(api, senderAddress)();

	const signAndSend = async (extrinsic: Extrinsic, onProgress?: ProgressCallback) => {
		const wrapResult = await wrapFn(extrinsic, wrappers);
		const signResult = await signFn(wrapResult, signer);
		return await sendFn(api, signResult, onProgress);
	};

	return { estimate, signAndSend } as SignDispatcher;
}
