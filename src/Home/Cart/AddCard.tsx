import React from 'react';
import { Box } from '../../components';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CardLayout from './CardLayout';

const AddCard = () => {
	return (
		<CardLayout onPress={() => true} backgroundColor="secondary">
			<Box flex={1} justifyContent="center" alignItems="center" borderRadius="m" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
				<FeatherIcon name="plus" color="white" size={32} />
			</Box>
		</CardLayout>
	);
};

export default AddCard;
