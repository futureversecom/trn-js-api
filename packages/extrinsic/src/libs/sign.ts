import { ok } from "neverthrow";
import { Extrinsic, SignProvider, WrappedExtrinsic } from "../types";
import { errWithPrefix, safeReturn } from "../utils";

const err = errWithPrefix("Sign");

export async function sign(
	extrinsic: Extrinsic | WrappedExtrinsic,
	senderAddress: string,
	provider: SignProvider
) {
	const wExtrinsic =
		"extrinsic" in extrinsic ? extrinsic : ({ extrinsic, senderAddress } as WrappedExtrinsic);

	if (wExtrinsic.senderAddress !== senderAddress)
		return safeReturn(
			err(
				`Received sender address ${senderAddress} is different with value inside the wrapped extrinsic`
			)
		);

	const signResult = await provider.sign(wExtrinsic);

	if (signResult.isErr()) return safeReturn(signResult);
	return safeReturn(ok(signResult.value));
}
