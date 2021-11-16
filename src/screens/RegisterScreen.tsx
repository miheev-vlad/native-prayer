import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import validator from 'validator';
import {Field, Form} from 'react-final-form';
import {FormApi} from 'final-form';
import {Alert} from 'react-native';

import {AuthStackParamList} from '../navigation/navigators/AuthStackNavigator';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {LinkText} from '../components/LinkText';
import {OvalButton} from '../components/OvalButton';
import {ScreensWrapp} from '../components/ScreensWrapp';

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

  return (
    <ScreensWrapp>
      <Heading>Registration</Heading>
      <Form
        onSubmit={(
          values: IValues,
          form: FormApi<IValues, Partial<Record<string, any>>>,
        ) => {
          Alert.alert(JSON.stringify(values));
          form.reset();
        }}
        render={({form}) => (
          <FormWrapp>
            <Field<string>
              name="name"
              component={Input}
              validate={(v: string) => (v ? undefined : 'Name is Required')}
            />
            <Field<string>
              name="email"
              component={Input}
              validate={(v: string) =>
                !validator.isEmail(v || '') && 'Valid Email is Required'
              }
            />
            <Field<string>
              name="password"
              component={Input}
              validate={(v: string) => (v ? undefined : 'Password is Required')}
            />
            <OvalButton onPress={form.submit}>Register</OvalButton>
          </FormWrapp>
        )}
      />
      <LinkText
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Already registered...
      </LinkText>
    </ScreensWrapp>
  );
};
