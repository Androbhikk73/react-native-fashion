import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeRoutes } from '../components/Navigation';

import DrawerContent, { DRAWER_WIDTH } from './Drawer';

import OutfitIdeas from './OutfitIdeas';
import FavoriteOutfits from './FavoriteOutfits';
import EditProfile from './EditProfile';
import TransactionHistory from './TransactionHistory';
import Settings from './Settings';
import Cart from './Cart';

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
	<Drawer.Navigator drawerContent={() => <DrawerContent />} drawerStyle={{ width: DRAWER_WIDTH }}>
		<Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
		<Drawer.Screen name="FavoriteOutfits" component={FavoriteOutfits} />
		<Drawer.Screen name="EditProfile" component={EditProfile} />
		<Drawer.Screen name="TransactionHistory" component={TransactionHistory} />
		<Drawer.Screen name="Settings" component={Settings} />
		<Drawer.Screen name="Cart" component={Cart} />
	</Drawer.Navigator>
);
