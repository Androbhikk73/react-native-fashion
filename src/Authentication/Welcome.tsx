import React from 'react';
import { Image, Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useTheme, Box, Text, Button } from '../components';
import { AuthNavigationProps } from '../components/Navigation';

const { width } = Dimensions.get('window');
const picture = {
	src: require('./assets/5.png'),
	width: 4400,
	height: 4900,
};
const Welcome = ({ navigation }: AuthNavigationProps<'Welcome'>) => {
	const theme = useTheme();
	const BORDER_RADIUS = theme.borderRadii.xl;

	return (
		<Box flex={1} backgroundColor="background">
			<Box flex={1} borderBottomRightRadius="xl" backgroundColor="background2" alignItems="center" justifyContent="flex-end">
				<Image
					source={picture.src}
					style={{
						width: width - BORDER_RADIUS,
						height: ((width - BORDER_RADIUS) * picture.height) / picture.width,
					}}
					resizeMode="cover"
				/>
			</Box>
			<Box flex={1} borderTopLeftRadius="xl">
				<Box backgroundColor="background2" position="absolute" top={0} left={0} right={0} bottom={0}>
					<Box backgroundColor="background" borderTopLeftRadius="xl" justifyContent="space-evenly" alignItems="center" flex={1} padding="xl">
						<Text variant="title2" textAlign="center">
							Let's get started
						</Text>
						<Text variant="body" textAlign="center">
							Login to your account below or signup for an amazing experience
						</Text>
						<Button label="Have an account? Login" variant="Primary" onPress={() => navigation.navigate('Login')} />
						<Button label="Join us, it's Free" variant="Default" onPress={() => navigation.navigate('SignUp')} />
						<BorderlessButton onPress={() => navigation.navigate('ForgotPassword')} style={{ marginTop: 10 }}>
							<Text variant="button" color="secondary">
								Forgot password?
							</Text>
						</BorderlessButton>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Welcome;
