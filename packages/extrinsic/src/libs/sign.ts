import { Extrinsic, ExtrinsicSigner, Result } from "../types";
import { errWithPrefix, safeReturn } from "../utils";

const err = errWithPrefix("Sign");

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
			return safeReturn(err(signResult.error.message, signResult.error.cause));
		return safeReturn(signResult);
	} catch (e) {
		return safeReturn(err(e instanceof Error ? e.message : `Unknown error, ${e}`));
	}
}
