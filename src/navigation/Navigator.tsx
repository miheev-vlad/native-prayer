import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/configureStore';
import {MyDeskScreen} from '../screens/MyDeskScreen';

const Stack = createStackNavigator();

export const Navigator: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.auth.token);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isAuth ? (
        <>
          <Stack.Screen name="MyDesk" component={MyDeskScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};
