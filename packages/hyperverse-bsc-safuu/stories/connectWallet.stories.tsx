import { HyperverseProvider } from './utils/Provider';
import { Meta, Story } from '@storybook/react';
import { useSafuu } from '../source/react';
import { useEvm } from '@decentology/hyperverse-evm/react';
import Doc from '../docs/connectWallet.mdx';
import React from 'react';

const Button = () => {
	const { address, Connect } = useEvm();
	const {} = useSafuu();
	return <Connect />;
};

export default {
	title: 'Components/ConnectWallet',
	component: Button,
	parameters: {
		docs: {
			page: Doc,
		},
	},
} as Meta;

const Template: Story = (args: any) => (
	<HyperverseProvider>
		<Button {...args} />
	</HyperverseProvider>
);

export const Demo = Template.bind({});

Demo.args = {};
