import { initializeConnector, useWeb3React } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { useCallback, useEffect, useState } from "react";

export const [metaMask, metaMaskHooks] = initializeConnector(
	(actions) =>
		new MetaMask({
			actions,
			options: {
				mustBeMetaMask: true,
			},
		})
);
export const metaMaskConnectors = [metaMask, metaMaskHooks];

export const useMetaMask = () => {
	const wallet = useWeb3React();
	const provider = wallet?.provider;

	const [isConnecting, setIsConnecting] = useState(true);

	const connectWallet = useCallback(() => {
		metaMask.activate(11155111).then(() => setIsConnecting(false));
	}, []);

	useEffect(() => {
		if (wallet?.isActive) return;

		metaMask.connectEagerly().then(() => setIsConnecting(false));
	}, [wallet?.isActive]);

	return {
		wallet,
		address: wallet.account,
		provider,
		connectWallet,
		isConnecting,
	};
};
