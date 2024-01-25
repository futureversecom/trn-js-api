import { ok } from "neverthrow";
import { ExtrinsicWrapper, Extrinsic } from "../types";
import { errWithPrefix, safeReturn } from "../utils";

const err = errWithPrefix("Wrap");

/**
 * Wraps a given extrinsic with other extrinsic
 *
 * @param extrinsic - The original extrinsic
 * @param senderAddress - The address of the sender
 * @param wrappers - List of the extrinsic wrappers
 * @returns Either wrapped extrinsic or an error as the result
 */
export async function wrap(extrinsic: Extrinsic, wrappers: ExtrinsicWrapper[]) {
	try {
		let wrappedEx = extrinsic;

		for (const wrapper of wrappers) {
			const result = await wrapper(wrappedEx);
			if (result.isErr()) return safeReturn(err(result.error.message, result.error.cause));
			wrappedEx = result.value;
		}
		return safeReturn(ok(wrappedEx));
	} catch (e) {
		return safeReturn(err(e instanceof Error ? e.message : `Unknown error, ${e}`));
	}
}
