// import { SubmittableResultValue } from "@polkadot/api-base/types/submittable";
import {
	Extrinsic,
	ProgressStatus,
	InBlockResult,
	WrappedExtrinsic,
	ExtrinsicResult,
} from "../types";
import { fromPromise, ok } from "neverthrow";
import { errWithPrefix, safeReturn } from "../utils";
import { ISubmittableResult } from "@polkadot/types/types/extrinsic";

const err = errWithPrefix("Sign");

export async function send(
	extrinsic: Extrinsic | WrappedExtrinsic,
	onProgress: (status: ProgressStatus, result: ISubmittableResult) => void
) {
	try {
		const wrappedEx = "extrinsic" in extrinsic ? extrinsic : ({ extrinsic } as WrappedExtrinsic);
		const result = await sendExtrinsic(wrappedEx, onProgress);

		if (result.isErr()) return safeReturn(err(result.error.message, result.error.cause));
		return safeReturn(ok(result.value));
	} catch (e) {
		return safeReturn(err(e instanceof Error ? e.message : `Unknown error, ${e}`));
	}
}

async function sendExtrinsic(
	wrappedEx: WrappedExtrinsic,
	onProgress: (status: ProgressStatus, result: ISubmittableResult) => void
) {
	const { extrinsic } = wrappedEx;

	const sendPromise = new Promise<ExtrinsicResult>((resolve, reject) => {
		let unsubscribe: () => void;

		extrinsic
			.send((result: ISubmittableResult) => {
				const { isError, internalError, dispatchError, status } = result;

				// handle errors
				if (isError) {
					unsubscribe();
					if (internalError) return reject(internalError);
					if (dispatchError && dispatchError.isModule) {
						const { section, name, docs } = dispatchError.registry.findMetaError(
							dispatchError.asModule
						);

						return reject(
							new Error(`Failed to dispatch the extrinsic`, {
								cause: { section, name, docs },
							})
						);
					}

					if (dispatchError && !dispatchError.isModule) {
						return reject(
							new Error(`Failed to dispatch the extrinsic`, { cause: dispatchError.toJSON() })
						);
					}
				}

				switch (status.type) {
					case "Future":
					case "Ready":
					case "Broadcast":
					case "Invalid":
					case "Dropped":
					case "Retracted":
						return onProgress(status.type as ProgressStatus, result as InBlockResult);

					case "InBlock":
					case "Finalized": {
						unsubscribe();
						const { blockNumber, txIndex } = result as InBlockResult;
						const blockHash = (
							status.isFinalized ? status.asFinalized.toString() : status.asInBlock.toString()
						) as string;
						const height = blockNumber.toString().padStart(10, "0");
						const index = txIndex.toString().padStart(6, "0");
						const hash = blockHash.slice(2, 7);
						const id = `${height}-${index}-${hash}`;

						return resolve({
							id,
							result: result as InBlockResult,
						});
					}

					default:
						unsubscribe();
						return reject(new Error(`Extrinsic failed with status type "${status.type}"`));
				}
			})
			.then((_unsubscribe) => (unsubscribe = _unsubscribe))
			.catch((error) => reject(error));
	});

	return fromPromise(sendPromise, (e) =>
		e instanceof Error ? e : new Error("Unable to send the extrinsic")
	);
}
