import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {Colors} from '../styles/Colors';

export const Input: React.FC<TextInputProps> = ({style, ...props}) => {
  return <TextInput {...props} style={[styles.input, style]} />;
};

const styles = StyleSheet.create({
  input: {
    width: 345,
    height: 50,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.mercury,
    fontSize: 17,
    fontFamily: 'SFUIText-Regular',
    lineHeight: 20,
    color: Colors.liver,
  },
});
