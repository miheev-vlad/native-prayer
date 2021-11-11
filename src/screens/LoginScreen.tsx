import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, View} from 'react-native';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {LinkText} from '../components/LinkText';
import {SubmitButton} from '../components/SubmitButton';
import {Colors} from '../styles/Colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../navigation/navigators/AuthStackNavigator';

type LoginScreenProp = StackNavigationProp<AuthStackParamList, 'Login'>;

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenProp>();

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Login</Heading>
      <Input
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
      />
      <Input style={styles.input} placeholder={'Password'} secureTextEntry />
      <SubmitButton onPress={() => {}} style={styles.loginBtn}>
        Login
      </SubmitButton>
      <LinkText
        onPress={() => {
          navigation.navigate('Register');
        }}>
        Not registered yet...
      </LinkText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 22,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
  },
  title: {
    marginBottom: 37,
  },
  input: {
    marginBottom: 15,
  },
  loginBtn: {
    marginTop: 6,
    marginBottom: 20,
  },
});
