"use client";
import { decode } from "xrpl-binary-codec-prerelease";
import styles from "./page.module.css";
import { Xumm } from "xumm";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ApiPromise } from "@polkadot/api";
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";
import {
	createKeyringFromSeed,
	createDispatcher,
	deriveAddressPair,
	filterExtrinsicEvents,
	nativeWalletSigner,
	xrplWalletSigner,
} from "@therootnetwork/extrinsic";
import { XummPostPayloadBodyJson } from "xumm-sdk/dist/src/types";

export default function Home() {
	const xaman = useMemo(() => new Xumm("f41fb06b-54e1-4c6d-b9cc-69207c89f95a"), []);
	const keyring = useMemo(
		() => createKeyringFromSeed(process.env.NEXT_PUBLIC_CALLER_PRIVATE_KEY as string),
		[]
	);

	const [api, setApi] = useState<ApiPromise>();
	const [remarkEvent, setRemarkEvent] = useState<object>();
	const [ethAddress, setEthAddress] = useState<string>();
	const [xrplAddress, setXrplAddress] = useState<string>();

	useEffect(() => {
		ApiPromise.create({
			...getApiOptions(),
			...getPublicProvider("porcini"),
		}).then(setApi);
	}, []);

	const signPayload = useCallback(
		async (payload: XummPostPayloadBodyJson) => {
			const message = await new Promise<string | null>((resolve, reject) => {
				if (!xaman.payload) throw new Error("Xaman client not found");

				void xaman.payload.createAndSubscribe(payload, (eventMessage) => {
					if (!Object.keys(eventMessage.data).includes("signed")) return;

					if (!eventMessage.data.signed) return reject("Transaction was rejected");

					return resolve(eventMessage.payload.response.hex);
				});
			});

			if (!message) throw new Error("message is null");

			return { message, signature: String(decode(message).TxnSignature) };
		},
		[xaman]
	);

	const getEthAddress = useCallback(async () => {
		const signedTx = await signPayload({
			custom_meta: {
				instruction: "Sign In",
			},
			txjson: {
				TransactionType: "SignIn",
			},
		});
		const signingPubKey = String(decode(signedTx.message).SigningPubKey);
		setEthAddress(deriveAddressPair(signingPubKey)[0]);
	}, [signPayload]);

	const connect = useCallback(async () => {
		const response = await xaman.authorize();
		if (!response || response instanceof Error)
			return console.log("Unable to connect", response?.message);

		setXrplAddress(await xaman.user.account);

		await getEthAddress();
	}, [xaman, getEthAddress]);

	const sign = useCallback(async () => {
		if (!api || !keyring) return;

		if (!ethAddress) return await getEthAddress();

		// Fund XRPL account
		const { signAndSend: signAndSendNative } = createDispatcher(
			api,
			keyring.address,
			[],
			nativeWalletSigner(keyring)
		);
		await signAndSendNative(api.tx.assetsExt.transfer(2, ethAddress, 3_000_000, true));

		const { signAndSend } = createDispatcher(
			api,
			ethAddress,
			[],
			xrplWalletSigner(async (Memos) => {
				return await signPayload({
					txjson: {
						TransactionType: "SignIn",
						Memos,
					},
					custom_meta: {
						instruction: "Sign test extrinsic",
					},
				});
			})
		);

		const result = await signAndSend(api.tx.system.remarkWithEvent("Signing test extrinsic"));
		if (!result.ok) return console.error("Error submitting extrinsic", result.value.message);

		setRemarkEvent(filterExtrinsicEvents(result.value.events, ["system.Remarked"])[0]);
	}, [api, signPayload, ethAddress, getEthAddress, keyring]);

	return (
		<main className={styles.main}>
			<h1>XRPL test</h1>
			{xrplAddress && <p>XrplAddress: {xrplAddress}</p>}
			{ethAddress && <p>EthAddress: {ethAddress}</p>}

			<button onClick={connect}>Connect</button>
			{xrplAddress && <button onClick={sign}>Sign</button>}

			{remarkEvent && <pre>{JSON.stringify(remarkEvent, null, 2)}</pre>}
		</main>
	);
}
