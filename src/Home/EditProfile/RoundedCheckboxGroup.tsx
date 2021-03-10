import React, { useState } from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Box, Text, useTheme } from '../../components';

interface RoundedCheckboxGroupProps {
	options: { value: string }[];
	valueIsColor?: boolean;
}

const RoundedCheckboxGroup = ({ options, valueIsColor }: RoundedCheckboxGroupProps) => {
	const theme = useTheme();
	const [selectedValues, setSelectectedValues] = useState<string[]>([]);
	return (
		<Box flexDirection="row" flexWrap="wrap" marginTop="s">
			{options.map(({ value }) => {
				const index = selectedValues.indexOf(value);
				const isSelected = index !== -1;
				const backgroundColor = isSelected ? theme.colors.primary : theme.colors.background2;
				const color = isSelected ? theme.colors.background : theme.colors.secondary;

				return (
					<BorderlessButton
						key={value}
						onPress={() => {
							if (isSelected) {
								selectedValues.splice(index, 1);
							} else {
								selectedValues.push(value);
							}
							setSelectectedValues([...selectedValues]);
						}}>
						<View
							style={{
								width: 50,
								height: 50,
								borderRadius: 25,
								justifyContent: 'center',
								alignItems: 'center',
								borderWidth: isSelected ? 1 : 0,
								borderColor: theme.colors.background2,
								marginRight: theme.spacing.s,
								marginBottom: theme.spacing.m,
							}}>
							<View
								style={{
									width: 40,
									height: 40,
									borderRadius: 25,
									backgroundColor: valueIsColor ? value : backgroundColor,
									justifyContent: 'center',
									alignItems: 'center',
								}}>
								{!valueIsColor && (
									<Text textAlign="center" variant="header" style={{ color }}>
										{valueIsColor ? '' : value.toUpperCase()}
									</Text>
								)}
								{valueIsColor && isSelected && <FeatherIcon color="white" name="check" size={16} />}
							</View>
						</View>
					</BorderlessButton>
				);
			})}
		</Box>
	);
};

export default RoundedCheckboxGroup;
