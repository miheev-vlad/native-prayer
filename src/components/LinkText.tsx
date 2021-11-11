import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TextProps,
} from 'react-native';
import {Colors} from '../styles/Colors';

export const LinkText: React.FC<TouchableOpacityProps & TextProps> = ({
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.starDust,
    fontSize: 17,
    lineHeight: 20,
    fontFamily: 'SFUIText-Regular',
  },
});
