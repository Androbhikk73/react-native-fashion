import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Box, Text } from '../../components';

import CheckboxGroup from './CheckboxGroup';
import RoundedCheckboxGroup from './RoundedCheckboxGroup';

const outfitType = [
	{ value: 'men', label: 'For Men' },
	{ value: 'women', label: 'For Women' },
	{ value: 'both', label: 'Both' },
];

const sizes = [{ value: 's' }, { value: 'm' }, { value: 'l' }, { value: 'xl' }, { value: 'xxl' }];

const colors = [{ value: '#0C0D34' }, { value: '#FF0058' }, { value: '#50B9DE' }, { value: '#00D99A' }, { value: '#FE5E33' }];

const preferredBrands = [
	{ value: 'adidas', label: 'Adidas' },
	{ value: 'nike', label: 'Nike' },
	{ value: 'converse', label: 'Converse' },
	{ value: 'tommy-hilfiger', label: 'Tommy Hilfiger' },
	{ value: 'billionaire-boys-club', label: 'Billionaire Boys Club' },
	{ value: 'jordan', label: 'Jordan' },
	{ value: 'le-coq-sportif', label: 'Le Coq Sportif' },
];

const Configuration = () => {
	return (
		<ScrollView>
			<Box padding="m">
				<Text variant="body">What Type of Outfit You Usually Wear?</Text>
				<CheckboxGroup options={outfitType} radio />

				<Text variant="body">What is Your Clothing Size?</Text>
				<RoundedCheckboxGroup options={sizes} />

				<Text variant="body">My Preferred Clothing Colors</Text>
				<RoundedCheckboxGroup options={colors} valueIsColor />

				<Text variant="body">My Preferred Brands</Text>
				<CheckboxGroup options={preferredBrands} />
			</Box>
		</ScrollView>
	);
};

export default Configuration;
