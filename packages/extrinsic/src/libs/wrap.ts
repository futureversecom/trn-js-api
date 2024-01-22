import { ok } from "neverthrow";
import { ExtrinsicWrapper, Extrinsic, WrappedExtrinsic } from "../types";
import { safeReturn } from "../utils";

/**
 * Wraps a given extrinsic with other extrinsic
 *
 * @param extrinsic - The original extrinsic
 * @param senderAddress - The address of the sender
 * @param wrappers - List of the wrappers
 * @returns Either wrapped extrinsic or an error as the result
 */
export async function wrap(
	extrinsic: Extrinsic,
	senderAddress: string,
	wrappers: ExtrinsicWrapper[]
) {
	let wrappedEx: WrappedExtrinsic = { extrinsic, senderAddress };

	const keyedWrappers = wrappers.reduce(
		(keyWrappers, wrapper) => {
			keyWrappers[wrapper.id] = wrapper;
			return keyWrappers;
		},
		{} as Record<ExtrinsicWrapper["id"], ExtrinsicWrapper>
	);

	if (keyedWrappers) {
		// ensure certain order is in place
		const { futurepass, feeProxy } = keyedWrappers;
		for (const wrapper of [futurepass, feeProxy].filter(Boolean)) {
			const result = await wrapper.wrap(wrappedEx);

			if (result.isErr()) return safeReturn(result);
			result.map((ex) => (wrappedEx = ex));
		}
	}

	return safeReturn(ok(wrappedEx));
}
