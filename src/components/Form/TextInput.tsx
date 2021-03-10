import React, { forwardRef } from 'react';
import { StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps } from 'react-native';
import { Box, useTheme, RoundedIcon } from '..';

import FeatherIcon from 'react-native-vector-icons/Feather';

interface TextInputProps extends RNTextInputProps {
	icon: string;
	touched?: boolean;
	error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(({ icon, touched, error, ...props }, ref) => {
	const theme = useTheme();
	const SIZE = theme.borderRadii.m * 2;
	const reColor = !touched ? 'text' : error ? 'danger' : 'primary';
	const color = theme.colors[reColor];
	return (
		<Box flexDirection="row" alignItems="center" height={52} borderRadius="s" borderColor={reColor} borderWidth={StyleSheet.hairlineWidth} padding="s">
			<Box padding="s">
				<FeatherIcon name={icon} size={16} {...{ color }} />
			</Box>

			<Box flex={1}>
				<RNTextInput {...{ ref }} underlineColorAndroid="transparent" {...props} placeholderTextColor={color} />
			</Box>

			{touched && <RoundedIcon size={SIZE} name={!error ? 'check' : 'x'} backgroundColor={!error ? 'primary' : 'danger'} color="background" />}
		</Box>
	);
});

export default TextInput;
