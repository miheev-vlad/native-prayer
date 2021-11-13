import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

import {AuthStackParamList} from '../navigation/navigators/AuthStackNavigator';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {LinkText} from '../components/LinkText';
import {SubmitButton} from '../components/SubmitButton';
import {AuthScreensWrapp} from '../components/AuthScreensWrapp';

type LoginScreenProp = StackNavigationProp<AuthStackParamList, 'Login'>;

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenProp>();

  return (
    <AuthScreensWrapp>
      <Heading>Login</Heading>
      <Input placeholder={'Email'} keyboardType={'email-address'} />
      <Input placeholder={'Password'} secureTextEntry />
      <SubmitButton onPress={() => {}}>Login</SubmitButton>
      <LinkText
        onPress={() => {
          navigation.navigate('Register');
        }}>
        Not registered yet...
      </LinkText>
    </AuthScreensWrapp>
  );
};
