import { Blockchain, makeHyperverseBlockchain, Network } from '@decentology/hyperverse';
import { Networks } from './networks';

const getNetwork = (network: Network) => {
	return Networks[network];
}
export const Ethereum = makeHyperverseBlockchain({
	name: Blockchain.Ethereum,
	// @ts-ignore
	Provider: null,
	getNetwork
});
export { getNetwork, Networks };
