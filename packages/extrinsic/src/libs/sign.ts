import { Extrinsic, ExtrinsicSigner, Result } from "../types";
import { errWithPrefix, safeReturn } from "../utils";

const errPrefix = errWithPrefix("Sign");

/**
 * Signs a gven extrinsic with the specified signer
 *
 * @param extrinsicOrResult - Either extrinsic or result from other functions
 * @param signer - A signer that will sign the extrinsic
 * @returns A result with value either a signed extrinsic or error
 */
export async function sign(
	extrinsicOrResult: Extrinsic | Result<Extrinsic, Error>,
	signer: ExtrinsicSigner
) {
	let extrinsic = extrinsicOrResult;
	if ("ok" in extrinsic) {
		if (!extrinsic.ok) return extrinsic;
		extrinsic = extrinsic.value;
	}

	try {
		const signResult = await signer(extrinsic);

		if (signResult.isErr())
			return safeReturn(errPrefix(signResult.error.message, signResult.error.cause));
		return safeReturn(signResult);
	} catch (e) {
		return safeReturn(errPrefix(e instanceof Error ? e.message : `Unknown error`, e));
	}
}
