import React from 'react';
import { TouchableOpacityProps, TextProps } from 'react-native';
import { StyledText, StyledTouchOpacity } from './styles';

const LinkText: React.FC<TouchableOpacityProps & TextProps> = ({
  children,
  onPress,
}) => {
  return (
    <StyledTouchOpacity onPress={onPress}>
      <StyledText>{children}</StyledText>
    </StyledTouchOpacity>
  );
};

export default LinkText;
