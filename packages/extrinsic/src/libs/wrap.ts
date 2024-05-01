import { ok } from "neverthrow";
import { ExtrinsicWrapper, Extrinsic } from "../types";
import { errWithPrefix, safeReturn } from "../utils";

const errPrefix = errWithPrefix("Wrap");

/**
 * Wraps a given extrinsic with other extrinsics specified in the wrappers list
 *
 * @param extrinsic - The extrinsic to be wrapped with other extrinsics
 * @param senderAddress - The sender address
 * @param wrappers - List of the extrinsic wrappers
 * @returns A result with value either a error or a wrapped extrinsic
 */
export async function wrap(extrinsic: Extrinsic, wrappers: ExtrinsicWrapper[]) {
	try {
		let wrappedEx = extrinsic;

		for (const wrapper of wrappers) {
			const result = await wrapper(wrappedEx);
			if (result.isErr()) return safeReturn(errPrefix(result.error.message, result.error.cause));
			wrappedEx = result.value;
		}
		return safeReturn(ok(wrappedEx));
	} catch (e) {
		return safeReturn(errPrefix(e instanceof Error ? e.message : `Unknown error`, e));
	}
}
