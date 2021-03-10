import React from 'react';
import { Box, Header } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';

import Notification from './Notification';
import { Content } from '../../components';

const Settings = ({ navigation }: HomeNavigationProps<'Settings'>) => {
	return (
		<Content>
			<Box backgroundColor="background">
				<Header left={{ icon: 'menu', onPress: () => navigation.openDrawer() }} title="Notificaion Settings" />
				<Box padding="m">
					<Notification title="Outfit Ideas" description="Receive Daily Notification" />
					<Notification title="Discounts & Sales" description="Buy The Stuff You Love For Less" />
					<Notification title="Stock Notifications" description="If The Product You Love Comes Back in Stock" />
					<Notification title="New Stuff" description="Hear it First, Wear it First" />
				</Box>
			</Box>
		</Content>
	);
};

export default Settings;
