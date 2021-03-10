import React, { ReactNode } from 'react';
import { BoxProps } from '@shopify/restyle';
import { Box, Theme } from '../../components';
import { BorderlessButton } from 'react-native-gesture-handler';

export const CARD_HEIGHT = 150;

interface CardLayoutProps {
	children: ReactNode;
	onPress: () => void;
	backgroundColor: BoxProps<Theme>['backgroundColor'];
}

const CardLayout = ({ onPress, children, backgroundColor }: CardLayoutProps) => {
	return (
		<BorderlessButton onPress={onPress}>
			<Box padding="m" marginLeft="m" borderRadius="m" width={110} height={CARD_HEIGHT} {...{ backgroundColor }}>
				{children}
			</Box>
		</BorderlessButton>
	);
};

export default CardLayout;
