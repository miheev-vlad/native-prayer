import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, View} from 'react-native';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {LinkText} from '../components/LinkText';
import {SubmitButton} from '../components/SubmitButton';
import {Colors} from '../styles/Colors';

export const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Registration</Heading>
      <Input style={styles.input} placeholder={'Name'} />
      <Input
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
      />
      <Input style={styles.input} placeholder={'Password'} secureTextEntry />
      <SubmitButton onPress={() => {}} style={styles.registerBtn}>
        Register
      </SubmitButton>
      <LinkText
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Already registered...
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
  registerBtn: {
    marginTop: 6,
    marginBottom: 20,
  },
});
