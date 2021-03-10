import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeProvider } from './src/components/Theme';
import { AuthenticationNavigator } from './src/Authentication';

import { HomeNavigator } from './src/Home';
import { AppRoutes } from './src/components/Navigation';

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
	return (
		<ThemeProvider>
			<NavigationContainer>
				<StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
				<SafeAreaProvider>
					<AppStack.Navigator headerMode="none">
						<AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
						<AppStack.Screen name="Home" component={HomeNavigator} />
					</AppStack.Navigator>
				</SafeAreaProvider>
			</NavigationContainer>
		</ThemeProvider>
	);
}
