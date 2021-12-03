import React from 'react';
import { TouchableOpacityProps, TextProps } from 'react-native';
import { StyledText, StyledTouchOpacity } from './styles';

export const LinkText: React.FC<TouchableOpacityProps & TextProps> = ({
  children,
  onPress,
}) => {
  return (
    <StyledTouchOpacity onPress={onPress}>
      <StyledText>{children}</StyledText>
    </StyledTouchOpacity>
  );
};
