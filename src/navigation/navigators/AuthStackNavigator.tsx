import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../../screens/LoginScreen';
import {RegisterScreen} from '../../screens/RegisterScreen';

const AuthStack = createStackNavigator();

export const AuthStackNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};
