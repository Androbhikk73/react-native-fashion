import React from 'react';
import { Image, View } from 'react-native';
import { Text } from '../../components';
import CardLayout from './CardLayout';

export enum CardType {
	VISA,
	MASTERCARD,
}

export interface CardModel {
	id: number;
	type: CardType;
	last4Digits: number;
	expiration: string;
}

interface CardProps {
	card: CardModel;
	selected: boolean;
	onSelect: () => void;
}

const visaLogo = require('./assets/visa.png');
const masterCardLogo = require('./assets/mastercard.png');

const Card = ({ card, selected, onSelect }: CardProps) => {
	return (
		<CardLayout onPress={onSelect} backgroundColor={selected ? 'primary' : 'background'}>
			<View style={{ height: 20 }}>
				<Image style={card.type === CardType.VISA ? { width: 39, height: 20 } : { width: 32.5, height: 20 }} source={card.type === CardType.VISA ? visaLogo : masterCardLogo} />
				<Text variant="title3" marginTop="m" marginBottom="s" color={selected ? 'background' : 'text'}>
					**** {card.last4Digits}
				</Text>
				<Text opacity={0.5}>Expiration</Text>
				<Text color={selected ? 'background' : 'text'}>{card.expiration}</Text>
			</View>
		</CardLayout>
	);
};

export default Card;
