"use client";
import { decode } from "xrpl-binary-codec-prerelease";
import styles from "./page.module.css";
import { Xumm } from "xumm";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ApiPromise } from "@polkadot/api";
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";
import { createDispatcher, xrplWalletSigner } from "@therootnetwork/extrinsic";
import { Web3ReactProvider } from "@web3-react/core";
import { metaMaskConnectors, useMetaMask } from "@/libs/hooks/useMetaMask";
import { XummPostPayloadBodyJson } from "xumm-sdk/dist/src/types";

export default function Home() {
	return (
		<Web3ReactProvider connectors={[metaMaskConnectors] as any}>
			<App />
		</Web3ReactProvider>
	);
}

function App() {
	const xaman = useMemo(() => new Xumm("7b7f9890-6744-4ce0-81c7-16618d72fe85"), []);

	const [api, setApi] = useState<ApiPromise>();
	const [xrplAddress, setXrplAddress] = useState<string>();

	const { connectWallet, address: nativeAddress } = useMetaMask();

	useEffect(() => {
		ApiPromise.create({
			...getApiOptions(),
			...getPublicProvider("porcini"),
		}).then(setApi);
	}, []);

	const connect = useCallback(async () => {
		connectWallet();

		const response = await xaman.authorize();
		if (!response || response instanceof Error)
			return console.log("Unable to connect", response?.message);

		setXrplAddress(await xaman.user.account);
	}, [xaman, connectWallet]);

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

	const sign = useCallback(async () => {
		if (!api || !nativeAddress) return;

		const { signAndSend } = createDispatcher(
			api,
			nativeAddress,
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
		if (!result.ok) return console.error("Error submitting extrinsic", result.value);

		console.log("result", result.value);
	}, [api, nativeAddress, signPayload]);

	return (
		<main className={styles.main}>
			<h1>XRPL test</h1>
			{xrplAddress && <p>XrplAddress: {xrplAddress}</p>}
			{nativeAddress && <p>NativeAddress: {nativeAddress}</p>}

			<button onClick={connect}>Connect</button>
			{xrplAddress && nativeAddress && <button onClick={sign}>Sign</button>}
		</main>
	);
}
