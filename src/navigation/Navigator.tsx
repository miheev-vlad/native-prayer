import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackNavigator } from './navigators/AuthStackNavigator';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../redux/configureStore';
import { MyDeskScreen } from '../screens/MyDeskScreen';
import { Alert } from 'react-native';
import { SettingsSvgIcon } from '../../assets/icons/SettingsSvgIcon';
import { Colors } from '../styles/Colors';
import { DetailPrayerScreen } from '../screens/DetailPrayerScreen';
import { SmallAddSvgIcon } from '../../assets/icons/SmallAddSvgIcon';
import { PrayerLineDustSvgIcon } from '../../assets/icons/PrayerLineDustSvgIcon';
import { toggleMenu, toggleModal } from '../redux/ducks/modal/modalSlice';
import { cleareCurrentColumn } from '../redux/ducks/column/columnSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BackSvgIcon } from '../../assets/icons/BackSvgIcon';
import { cleareCurrentPrayer } from '../redux/ducks/prayer/prayerSlice';
import { BackHomeSvgIcon } from '../../assets/icons/BackHomeSvgIcon';
import { TabStack } from './navigators/TabStack';
import { IconWrapper } from '../components/containers';

export type MainStackParamList = {
  MyDesk: undefined;
  Column: {
    id: number;
    title: string;
  };
  Detail: {
    id: number;
  };
};

const Stack = createStackNavigator();

export const Navigator: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.auth.token);
  const currentColumn = useSelector(
    (state: RootState) => state.columns.currentColumn,
  );
  const dispatch = useDispatch();

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
                <IconWrapper
                  onPress={() => {
                    dispatch(toggleModal({ isShowModal: true }));
                  }}>
                  <SmallAddSvgIcon />
                </IconWrapper>
              ),
            }}
          />
          <Stack.Screen
            name="Column"
            options={({ route, navigation }: any) => ({
              title: currentColumn?.title || route.params.title,
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
                <IconWrapper
                  onPress={() => {
                    dispatch(toggleMenu({ isShowMenu: true }));
                  }}>
                  <SettingsSvgIcon />
                </IconWrapper>
              ),
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    dispatch(cleareCurrentColumn());
                    navigation.navigate('MyDesk');
                  }}
                  style={{ marginLeft: 15 }}>
                  <BackHomeSvgIcon />
                </TouchableOpacity>
              ),
            })}>
            {TabStack}
          </Stack.Screen>

          <Stack.Screen
            name="Detail"
            component={DetailPrayerScreen}
            options={({ navigation }: any) => ({
              title: '',
              headerRight: () => (
                <IconWrapper
                  onPress={() => Alert.alert('This is a PrayerLineSvgIcon')}>
                  <PrayerLineDustSvgIcon />
                </IconWrapper>
              ),
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    dispatch(cleareCurrentPrayer());
                    navigation.goBack();
                  }}
                  style={{ marginLeft: 15 }}>
                  <BackSvgIcon />
                </TouchableOpacity>
              ),
              headerTintColor: Colors.white,
              headerStyle: {
                backgroundColor: Colors.rodeoDust,
                shadowColor: 'transparent',
                shadowRadius: 0,
              },
            })}
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
