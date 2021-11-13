import React from 'react';
import {TextInputProps} from 'react-native';
import {StyledTextInput} from './styles';

export const Input: React.FC<TextInputProps> = ({...props}) => {
  return <StyledTextInput {...props} />;
};
