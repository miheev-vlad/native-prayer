import React from 'react';
import {TextProps, TouchableOpacityProps} from 'react-native';
import {StyledText, StyledTouchOpacity} from './styles';

export const SubmitButton: React.FC<TouchableOpacityProps & TextProps> = ({
  children,
  onPress,
}) => {
  return (
    <StyledTouchOpacity onPress={onPress}>
      <StyledText>{children}</StyledText>
    </StyledTouchOpacity>
  );
};
