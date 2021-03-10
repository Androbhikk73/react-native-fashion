import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { RoundedIcon } from '../../components';
import { HomeRoutes } from '../../components/Navigation';
import { Box, Text, Theme, useTheme } from '../../components/Theme';

interface BaseDrawerItem {
	icon: string;
	color: keyof Theme['colors'];
	label: string;
}

interface ScreenDrawerItem extends BaseDrawerItem {
	screen: keyof HomeRoutes;
}

interface OnPressDrawerItem extends BaseDrawerItem {
	onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}

export type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;

const DrawerItem = ({ icon, color, label, ...props }: DrawerItemProps) => {
	const theme = useTheme();
	const navigation = useNavigation<DrawerNavigationProp<HomeRoutes, 'OutfitIdeas'>>();
	return (
		<RectButton style={{ borderRadius: theme.borderRadii.m }} onPress={() => ('screen' in props ? navigation.navigate(props.screen) : props.onPress(navigation))}>
			<Box flexDirection="row" alignItems="center" padding="s">
				<RoundedIcon iconRatio={0.7} size={36} name={icon} backgroundColor={color} color="background" />
				<Text variant="button" color="secondary" marginLeft="m">
					{label}
				</Text>
			</Box>
		</RectButton>
	);
};

export default DrawerItem;
