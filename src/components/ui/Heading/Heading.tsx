import React from 'react';
import { TextProps } from 'react-native';
import { StyledText } from './styles';

const Heading: React.FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Heading;
