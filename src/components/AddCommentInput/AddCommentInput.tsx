import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { Dimensions, TextInputProps } from 'react-native';
import { ErrorText, InputWrapp, StyledTextInput } from './styles';

export const SCREEN_WIDTH = Dimensions.get('window').width;

type RenderInputProps = FieldRenderProps<string, HTMLElement> & TextInputProps;

export const AddCommentInput: React.FC<RenderInputProps> = (
  { input, meta, placeholder, secureTextEntry }: RenderInputProps,
  props,
) => {
  const { error, touched, submitError } = meta;

  const inputProps = {
    ...props,
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
