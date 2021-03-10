import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { clamp, snapPoint } from 'react-native-redash';
import { aspectRatio, Box, useTheme } from '../../components';

const height = 500 * aspectRatio;
const minHeight = 200 * aspectRatio;
const snapPoints = [-(height - minHeight), 0];

interface CartContainerProps {
	children: ReactNode;
	CheckoutComponent: FC<{ minHeight: number; cartCount: number }>;
	cartCount: number;
}

const CartContainer = ({ children, CheckoutComponent, cartCount }: CartContainerProps) => {
	const theme = useTheme();
	const translateY = useSharedValue(0);
	const onGestureEvent = useAnimatedGestureHandler({
		onStart: (event, ctx: { y: number }) => {
			ctx.y = translateY.value;
		},
		onActive: ({ translationY }, ctx) => {
			translateY.value = clamp(ctx.y + translationY, snapPoints[0], snapPoints[1]);
		},
		onEnd: ({ velocityY }) => {
			const dest = snapPoint(translateY.value, velocityY, snapPoints);
			translateY.value = withSpring(dest, { overshootClamping: true });
		},
	});
	const style = useAnimatedStyle(() => ({
		transform: [{ translateY: translateY.value }],
	}));

	return (
		<Box flex={1}>
			<CheckoutComponent {...{ minHeight }} {...{ cartCount }} />
			<PanGestureHandler onGestureEvent={onGestureEvent}>
				<Animated.View
					style={[
						{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							height,
							backgroundColor: 'white',
							borderBottomLeftRadius: theme.borderRadii.xl,
							borderBottomRightRadius: theme.borderRadii.xl,
						},
						style,
					]}>
					{children}

					<View
						style={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							right: 0,
							height: theme.borderRadii.xl,
							justifyContent: 'flex-end',
							alignItems: 'center',
							// backgroundColor: 'blue',
						}}>
						<View
							style={{
								height: 5 * aspectRatio,
								backgroundColor: theme.colors.background2,
								width: 60 * aspectRatio,
								borderRadius: 2.5 * aspectRatio,
								marginBottom: theme.spacing.m,
							}}
						/>
					</View>
				</Animated.View>
			</PanGestureHandler>
		</Box>
	);
};

export default CartContainer;
