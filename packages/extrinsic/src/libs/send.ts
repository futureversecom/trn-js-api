import { ISubmittableResult } from "@polkadot/types/types/extrinsic";
import { fromPromise, ok } from "neverthrow";
import {
	Extrinsic,
	ExtrinsicResult,
	InBlockResult,
	ProgressStatus,
	Result,
	ProgressCallback,
} from "../types";
import { errWithPrefix, safeReturn } from "../utils";

const errPrefix = errWithPrefix("Send");

export async function send(
	extrinsicOrResult: Extrinsic | Result<Extrinsic, Error>,
	onProgress?: ProgressCallback
) {
	try {
		let extrinsic = extrinsicOrResult;
		if ("ok" in extrinsic) {
			if (!extrinsic.ok) return extrinsic;
			extrinsic = extrinsic.value;
		}
		const result = await sendExtrinsic(extrinsic, onProgress);

		if (result.isErr()) return safeReturn(errPrefix(result.error.message, result.error.cause));
		return safeReturn(ok(result.value));
	} catch (e) {
		return safeReturn(errPrefix(e instanceof Error ? e.message : `Unknown error`, e));
	}
}

async function sendExtrinsic(extrinsic: Extrinsic, onProgress?: ProgressCallback) {
	const sendPromise = new Promise<ExtrinsicResult>((resolve, reject) => {
		let unsubscribe: () => void;

		extrinsic
			.send((result: ISubmittableResult) => {
				const { internalError, dispatchError, status } = result;

				if (internalError) {
					unsubscribe();
					return reject(internalError);
				}

				if (dispatchError && !dispatchError.isModule) {
					unsubscribe();
					return reject(dispatchError.toJSON());
				}

				if (dispatchError && dispatchError.isModule) {
					unsubscribe();
					const { section, name, docs } = dispatchError.registry.findMetaError(
						dispatchError.asModule
					);

					return reject({ section, name, docs });
				}

				switch (status.type) {
					case "Future":
					case "Ready":
					case "Broadcast":
					case "Retracted":
						return onProgress?.(status.type as ProgressStatus, result);

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
						return reject(result);
				}
			})
			.then((_unsubscribe) => (unsubscribe = _unsubscribe))
			.catch((error) => reject(error));
	});

	return fromPromise(sendPromise, (e) => new Error(`Unable to send the extrinsic`, { cause: e }));
}
