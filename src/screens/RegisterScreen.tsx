import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';
import validator from 'validator';
import { Field, Form } from 'react-final-form';

import { AuthStackParamList } from '../navigation/navigators/AuthStackNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { cleareAuthError, register } from '../redux/ducks/auth/authSlice';
import { ScreensWrapper } from '../components/containers';
import {
  Button,
  ErrorMessage,
  Heading,
  Input,
  LinkText,
} from '../components/ui';

export interface IValues {
  name: string;
  email: string;
  password: string;
}

type RegisterScreenProp = StackNavigationProp<AuthStackParamList, 'Register'>;

export const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenProp>();
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.isLoading);
  const error = useSelector((state: RootState) => state.auth.error);

  return (
    <ScreensWrapper>
      <Heading>Registration</Heading>
      {error && !loading && <ErrorMessage>{error}</ErrorMessage>}
      <Form
        onSubmit={(values: IValues) => {
          dispatch(
            register({
              email: values.email,
              name: values.name,
              password: values.password,
            }),
          );
        }}
        render={({ form }) => (
          <FormWrapper>
            <Field<string>
              name="name"
              placeholder="Name"
              component={Input}
              validate={(v: string) => (v ? undefined : 'Name is Required')}
            />
            <Field<string>
              name="email"
              placeholder="Email"
              component={Input}
              validate={(v: string) =>
                !validator.isEmail(v || '') && 'Valid Email is Required'
              }
            />
            <Field<string>
              name="password"
              placeholder="Password"
              component={Input}
              secureTextEntry
              validate={(v: string) => (v ? undefined : 'Password is Required')}
            />
            <Button onPress={form.submit}>Register</Button>
            <LinkText
              onPress={() => {
                dispatch(cleareAuthError());
                form.reset();
                form.resetFieldState('name');
                form.resetFieldState('email');
                form.resetFieldState('password');
                navigation.navigate('Login');
              }}>
              Already registered...
            </LinkText>
          </FormWrapper>
        )}
      />
    </ScreensWrapper>
  );
};

export const FormWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
