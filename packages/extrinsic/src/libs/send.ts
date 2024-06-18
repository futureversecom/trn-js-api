import { EventRecord } from "@polkadot/types/interfaces";
import { ISubmittableResult } from "@polkadot/types/types/extrinsic";
import { fromPromise, ok } from "neverthrow";
import {
	DispatcherResult,
	DispatchResultError,
	Extrinsic,
	ExtrinsicEvent,
	ExtrinsicResult,
	InBlockResult,
	ProgressCallback,
	ProgressStatus,
	Result,
} from "../types";
import { errWithPrefix, filterExtrinsicEvents, safeReturn } from "../utils";
import { BN, hexToU8a } from "@polkadot/util";

const errPrefix = errWithPrefix("Send");

/**
 * Sends a given extrinsic to the node to process
 *
 * @param extrinsicOrResult - Either extrinsic or result from other functions
 * @param onProgress - Callback to report the progress
 * @param options - if true, check if internal call for proxy extrinsic is successful or not
 * @returns A result with value either an ExtrinsicResult or an error
 */
export async function send(
	extrinsicOrResult: Extrinsic | Result<Extrinsic, Error>,
	onProgress?: ProgressCallback,
	options: { failedIfProxyError: boolean } = { failedIfProxyError: false }
) {
	try {
		let extrinsic = extrinsicOrResult;
		if ("ok" in extrinsic) {
			if (!extrinsic.ok) return extrinsic;
			extrinsic = extrinsic.value;
		}
		const result = await sendExtrinsic(extrinsic, onProgress, options);

		if (result.isErr()) return safeReturn(errPrefix(result.error.message, result.error.cause));

		return safeReturn(ok(result.value));
	} catch (e) {
		return safeReturn(errPrefix(e instanceof Error ? e.message : `Unknown error`, e));
	}
}

async function sendExtrinsic(
	extrinsic: Extrinsic,
	onProgress?: ProgressCallback,
	options: { failedIfProxyError: boolean } = { failedIfProxyError: false }
) {
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
					case "Finalized":
						{
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
							const validOutcome = {
								id,
								result: result as InBlockResult,
								events,
							};
							if (!options.failedIfProxyError) {
								return resolve(validOutcome);
							} else {
								/*
								 * In FuturePass or XRPL proxied calls, we need to check each of the events for an error.
								 */
								const proxyEvents = filterExtrinsicEvents(events, [
									"proxy.ProxyExecuted",
									"xrpl.XRPLExtrinsicExecuted",
									"utility.BatchInterrupted",
								]).filter((event): event is ExtrinsicEvent => !!event);
								if (!proxyEvents) {
									return resolve(validOutcome);
								} else {
									let dispatchErr: DispatchResultError | null = null;
									proxyEvents.find((data: ExtrinsicEvent) => {
										if (data.name === "utility.BatchInterrupted") {
											const {
												data: { error },
											} = data;
											dispatchErr = error as unknown as DispatchResultError;
											return dispatchErr;
										} else {
											const {
												data: { result },
											} = data;
											const err = (result as DispatcherResult<ExtrinsicResult>).err;
											dispatchErr = err;
										}
									});

									if (!dispatchErr) return resolve(validOutcome);
									if ((dispatchErr as DispatchResultError).module) {
										const { section, name, docs } = extrinsic.registry.findMetaError({
											index: new BN((dispatchErr as DispatchResultError).module.index),
											error: hexToU8a((dispatchErr as DispatchResultError).module.error.toString()),
										});
										return reject({ section, name, docs });
									}
								}
							}
						}
						break;

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
