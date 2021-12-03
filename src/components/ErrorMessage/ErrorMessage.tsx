import React from 'react';
import { TextProps } from 'react-native';
import { ErrorTextWrapp, StyledErrorText } from './styles';

export const ErrorMessage: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <ErrorTextWrapp>
      <StyledErrorText {...props}>{children}</StyledErrorText>
    </ErrorTextWrapp>
  );
};
