import { EventRecord } from "@polkadot/types/interfaces";
import { ISubmittableResult } from "@polkadot/types/types/extrinsic";
import { fromPromise, ok } from "neverthrow";
import {
	Extrinsic,
	ExtrinsicEvent,
	ExtrinsicResult,
	InBlockResult,
	ProgressCallback,
	ProgressStatus,
	Result,
} from "../types";
import { errWithPrefix, safeReturn } from "../utils";

const errPrefix = errWithPrefix("Send");

/**
 * Sends a given extrinsic to the node to process
 *
 * @param extrinsicOrResult - Either extrinsic or result from other functions
 * @param onProgress - Callback to report the progress
 * @returns A result with value either an ExtrinsicResult or an error
 */
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
						const events = result.events.map(formatEvent);

						return resolve({
							id,
							result: result as InBlockResult,
							events,
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

function formatEvent({ event, phase }: EventRecord) {
	const args = event.data.toJSON() as unknown[];
	const fields = event.meta.fields.toJSON() as { name?: string }[];
	const name = `${event.section}.${event.method}`;

	const data = fields.reduce<ExtrinsicEvent["data"]>((record, { name }, index) => {
		record[name ?? `arg${index}`] = args[index];
		return record;
	}, {});

	return {
		name,
		phase: phase.type,
		data,
	} as ExtrinsicEvent;
}
