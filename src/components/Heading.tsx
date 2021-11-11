import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {Colors} from '../styles/Colors';

export const Heading: React.FC<TextProps> = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    lineHeight: 20,
    fontFamily: 'SFUIText-Bold',
    color: Colors.liver,
  },
});
