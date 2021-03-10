import React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import { Box, Header, makeStyles, Text, Theme, ScrollableContent } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';
import Graph, { DataPoint } from './Graph/Graph';
import Transaction from './Transaction';

const useStyles = makeStyles((theme: Theme) => ({
	footer: {
		...StyleSheet.absoluteFillObject,
		width: undefined,
		height: undefined,
		borderTopLeftRadius: theme.borderRadii.xl,
	},
	scrollView: {
		paddingBottom: footerHeight,
	},
}));

const footerHeight = Dimensions.get('window').width / 4;
const startDate = new Date('2019-09-01').getTime();
const numberOfMonths = 7;
const data: DataPoint[] = [
	{ date: new Date('2019-10-02').getTime(), value: 139.42, color: 'primary', id: 245672 },
	{ date: new Date('2019-12-01').getTime(), value: 281.23, color: 'graph1', id: 245673 },
	{ date: new Date('2020-02-01').getTime(), value: 198.54, color: 'graph2', id: 245674 },
];

const TransactionHistory = ({ navigation }: HomeNavigationProps<'TransactionHistory'>) => {
	const styles = useStyles();
	return (
		<ScrollableContent>
			<Box flex={1} backgroundColor="background">
				<Header left={{ icon: 'menu', onPress: () => navigation.openDrawer() }} right={{ icon: 'share', onPress: () => true }} title="Transaction History" />
				<Box padding="m" flex={1}>
					<Box flexDirection="row" justifyContent="space-between" alignItems="flex-end">
						<Box>
							<Text variant="header" color="secondary" opacity={0.3} style={{ textTransform: 'uppercase' }}>
								Total Spent
							</Text>
							<Text variant="title1">$619,19</Text>
						</Box>
						<Box backgroundColor="primaryLight" borderRadius="m" padding="s">
							<Text color="primary">All Time</Text>
						</Box>
					</Box>
					<Graph {...{ data }} {...{ startDate }} {...{ numberOfMonths }} />
					<ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
						{data.map((transaction, index) => (
							<Transaction key={index} {...{ transaction }} />
						))}
					</ScrollView>
				</Box>
			</Box>
		</ScrollableContent>
	);
};

export default TransactionHistory;
