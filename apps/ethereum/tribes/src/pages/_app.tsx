import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { initialize, Provider } from '@decentology/hyperverse';
import { Network } from '@decentology/hyperverse';
import { Ethereum } from '@decentology/hyperverse-ethereum';
import { Tribes } from '@decentology/hyperverse-evm-tribes';
import * as RandomPick from '@decentology/hyperverse-ethereum-randompick';
import InnerComponent from '../components/InnerComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import { darkTheme, lightTheme } from '@decentology/hyperverse-evm';
// Change your Tenant ID here.
const TENANT_ID = '0x62a7aa79a52591Ccc62B71729329A80a666fA50f';
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
	const hyperverse = initialize({
		blockchain: Ethereum,
		network: Network.Testnet,
		storage: {
			options: { clientUrl: 'https://fileportal.org' }, // Updated to fileportal due to SSL error issues with SiaSky.net
		},
		modules: [
			{
				bundle: Tribes,
				tenantId: TENANT_ID,
			},
			{
				bundle: RandomPick,
				tenantId: TENANT_ID,
			},
		],
	});

	return (
		<QueryClientProvider client={queryClient}>
			<Provider initialState={hyperverse}>
				<Ethereum.Provider theme={lightTheme()}>
					<InnerComponent>
						<ToastContainer />
						<Component {...pageProps} />
					</InnerComponent>
				</Ethereum.Provider>
			</Provider>
		</QueryClientProvider>
	);
}

export default MyApp;
