import React from 'react';
import {FieldRenderProps} from 'react-final-form';
import {TextInputProps} from 'react-native';
import {ErrorText, InputWrapp, StyledTextInput} from './styles';

type RenderInputProps = FieldRenderProps<string, HTMLElement> & TextInputProps;

export const Input: React.FC<RenderInputProps> = (
  {input, meta, placeholder, secureTextEntry}: RenderInputProps,
  props,
) => {
  const {error, touched, submitError} = meta;

  const inputProps = {
    ...props,
    error: touched && error,
    ...input,
  };

  return (
    <InputWrapp>
      <StyledTextInput
        {...inputProps}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry ? true : false}
      />
      <ErrorText>{touched && (error || submitError) ? error : ''}</ErrorText>
    </InputWrapp>
  );
};
