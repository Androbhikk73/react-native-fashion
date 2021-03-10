import React, { useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Box, Button, Text } from '../components';
import { Container } from '../components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import TextInput from '../components/Form/TextInput';
import Footer from './components/Footer';
import { AuthNavigationProps } from '../components/Navigation';

const SignUpSchema = Yup.object().shape({
	password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
	passwordConfirmation: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required')
		.equals([Yup.ref('password')], "Password don't match"),
	email: Yup.string().email('Invalid email').required('Required'),
});

const SignUp = ({ navigation }: AuthNavigationProps<'SignUp'>) => {
	const footer = <Footer title="Already have an account?" action="Login here" onPress={() => navigation.pop()} />;
	const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
		initialValues: { email: '', password: '', passwordConfirmation: '' },
		validationSchema: SignUpSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});
	const password = useRef<RNTextInput>(null);
	const passwordConfirmation = useRef<RNTextInput>(null);
	return (
		<Container pattern={1} {...{ footer }}>
			<Text variant="title1" textAlign="center" marginBottom="l">
				Create account
			</Text>
			<Text variant="body" textAlign="center" marginBottom="l">
				Let's us know what your name, email and your password
			</Text>
			<Box>
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
						onSubmitEditing={() => password.current?.focus()}
					/>
				</Box>
				<Box marginBottom="m">
					<TextInput
						ref={password}
						icon="lock"
						placeholder="Enter your Password"
						secureTextEntry
						onChangeText={handleChange('password')}
						onBlur={handleBlur('password')}
						error={errors.password}
						touched={touched.password}
						autoCapitalize="none"
						autoCompleteType="password"
						returnKeyType="next"
						returnKeyLabel="next"
						onSubmitEditing={() => passwordConfirmation.current?.focus()}
					/>
				</Box>
				<Box marginBottom="m">
					<TextInput
						ref={passwordConfirmation}
						icon="lock"
						placeholder="Confirm Password"
						secureTextEntry
						onChangeText={handleChange('passwordConfirmation')}
						onBlur={handleBlur('passwordConfirmation')}
						error={errors.passwordConfirmation}
						touched={touched.passwordConfirmation}
						autoCapitalize="none"
						autoCompleteType="password"
						returnKeyType="go"
						returnKeyLabel="go"
						onSubmitEditing={() => handleSubmit()}
					/>
				</Box>
				<Box alignItems="center" marginTop="m">
					<Button variant="Primary" onPress={handleSubmit} label="Create your account" />
				</Box>
			</Box>
		</Container>
	);
};

export default SignUp;
