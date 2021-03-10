import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { Text, useTheme } from '../components/Theme';

const styles = StyleSheet.create({
	container: {
		borderRadius: 25,
		height: 50,
		width: 245,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

interface ButtonProps {
	label?: string;
	variant: 'Default' | 'Primary';
	onPress?: () => void;
	style?: RectButtonProperties['style'];
}

const Button = ({ label, variant, onPress, style }: ButtonProps) => {
	const theme = useTheme();
	const backgroundColor = variant === 'Primary' ? theme.colors.primary : theme.colors.background2;
	const color = variant === 'Primary' ? theme.colors.background : theme.colors.secondary;
	return (
		<RectButton style={[styles.container, style, { backgroundColor }]} {...{ onPress }}>
			<Text variant="button" style={{ color }}>
				{label}
			</Text>
		</RectButton>
	);
};

Button.defaultProps = { variant: 'Default' };

export default Button;
