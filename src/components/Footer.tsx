import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from './Theme';
import Button from './Button';

interface FooterProps {
	label: string;
	onPress: () => void;
}

const Footer = ({ label, onPress }: FooterProps) => {
	const insets = useSafeAreaInsets();
	return (
		<Box backgroundColor="secondary" padding="m" borderTopLeftRadius="xl">
			<Box alignItems="center" style={{ paddingBottom: insets.bottom }}>
				<Button variant="Primary" {...{ label, onPress }} />
			</Box>
		</Box>
	);
};

export default Footer;
