"use client";
import { decode, encode } from "xrpl-binary-codec-prerelease";
import styles from "./page.module.css";
import { Xumm } from "xumm";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ApiPromise } from "@polkadot/api";
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";
import { createDispatcher, xrplWalletSigner, XummTransaction } from "@therootnetwork/extrinsic";
import { Web3ReactProvider } from "@web3-react/core";
import { metaMaskConnectors, useMetaMask } from "@/libs/hooks/useMetaMask";

export default function Home() {
	return (
		<Web3ReactProvider connectors={[metaMaskConnectors] as any}>
			<App />
		</Web3ReactProvider>
	);
}

function App() {
	const xumm = useMemo(() => new Xumm("5376fa18-f6d8-45d6-98df-cfdbc6b3b62b"), []);

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
		const maybeAddress = await xumm.user.account;
		if (maybeAddress) return setXrplAddress(maybeAddress);

		const response = await xumm.authorize();
		if (!response || response instanceof Error)
			return console.log("Unable to connect", response?.message);

		setXrplAddress(await xumm.user.account);
	}, [xumm, connectWallet]);

	const signPayload = useCallback(
		async (payload: XummTransaction) => {
			const txHex = await new Promise<string | null>((resolve, reject) => {
				if (xumm.payload == null) {
					throw new Error("Xaman client not found");
				}
				void xumm.payload.createAndSubscribe(payload, (eventMessage) => {
					if (Object.keys(eventMessage.data).indexOf("signed") > -1) {
						if (!eventMessage.data.signed) {
							return reject("Transaction was rejected");
						}
						return resolve(eventMessage.payload.response.hex);
					}
				});
			});

			if (txHex == null) {
				throw new Error("txHex is null");
			}
			const decodedTx = decode(txHex);
			return { txHex, decodedTx };
		},
		[xumm]
	);

	const sign = useCallback(async () => {
		if (!api || !nativeAddress) return;

		const { signAndSend } = createDispatcher(
			api,
			nativeAddress,
			[],
			xrplWalletSigner(async (Memos) => {
				const signedTx = await signPayload({
					txjson: {
						TransactionType: "SignIn",
						Memos,
					},
					custom_meta: {
						instruction: "Sign test extrinsic",
					},
				});

				const yeet = {
					txjson: {
						TransactionType: "SignIn",
						Memos,
					},
					custom_meta: {
						instruction: "Sign test extrinsic",
					},
				};

				console.log("yeet", encode(yeet));
				console.log("isGoodYa", encode(yeet) === signedTx.txHex);

				console.log({
					signature: String(signedTx.decodedTx.TxnSignature),
					message: signedTx.txHex,
				});

				return {
					signature: String(signedTx.decodedTx.TxnSignature),
					message: signedTx.txHex,
				};
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
