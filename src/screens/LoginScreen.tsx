import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import validator from 'validator';
import {Field, Form} from 'react-final-form';
import {FormApi} from 'final-form';
import {Text} from 'react-native';

import {AuthStackParamList} from '../navigation/navigators/AuthStackNavigator';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {LinkText} from '../components/LinkText';
import {OvalButton} from '../components/OvalButton';
import {ScreensWrapp} from '../components/ScreensWrapp';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/ducks/authSlice';
import {RootState} from '../redux/configureStore';

export const FormWrapp = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export interface IValues {
  email: string;
  password: string;
}

type LoginScreenProp = StackNavigationProp<AuthStackParamList, 'Login'>;

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenProp>();
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.isLoading);
  const error = useSelector((state: RootState) => state.auth.error);

  return (
    <ScreensWrapp>
      <Heading>Login</Heading>
      {loading && <Text>Processing...</Text>}
      {error && !loading && <Text>{error}</Text>}
      <Form
        onSubmit={(
          values: IValues,
          form: FormApi<IValues, Partial<Record<string, any>>>,
        ) => {
          console.log(values);
          dispatch(login());
          form.reset();
        }}
        render={({form}) => (
          <FormWrapp>
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
            <OvalButton onPress={form.submit}>Login</OvalButton>
          </FormWrapp>
        )}
      />
      <LinkText
        onPress={() => {
          navigation.navigate('Register');
        }}>
        Not registered yet...
      </LinkText>
    </ScreensWrapp>
  );
};
