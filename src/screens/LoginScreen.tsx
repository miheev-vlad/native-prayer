import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import validator from 'validator';
import {FieldRenderProps} from 'react-final-form';
import {FormApi} from 'final-form';
import {Alert} from 'react-native';

import {AuthStackParamList} from '../navigation/navigators/AuthStackNavigator';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {LinkText} from '../components/LinkText';
import {OvalButton} from '../components/OvalButton';
import {ScreensWrapp} from '../components/ScreensWrapp';
import {Form} from '../components/Form';

export const FormWrapp = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IValues {
  email: string;
  password: string;
}

type LoginScreenProp = StackNavigationProp<AuthStackParamList, 'Login'>;

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenProp>();

  return (
    <ScreensWrapp>
      <Heading>Login</Heading>
      <Form
        onSubmit={(values: IValues, form: FormApi) => {
          Alert.alert(JSON.stringify(values));
          form.reset();
        }}>
        {(props: FieldRenderProps<string, any>) => (
          <FormWrapp>
            <Input
              name="email"
              placeholder="Email"
              keyboardType={'email-address'}
              validate={(v: string) =>
                !validator.isEmail(v || '') && 'Valid Email is Required'
              }
            />
            <Input
              name="password"
              placeholder="Password"
              secureTextEntry
              validate={(v: string) => (v ? undefined : 'Password is Required')}
            />
            <OvalButton
              onPress={() => {
                props.form.submit();
              }}>
              Login
            </OvalButton>
          </FormWrapp>
        )}
      </Form>
      <LinkText
        onPress={() => {
          navigation.navigate('Register');
        }}>
        Not registered yet...
      </LinkText>
    </ScreensWrapp>
  );
};
