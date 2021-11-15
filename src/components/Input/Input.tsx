import React from 'react';
import {useField} from 'react-final-form';
import {ErrorText, InputWrapp, StyledTextInput} from './styles';

export const Input: React.FC<any> = props => {
  const {
    input,
    meta: {error, touched, submitError},
  } = useField(props.name, {
    validate: props.validate,
  });

  const inputProps = {
    ...props,
    error: touched && error,
    ...input,
  };

  return (
    <InputWrapp>
      <StyledTextInput {...inputProps} />
      <ErrorText>{touched && (error || submitError) ? error : ''}</ErrorText>
    </InputWrapp>
  );
};
