import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

import {AuthStackParamList} from '../navigation/navigators/AuthStackNavigator';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {LinkText} from '../components/LinkText';
import {SubmitButton} from '../components/SubmitButton';
import {AuthScreensWrapp} from '../components/AuthScreensWrapp';

type RegisterScreenProp = StackNavigationProp<AuthStackParamList, 'Register'>;

export const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenProp>();

  return (
    <AuthScreensWrapp>
      <Heading>Registration</Heading>
      <Input placeholder={'Name'} />
      <Input placeholder={'Email'} keyboardType={'email-address'} />
      <Input placeholder={'Password'} secureTextEntry />
      <SubmitButton onPress={() => {}}>Register</SubmitButton>
      <LinkText
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Already registered...
      </LinkText>
    </AuthScreensWrapp>
  );
};
