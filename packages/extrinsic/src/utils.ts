import { ApiPromise, Keyring } from "@polkadot/api";
import { IKeyringPair, Registry } from "@polkadot/types/types";

import { SignerOptions } from "@polkadot/api/types";
import { EventRecord, RuntimeDispatchInfo } from "@polkadot/types/interfaces";
import { IExtrinsicEra, SignatureOptions } from "@polkadot/types/types";
import { ethereumEncode } from "@polkadot/util-crypto/ethereum";
import { Result as NTResult, err, fromPromise, ok } from "neverthrow";
import { deriveAddress } from "ripple-keypairs";
import { XRP_ASSET_ID } from "./constants";
import { Extrinsic, ExtrinsicEvent, JsonRpc, JsonRpcError, Result } from "./types";
import { Json } from "@polkadot/types-codec";
import { BN, hexToU8a } from "@polkadot/util";
import { computePublicKey } from "@ethersproject/signing-key";
import { keccak256 } from "ethers";

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

function mockWrapWithXrpl(api: ApiPromise, extrinsic: Extrinsic) {
	return api.tx.xrpl.transact(
		"0x5916969036626990000000000000000000F236FD752B5E4C84810AB3D41A3C25807321EDFB2A3A850B43E24D2700532EF1F9CCB2475DFF4F62B634B0C58845F23C26396581145116224CEF7355137BEBBA8E277A9BE18E0596E7F9EA7C0965787472696E7369637D8E383339353966376634323632373632663735393963326661343862343138623765313032663932633831666162396536656632326162333739616264623732663A333A31323639343937353A303A33623034653934373565373336353763616665393561653138656335363963336436383738353539643661633939333437316364623562646635396339636432E1F1",
		"0x3BC417D12C9595ABB4551CE518ACDD70AE3B9D9B55CF5110BD5009B4A098AE62CC8C66CD422A0DF67A2B08894C15E423CE6F1EFFCAC540964F84A57E31399102",
		extrinsic
	);
}

export async function fetchPaymentInfo(
	api: ApiPromise,
	senderAddress: string,
	extrinsic: Extrinsic,
	assetId: number,
	isXrplDispatcher = false
) {
	const paymentInfoResult = await fromPromise(
		(isXrplDispatcher ? mockWrapWithXrpl(api, extrinsic) : extrinsic).paymentInfo(senderAddress),
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
	const noHexKey = publicKey.startsWith("0x") ? publicKey.slice(2) : publicKey;

	const xrplAddress = deriveAddress(noHexKey);

	const isEd25519 = noHexKey.toLowerCase().startsWith("ed");

	if (!isEd25519) {
		const ethAddress = ethereumEncode(`0x${noHexKey}`);

		return [ethAddress, xrplAddress];
	}

	const compressedPublicKey = computePublicKey(`0x${noHexKey}`, true);

	const ethAddress = ethereumEncode(
		"0x" + keccak256(hexToU8a(`0x${compressedPublicKey.slice(4)}`)).slice(26)
	);

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
