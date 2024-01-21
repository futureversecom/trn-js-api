import { ok } from "neverthrow";
import { ExtrinsicWrapper, Extrinsic, WrappedExtrinsic } from "../types";
import { safeReturn } from "../utils";

/**
 * Wraps a given extrinsic with other extrinsic
 *
 * @param extrinsic - Original extrinsic
 * @param wrappers - List of the wrappers
 * @returns Either wrapped extrinsic or an error as the result
 */
export async function wrap(extrinsic: Extrinsic, wrappers?: ExtrinsicWrapper[]) {
	let wrappedEx: WrappedExtrinsic = { extrinsic };

	const keyedWrappers =
		wrappers &&
		wrappers.reduce(
			(keyWrappers, wrapper) => {
				keyWrappers[wrapper.id] = wrapper;
				return keyWrappers;
			},
			{} as Record<ExtrinsicWrapper["id"], ExtrinsicWrapper>
			// eslint-disable-next-line no-mixed-spaces-and-tabs
		);

	if (keyedWrappers) {
		// ensure certain order is in place
		const { futurepass, feeProxy } = keyedWrappers;
		for (const wrapper of [futurepass, feeProxy]) {
			const result = await wrapper.wrap(wrappedEx);

			if (result.isErr()) return safeReturn(result);
			result.map((ex) => (wrappedEx = ex));
		}
	}

	return safeReturn(ok(wrappedEx));
}
