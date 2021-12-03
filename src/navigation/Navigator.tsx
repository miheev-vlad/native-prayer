import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackNavigator } from './navigators/AuthStackNavigator';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { RootState } from '../redux/configureStore';
import { MyDeskScreen } from '../screens/MyDeskScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MyPrayersScreen } from '../screens/MyPrayersScreen';
import { SubscribedScreen } from '../screens/SubscribedScreen';
import { Alert } from 'react-native';
import { SettingsSvgIcon } from '../../assets/icons/SettingsSvgIcon';
import { Colors } from '../styles/Colors';
import { DetailPrayerScreen } from '../screens/DetailPrayerScreen';
import { IconWrapp } from '../components/IconWrapp';
import { SmallAddSvgIcon } from '../../assets/icons/SmallAddSvgIcon';
import { PrayerLineDustSvgIcon } from '../../assets/icons/PrayerLineDustSvgIcon';

export const StyledBageContainer = styled.View`
  margin-top: 16px;
  margin-left: -54px;
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: ${Colors.roseVale};
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const StyledBageData = styled.Text`
  color: ${Colors.white};
  font-size: 9px;
  line-height: 11px;
  font-family: SFUIText-Regular;
`;

export type MainStackParamList = {
  MyDesk: undefined;
  Column: {
    id: number;
    title: string;
  };
  Detail: undefined;
};

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.moonstoneBlue,
        tabBarInactiveTintColor: Colors.silver,
        tabBarLabelStyle: {
          fontFamily: 'SFUIText-Bold',
          fontSize: 13,
          lineHeight: 16,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: Colors.moonstoneBlue,
          borderBottomWidth: 2,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          shadowRadius: 0,
          borderBottomWidth: 1,
          borderBottomColor: Colors.mercury,
        },
      }}>
      <Tab.Screen
        name="MyPrayers"
        component={MyPrayersScreen}
        options={{ title: 'My Prayers' }}
      />
      <Tab.Screen
        name="Subscribed"
        component={SubscribedScreen}
        options={{
          title: 'Subscribed',
          tabBarBadge: () => (
            <StyledBageContainer>
              <StyledBageData>3</StyledBageData>
            </StyledBageContainer>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Navigator: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.auth.token);

  return (
    <Stack.Navigator>
      {isAuth ? (
        <>
          <Stack.Screen
            name="MyDesk"
            component={MyDeskScreen}
            options={{
              title: 'My Desk',
              headerTintColor: `${Colors.liver}`,
              headerTitleStyle: {
                fontSize: 17,
                lineHeight: 20,
                fontFamily: 'SFUIText-Bold',
              },
              headerTitleAlign: 'center',
              headerStyle: {
                borderBottomWidth: 1,
                borderBottomColor: Colors.mercury,
              },
              headerRight: () => (
                <IconWrapp onPress={() => Alert.alert('Adding column')}>
                  <SmallAddSvgIcon />
                </IconWrapp>
              ),
            }}
          />
          <Stack.Screen
            name="Column"
            options={({ route }: any) => ({
              title: route.params.title,
              headerTitleAlign: 'center',
              headerTintColor: `${Colors.liver}`,
              headerTitleStyle: {
                fontSize: 17,
                lineHeight: 20,
                fontFamily: 'SFUIText-Bold',
              },
              headerStyle: {
                shadowColor: 'transparent',
                shadowRadius: 0,
              },
              headerRight: () => (
                <IconWrapp onPress={() => Alert.alert('This is a settings')}>
                  <SettingsSvgIcon />
                </IconWrapp>
              ),
            })}>
            {TabStack}
          </Stack.Screen>
          <Stack.Screen
            name="Detail"
            component={DetailPrayerScreen}
            options={{
              title: '',
              headerRight: () => (
                <IconWrapp
                  onPress={() => Alert.alert('This is a PrayerLineSvgIcon')}>
                  <PrayerLineDustSvgIcon />
                </IconWrapp>
              ),
              headerTintColor: Colors.white,
              headerStyle: {
                backgroundColor: Colors.rodeoDust,
                shadowColor: 'transparent',
                shadowRadius: 0,
              },
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="AuthStack"
            component={AuthStackNavigator}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
