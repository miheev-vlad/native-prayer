import React from 'react';
import {TextProps} from 'react-native';
import {StyledView} from './styles';

export const AuthScreensWrapp: React.FC<TextProps> = ({children, ...props}) => {
  return <StyledView {...props}>{children}</StyledView>;
};
