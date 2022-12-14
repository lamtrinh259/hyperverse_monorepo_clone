import { Blockchain, makeHyperverseBlockchain, Network } from '@decentology/hyperverse';
import { Networks } from '../networks';
import { Provider, ProviderProps } from './Provider';
export * from '../index'
import '../styles.css'
const getNetwork = (network: Network) => {
	return Networks[network];
};
export const Ethereum = makeHyperverseBlockchain({
	name: Blockchain.Ethereum,
	Provider: Provider,
	getNetwork,
});

export const Localhost = makeHyperverseBlockchain({
	name: Blockchain.Localhost,
	Provider: Provider,
	getNetwork,
});

export { useEvm } from './useEVM';
export { Provider };
export { darkTheme, lightTheme } from '@rainbow-me/rainbowkit';
export type { ProviderProps };
