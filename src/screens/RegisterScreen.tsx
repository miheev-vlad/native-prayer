import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import validator from 'validator';
import {Field, Form} from 'react-final-form';

import {AuthStackParamList} from '../navigation/navigators/AuthStackNavigator';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {LinkText} from '../components/LinkText';
import {OvalButton} from '../components/OvalButton';
import {ScreensWrapp} from '../components/ScreensWrapp';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/configureStore';
import {cleareAuthError, register} from '../redux/ducks/auth/authSlice';
import {ErrorMessage} from '../components/ErrorMessage';

export const FormWrapp = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    <ScreensWrapp>
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
        render={({form}) => (
          <FormWrapp>
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
            <OvalButton onPress={form.submit}>Register</OvalButton>
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
          </FormWrapp>
        )}
      />
    </ScreensWrapp>
  );
};
