import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View, Image } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { useTheme, makeStyles } from '../../components';
import { AuthNavigationProps } from '../../components/Navigation';

import Slide, { SLIDER_HEIGHT } from './Slide';
import Subslide from './Subslide';
import Dot from './Dot';
import { Theme } from '../../components/Theme';
import { interpolateColor } from 'react-native-redash';

const { width } = Dimensions.get('window');
const useStyles = makeStyles((theme: Theme) => ({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	underlay: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center',
		borderBottomRightRadius: theme.borderRadii.xl,
		overflow: 'hidden',
	},
	slider: {
		height: SLIDER_HEIGHT,
		borderBottomRightRadius: theme.borderRadii.xl,
	},
	footer: {
		flex: 1,
	},
	footerContent: {
		flex: 1,
		backgroundColor: 'white',
		borderTopLeftRadius: theme.borderRadii.xl,
	},
	pagination: {
		...StyleSheet.absoluteFillObject,
		height: theme.borderRadii.xl,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
}));

const slides = [
	{
		title: 'Relaxed',
		subtitle: 'Find Your Outfits',
		description: "Confused about your outfit? Don't worry! Find the best outfit here!",
		color: '#BFEAF5',
		picture: {
			src: require('../assets/1.png'),
			width: 2513,
			height: 3583,
		},
	},
	{
		title: 'Playful',
		subtitle: 'Hear it First, Wear it First',
		description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas.',
		color: '#BEECC4',
		picture: {
			src: require('../assets/2.png'),
			width: 2791,
			height: 3744,
		},
	},
	{
		title: 'Excentric',
		subtitle: 'Your Style, Your Way',
		description: 'Create your individual & unique style and look amazing everyday',
		color: '#FFE4D9',
		picture: {
			src: require('../assets/3.png'),
			width: 2738,
			height: 3244,
		},
	},
	{
		title: 'Funky',
		subtitle: 'Look Good, Feel Good',
		description: 'Discover the latest trends in fashion and explore your personality',
		color: '#FFDDDD',
		picture: {
			src: require('../assets/4.png'),
			width: 1757,
			height: 2551,
		},
	},
];

const Onboarding = ({ navigation }: AuthNavigationProps<'Onboarding'>) => {
	const styles = useStyles();
	const theme = useTheme();
	const scroll = useRef<Animated.ScrollView>(null);
	const x = useSharedValue(0);
	const onScroll = useAnimatedScrollHandler({
		onScroll: ({ contentOffset }) => {
			x.value = contentOffset.x;
		},
	});
	const backgroundColor = useDerivedValue(() =>
		interpolateColor(
			x.value,
			slides.map((_, i) => i * width),
			slides.map((slide) => slide.color),
		),
	);
	const slider = useAnimatedStyle(() => ({
		backgroundColor: backgroundColor.value,
	}));
	const background = useAnimatedStyle(() => ({
		backgroundColor: backgroundColor.value,
	}));
	const currentIndex = useDerivedValue(() => x.value / width);
	const footerStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: -x.value }],
	}));

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.slider, slider]}>
				{slides.map(({ picture }, index) => {
					const style = useAnimatedStyle(() => ({
						opacity: interpolate(x.value, [(index - 0.5) * width, index * width, (index + 0.5) * width], [0, 1, 0], Extrapolate.CLAMP),
					}));

					return (
						<Animated.View style={[styles.underlay, style]} key={index}>
							<Image
								source={picture.src}
								style={{
									width: width - theme.borderRadii.xl,
									height: ((width - theme.borderRadii.xl) * picture.height) / picture.width,
								}}
							/>
						</Animated.View>
					);
				})}
				<Animated.ScrollView
					ref={scroll}
					horizontal
					snapToInterval={width}
					decelerationRate="fast"
					showsHorizontalScrollIndicator={false}
					bounces={false}
					onScroll={onScroll}
					scrollEventThrottle={16}>
					{slides.map(({ title, picture }, index) => (
						<Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
					))}
				</Animated.ScrollView>
			</Animated.View>
			<View style={styles.footer}>
				<Animated.View style={[StyleSheet.absoluteFill, background]} />
				<View style={styles.footerContent}>
					<View style={styles.pagination}>
						{slides.map((_, index) => (
							<Dot key={index} currentIndex={currentIndex} {...{ index }} />
						))}
					</View>
					<Animated.View
						style={[
							{
								flex: 1,
								flexDirection: 'row',
								width: width * slides.length,
							},
							footerStyle,
						]}>
						{slides.map(({ subtitle, description }, index) => {
							const last = index === slides.length - 1;
							return (
								<Subslide
									key={index}
									onPress={() => {
										if (last) {
											navigation.navigate('Welcome');
										} else {
											scroll.current?.getNode().scrollTo({
												x: width * (index + 1),
												animated: true,
											});
										}
									}}
									{...{ subtitle, description, last }}
								/>
							);
						})}
					</Animated.View>
				</View>
			</View>
		</View>
	);
};

export default Onboarding;
