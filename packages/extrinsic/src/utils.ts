import { ApiPromise, Keyring } from "@polkadot/api";
import { IKeyringPair, Registry } from "@polkadot/types/types";

import { SignerOptions } from "@polkadot/api-base/types/submittable";
import { EventRecord, RuntimeDispatchInfo } from "@polkadot/types/interfaces";
import { IExtrinsicEra, SignatureOptions } from "@polkadot/types/types";
import { ethereumEncode } from "@polkadot/util-crypto/ethereum";
import { Result as NTResult, err, fromPromise, ok } from "neverthrow";
import { deriveAddress } from "ripple-keypairs";
import { XRP_ASSET_ID } from "./constants";
import { Extrinsic, ExtrinsicEvent, JsonRpc, JsonRpcError, Result } from "./types";
import { Json } from "@polkadot/types-codec";
import { BN, hexToU8a } from "@polkadot/util";

export function safeReturn<T>(result: NTResult<T, Error>): Result<T> {
	if (result.isErr()) {
		return {
			value: result.error,
			ok: false,
		};
	}

	return {
		value: result.value,
		ok: true,
	};
}

export function errWithPrefix(prefix: string) {
	return <T = never>(msg: string, cause?: unknown) =>
		err<T, Error>(new Error(`${prefix}::${msg}`, { cause }));
}

export async function createSignatureOptions(
	api: ApiPromise,
	senderAddress: string,
	options: Partial<SignerOptions>
) {
	const result = await fromPromise(
		api.derive.tx.signingInfo(senderAddress),
		(e) => new Error(`Unable to fetch signing info for "${senderAddress}"`, { cause: e })
	);

	if (result.isErr()) return err(result.error);
	const { header, mortalLength, nonce } = result.value;
	if (!header) return err(new Error(`Unable to retrieve block header`, { cause: result.value }));

	const era = api.registry.createTypeUnsafe<IExtrinsicEra>("ExtrinsicEra", [
		{
			current: header.number,
			period: mortalLength,
		},
	]);
	return ok({
		blockHash: header.hash,
		nonce,
		era,
		...options,
		genesisHash: api.genesisHash,
		runtimeVersion: api.runtimeVersion,
		signedExtensions: api.registry.signedExtensions,
		version: api.extrinsicVersion,
	} as SignatureOptions);
}

export async function fetchPaymentInfo(
	api: ApiPromise,
	senderAddress: string,
	extrinsic: Extrinsic,
	assetId: number
) {
	const paymentInfoResult = await fromPromise(
		extrinsic.paymentInfo(senderAddress),
		(e) => new Error(`Unable to fetch payment info for "${senderAddress}"`, { cause: e })
	);

	if (paymentInfoResult.isErr()) return err(paymentInfoResult.error);
	const paymentInfo = paymentInfoResult.value as RuntimeDispatchInfo;

	if (paymentInfo.isEmpty)
		return err(
			new Error(`Unable to get payment info for "${senderAddress}"`, {
				cause: paymentInfo.toJSON(),
			})
		);

	if (assetId === XRP_ASSET_ID) return ok(BigInt(paymentInfo.partialFee.toString()));

	const fee = paymentInfoResult.value.partialFee.toString();
	const getAmountsInResult = await fromPromise(
		(api as ApiPromise & JsonRpc).rpc.dex.getAmountsIn(fee, [assetId, XRP_ASSET_ID]),
		(e) =>
			new Error(`Unable to fetch swap info for the pair "[${assetId}, ${XRP_ASSET_ID}]"`, {
				cause: e,
			})
	);

	if (getAmountsInResult.isErr()) return err(getAmountsInResult.error);

	const quote = parseJsonRpcResult<[number, number]>(getAmountsInResult.value);
	if (quote.isErr()) return err(quote.error);

	return ok(BigInt(quote.value[0].toString()));
}

/**
 * Derive a given public key into an ETH address format and XRPL r-address format
 *
 * @param publicKey - Public key to derive the pair of addresses for
 * @returns Tuple of `ethAddress` and `xrplAddress`
 */
export function deriveAddressPair(publicKey: string) {
	const ethAddress = ethereumEncode(`0x${publicKey}`);
	const xrplAddress = deriveAddress(publicKey);

	return [ethAddress, xrplAddress];
}

/**
 * Filter extrinsic events based on the given event filters
 * @param events - Array of events to filter
 * @param eventFilters - Names of the events to filter
 * @return Array of events that match the given event filters
 */
export function filterExtrinsicEvents<T extends EventRecord | ExtrinsicEvent>(
	events: T[],
	eventFilters: `${string}.${string}`[]
): (T | undefined)[] {
	return eventFilters.map((eventFilter) => {
		const event = events.find((event) => {
			if (!("event" in event)) return event.name === eventFilter;

			const [section, method] = eventFilter.split(".");
			return event.event.section === section && event.event.method === method;
		});

		return event;
	});
}

/**
 * Create a keyring pair from a given private key
 * @param seed - Private key to create the keyring pair from
 * @returns Keyring pair
 */
export function createKeyringFromSeed(seed: string): IKeyringPair {
	const keyring = new Keyring({ type: "ethereum" });
	const seedU8a = hexToU8a(seed);
	return keyring.addFromSeed(seedU8a);
}

/**
 * Take a JSON-RPC result and parse it into a `Result` type;
 * @type T - Type of the result
 * @param json - JSON-RPC result to parse
 * @returns `Result` of the parsed JSON-RPC result or meta error
 */
export function parseJsonRpcResult<T>(json: Json): NTResult<T, Error> {
	const casted = json as unknown as ({ Ok: T } | JsonRpcError) & { registry: Registry };

	if (!("Err" in casted)) return ok(casted.Ok);

	const { index, error } = casted.Err.Module;
	const { section, name, docs } = casted.registry.findMetaError({
		error: new Uint8Array(error),
		index: new BN(index),
	});

	return err(
		new Error("RPC Error", {
			cause: {
				section,
				name,
				docs,
			},
		})
	);
}
