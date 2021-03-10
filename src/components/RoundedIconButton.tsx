import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import RoundedIcon, { RoundedIconProps } from './RoundedIcon';

interface RoundedIconButtonProps extends RoundedIconProps {
	onPress?: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
	return (
		// <RectButton style={{ borderRadius: props.size / 2, height: props.size, width: props.size }} {...{ onPress }}>
		<BorderlessButton {...{ onPress }}>
			<RoundedIcon {...props} />
		</BorderlessButton>
	);
};

RoundedIconButton.defaultProps = {
	...RoundedIcon.defaultProps,
};

export default RoundedIconButton;
