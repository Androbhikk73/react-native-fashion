import React from 'react';
import { Dimensions, View } from 'react-native';
import { Box, useTheme, Theme } from '../../../components';
import { lerp } from './scale';
import Underlay, { MARGIN } from './Underlay';
import moment from 'moment';
import Animated, { divide, multiply, sub } from 'react-native-reanimated';
import { useTransition } from 'react-native-redash/lib/module/v1';
import { useIsFocused } from '@react-navigation/native';

const { width: wWidth } = Dimensions.get('window');
const aspectRatio = 195 / 305;
const AnimatedBox = Animated.createAnimatedComponent(Box);

export interface DataPoint {
	date: number;
	value: number;
	color: keyof Theme['colors'];
	id: number;
}

interface GraphProps {
	data: DataPoint[];
	startDate: number;
	numberOfMonths: number;
}

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
	const isFocused = useIsFocused();
	const transition = useTransition(isFocused, { duration: 650 });
	const theme = useTheme();
	const canvasWidth = wWidth - theme.spacing.m * 2;
	const canvasHeight = canvasWidth * aspectRatio;
	const width = canvasWidth - theme.spacing[MARGIN];
	const height = canvasHeight - theme.spacing[MARGIN];
	const step = canvasWidth / numberOfMonths;
	const values = data.map((p) => p.value);
	const dates = data.map((p) => p.date);
	const minY = Math.min(...values);
	const maxY = Math.max(...values);

	return (
		<Box marginTop="xl" paddingBottom={MARGIN} paddingLeft="l">
			<Underlay {...{ minY }} {...{ maxY }} {...{ startDate }} {...{ numberOfMonths }} {...{ step }} />
			<View style={{ width, height, overflow: 'hidden' }}>
				{data.map((point) => {
					const i = Math.round(moment.duration(moment(point.date).diff(startDate)).asMonths());
					const totalHeight = lerp(0, height, point.value / maxY);
					const currentHeight = multiply(totalHeight, transition);
					const translateY = divide(sub(totalHeight, currentHeight), 2);

					return (
						<AnimatedBox
							key={point.id}
							position="absolute"
							left={i * step}
							bottom={0}
							width={step}
							height={totalHeight}
							style={{ transform: [{ translateY }, { scaleY: transition }] }}>
							<Box
								position="absolute"
								top={0}
								bottom={0}
								left={theme.spacing.m}
								right={theme.spacing.m}
								backgroundColor={point.color}
								opacity={0.1}
								borderTopLeftRadius="m"
								borderTopRightRadius="m"
							/>
							<Box position="absolute" top={0} height={32} left={theme.spacing.m} right={theme.spacing.m} backgroundColor={point.color} borderRadius="m" />
						</AnimatedBox>
					);
				})}
			</View>
		</Box>
	);
};

export default Graph;
