import React from 'react';
import { Box, Text } from '../../components';

interface LineItemProps {
	label: string;
	value: number;
}

const LineItem = ({ label, value }: LineItemProps) => {
	return (
		<Box flexDirection="row" paddingVertical="s">
			<Box flex={1}>
				<Text color="background" variant="title3">
					{label}
				</Text>
			</Box>
			<Box>
				<Text variant="title3" color="primary">
					${value}
				</Text>
			</Box>
		</Box>
	);
};

export default LineItem;
