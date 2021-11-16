import React from 'react';
import {FieldRenderProps} from 'react-final-form';
import {TextInputProps} from 'react-native';
import {ErrorText, InputWrapp, StyledTextInput} from './styles';

type RenderInputProps = FieldRenderProps<string, HTMLElement>;

export const Input: React.FC<RenderInputProps & TextInputProps> = (
  {input, meta}: RenderInputProps,
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
        placeholder={input.name}
        secureTextEntry={input.name === 'password' ? true : false}
      />
      <ErrorText>{touched && (error || submitError) ? error : ''}</ErrorText>
    </InputWrapp>
  );
};
