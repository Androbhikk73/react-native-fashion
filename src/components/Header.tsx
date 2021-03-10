import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box, Text } from '../components/Theme';
import RoundedIconButton from './RoundedIconButton';

interface HeaderProps {
	left: {
		icon: string;
		onPress: () => void;
	};
	title: string;
	right?: {
		icon: string;
		onPress: () => void;
	};
	dark: boolean;
}

const Header = ({ title, left, right, dark }: HeaderProps) => {
	const insets = useSafeAreaInsets();
	const color = dark ? 'background' : 'secondary';

	return (
		<Box flexDirection="row" style={{ marginTop: insets.top }} alignItems="center" justifyContent="space-between" paddingHorizontal="m">
			<RoundedIconButton size={44} iconRatio={0.5} name={left.icon} onPress={left.onPress} {...{ color }} align={'center'} />
			<Text variant="header" {...{ color }}>
				{title.toUpperCase()}
			</Text>
			{right ? <RoundedIconButton align={'center'} size={44} iconRatio={0.5} name={right.icon} {...{ color }} onPress={right.onPress} /> : <Box style={{ width: 40 }} />}
		</Box>
	);
};

Header.defaultProps = {
	dark: false,
};

export default Header;
