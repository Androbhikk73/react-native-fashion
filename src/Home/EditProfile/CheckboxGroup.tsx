import React, { useState } from 'react';
import { Box, Button, useTheme } from '../../components';

interface CheckboxGroupProps {
	options: { value: string; label: string }[];
	radio?: boolean;
}

const CheckboxGroup = ({ options, radio }: CheckboxGroupProps) => {
	const theme = useTheme();
	const [selectedValues, setSelectectedValues] = useState<string[]>([]);
	return (
		<Box flexDirection="row" flexWrap="wrap" marginTop="s">
			{options.map(({ value, label }) => {
				const index = selectedValues.indexOf(value);
				const isSelected = index !== -1;

				return (
					<Button
						key={value}
						variant={isSelected ? 'Primary' : 'Default'}
						label={label}
						onPress={() => {
							if (radio) {
								setSelectectedValues([value]);
							} else {
								if (isSelected) {
									selectedValues.splice(index, 1);
								} else {
									selectedValues.push(value);
								}
								setSelectectedValues([...selectedValues]);
							}
						}}
						style={{ width: 'auto', height: 'auto', padding: 12, marginRight: theme.spacing.s, marginBottom: theme.spacing.m }}
					/>
				);
			})}
		</Box>
	);
};

export default CheckboxGroup;
