import React from 'react';
import { Box, Button, Container, Text, RoundedIconButton, RoundedIcon } from '../components';
import { AuthNavigationProps } from '../components/Navigation';
import Footer from './components/Footer';

const SIZE = 70;
const PasswordChanged = ({ navigation }: AuthNavigationProps<'PasswordChanged'>) => {
	const footer = <Footer title="Don't work?" action="Try another way" onPress={() => true} />;
	return (
		<Container
			pattern={0}
			footer={
				<Box flexDirection="row" justifyContent="center" margin="m">
					<RoundedIconButton name="x" color="secondary" backgroundColor="background" size={60} onPress={() => navigation.pop(3)} />
				</Box>
			}>
			<Box alignSelf="center">
				<RoundedIcon backgroundColor="primaryLight" size={SIZE} color="primary" name="check" />
			</Box>

			<Text variant="title1" textAlign="center" marginVertical="l">
				Your password was successfully changed
			</Text>
			<Text variant="body" textAlign="center" marginBottom="l">
				Close this window and login again
			</Text>
			<Box alignItems="center" marginTop="m">
				<Button variant="Primary" onPress={() => navigation.navigate('Login')} label="Login again" />
			</Box>
		</Container>
	);
};

export default PasswordChanged;
