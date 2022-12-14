import { useState, useEffect } from 'react';
import { createContainer, useContainer } from '@decentology/unstated-next';

import { useEvm } from '@decentology/hyperverse-evm/react';
import { SafuuLibrary, ModuleLibraryType } from '../safuuLibrary';
import { useHyperverse } from '@decentology/hyperverse/react';

function ModuleState(initialState: { tenantId: string } = { tenantId: '' }) {
	const { tenantId } = initialState;
	const { readOnlyProvider, signer } = useEvm();
	const hyperverse = useHyperverse();
	const [moduleLibrary, setModuleLibrary] = useState<ModuleLibraryType>();

	useEffect(() => {
		const lib = SafuuLibrary(hyperverse, signer || readOnlyProvider).then(setModuleLibrary).catch(() => {

		})
		return lib.cancel;
	}, [signer, readOnlyProvider])

	return {
		...moduleLibrary,
		tenantId,
	};
}

export const Module = createContainer(ModuleState);

export function useSafuu() {
	return useContainer(Module);
}
