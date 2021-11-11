import React from 'react';
import {
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Colors} from '../styles/Colors';

export const SubmitButton: React.FC<TouchableOpacityProps & TextProps> = ({
  children,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.rodeoDust,
    width: 209,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    paddingHorizontal: 17,
    paddingTop: 8,
    paddingBottom: 7,
  },
  text: {
    color: Colors.white,
    fontSize: 12,
    lineHeight: 14,
    fontFamily: 'SFUIText-Bold',
    textTransform: 'uppercase',
  },
});
