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
  name: string;
  email: string;
  password: string;
}

type RegisterScreenProp = StackNavigationProp<AuthStackParamList, 'Register'>;

export const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenProp>();

  return (
    <ScreensWrapp>
      <Heading>Registration</Heading>
      <Form
        onSubmit={(values: IValues, form: FormApi) => {
          Alert.alert(JSON.stringify(values));
          form.reset();
        }}>
        {(props: FieldRenderProps<string, any>) => (
          <FormWrapp>
            <Input
              name="userName"
              placeholder="Name"
              validate={(v: string) => (v ? undefined : 'Name is Required')}
            />
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
              Register
            </OvalButton>
          </FormWrapp>
        )}
      </Form>
      <LinkText
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Already registered...
      </LinkText>
    </ScreensWrapp>
  );
};
