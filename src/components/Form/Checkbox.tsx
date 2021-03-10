import React from 'react';
import { Box, Text } from '../Theme';

import FeatherIcon from 'react-native-vector-icons/Feather';
import { BorderlessButton } from 'react-native-gesture-handler';

interface CheckboxProps {
	label: string;
	checked: boolean;
	onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
	return (
		<BorderlessButton onPress={() => onChange()} style={{ justifyContent: 'center' }}>
			<Box flexDirection="row" alignItems="center">
				<Box
					marginRight="m"
					borderRadius="s"
					backgroundColor={checked ? 'primary' : 'background'}
					height={20}
					width={20}
					justifyContent="center"
					alignItems="center"
					borderWidth={1}
					borderColor="primary">
					<FeatherIcon name="check" size={16} color="white" />
				</Box>
				<Text variant="button">{label}</Text>
			</Box>
		</BorderlessButton>
	);
};

export default Checkbox;
