import React from 'react';
import { TextProps } from 'react-native';
import { ErrorTextWrapper, StyledErrorText } from './styles';

const ErrorMessage: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <ErrorTextWrapper>
      <StyledErrorText {...props}>{children}</StyledErrorText>
    </ErrorTextWrapper>
  );
};

export default ErrorMessage;
