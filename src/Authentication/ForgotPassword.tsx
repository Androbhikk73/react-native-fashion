import { useFormik } from 'formik';
import React from 'react';
import { Box, Button, Container, Text } from '../components';
import { AuthNavigationProps } from '../components/Navigation';
import Footer from './components/Footer';
import TextInput from '../components/Form/TextInput';
import * as Yup from 'yup';
import { Linking } from 'react-native';

const ForgotSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
});

const ForgotPassword = ({ navigation }: AuthNavigationProps<'ForgotPassword'>) => {
	const footer = <Footer title="Don't work?" action="Try another way" onPress={() => Linking.openURL('mailto:help@support.com')} />;
	const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
		initialValues: { email: '' },
		validationSchema: ForgotSchema,
		onSubmit: (values) => {
			console.log(values);
			navigation.navigate('PasswordChanged');
		},
	});
	return (
		<Container pattern={2} {...{ footer }} borderTopLeftRadius={true}>
			<Text variant="title1" textAlign="center" marginBottom="l">
				Forgot password?
			</Text>
			<Text variant="body" textAlign="center" marginBottom="l">
				Enter the email address associated with your account
			</Text>
			<Box marginBottom="m">
				<TextInput
					icon="mail"
					placeholder="Enter your Email"
					onChangeText={handleChange('email')}
					onBlur={handleBlur('email')}
					error={errors.email}
					touched={touched.email}
					autoCapitalize="none"
					autoCompleteType="email"
					returnKeyType="next"
					returnKeyLabel="next"
					onSubmitEditing={() => handleSubmit()}
					keyboardType="email-address"
				/>
			</Box>
			<Box alignItems="center" marginTop="m">
				<Button variant="Primary" onPress={handleSubmit} label="Reset password" />
			</Box>
		</Container>
	);
};

export default ForgotPassword;
