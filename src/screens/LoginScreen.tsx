import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, View} from 'react-native';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {LinkText} from '../components/LinkText';
import {SubmitButton} from '../components/SubmitButton';
import {Colors} from '../styles/Colors';

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

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
