import React from 'react';
import { ScrollView } from 'react-native';
import { Box, Text } from '../../components';
import CheckboxGroup from './CheckboxGroup';
import TextInput from '../../components/Form/TextInput';

const genders = [
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' },
	{ value: 'other', label: 'Transgender' },
];

const PersonalInfo = () => {
	return (
		<ScrollView>
			<Box padding="m">
				<Text variant="body" marginBottom="m">
					Account Information
				</Text>
				<Box marginBottom="m">
					<TextInput icon="user" placeholder="Enter Your Name" autoCapitalize="none" autoCompleteType="name" returnKeyType="next" returnKeyLabel="Next" />
				</Box>
				<Box marginBottom="m">
					<TextInput
						icon="lock"
						placeholder="Enter your Password"
						secureTextEntry
						autoCapitalize="none"
						autoCompleteType="password"
						returnKeyType="next"
						returnKeyLabel="Next"
					/>
				</Box>
				<Box marginBottom="m">
					<TextInput icon="map-pin" placeholder="Enter Your Address" autoCapitalize="none" autoCompleteType="street-address" returnKeyType="next" returnKeyLabel="Next" />
				</Box>
				<CheckboxGroup options={genders} radio />
			</Box>
		</ScrollView>
	);
};

export default PersonalInfo;
