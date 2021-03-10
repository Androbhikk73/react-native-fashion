import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Box, Button, Text } from '../../components';
import Card, { CardType } from './Card';
import AddCard from './AddCard';
import LineItem from './LineItem';
import { CARD_HEIGHT } from './CardLayout';

const cards = [
	{
		id: 0,
		type: CardType.VISA,
		last4Digits: 5467,
		expiration: '05/24',
	},
	{
		id: 1,
		type: CardType.MASTERCARD,
		last4Digits: 2620,
		expiration: '05/24',
	},
];

interface CheckoutProps {
	minHeight: number;
	cartCount: number;
}

const Checkout = ({ minHeight, cartCount }: CheckoutProps) => {
	const [selectedCard, setSelectedCard] = useState(cards[0].id);

	return (
		<Box flex={1} backgroundColor="secondary" style={{ paddingTop: minHeight }}>
			<Box flex={1} padding="m">
				<Box height={CARD_HEIGHT}>
					<ScrollView horizontal>
						<AddCard />
						{cards.map((card) => (
							<Card key={card.id} {...{ card }} selected={selectedCard === card.id} onSelect={() => setSelectedCard(card.id)} />
						))}
					</ScrollView>
				</Box>
				<Box marginTop="xl">
					<Text color="background" variant="title3">
						Delivery Address
					</Text>
					<Box flexDirection="row" opacity={0.5} paddingVertical="m">
						<Box flex={1}>
							<Text color="background">Unit 15, York Farm Business Centre,</Text>
							<Text color="background">Watling St, Towcester</Text>
						</Box>
						<Box justifyContent="center" alignItems="center">
							<Text color="background">Change</Text>
						</Box>
					</Box>
					<LineItem label={'Total Items (' + cartCount + ')'} value={189.94} />
					<LineItem label="Standard Delivery" value={12.0} />
					<LineItem label="Total Payment" value={201.84} />
				</Box>
				<Box paddingVertical="l" alignItems="center" justifyContent="flex-end" flex={1}>
					<Button label="Swipe To Pay $201.84" variant="Primary" onPress={() => true} />
				</Box>
			</Box>
		</Box>
	);
};

export default Checkout;
