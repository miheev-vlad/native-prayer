import React from 'react';
import styled from 'styled-components/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../styles/Colors';
import { MyPrayersScreen } from '../../screens/MyPrayersScreen';
import { SubscribedScreen } from '../../screens/SubscribedScreen';

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

const Tab = createMaterialTopTabNavigator();

export const TabStack = ({ route }: any) => {
  const { id } = route.params;

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
        initialParams={{ id }}
      />
      <Tab.Screen
        name="Subscribed"
        component={SubscribedScreen}
        options={{
          title: 'Subscribed',
          tabBarBadge: () => (
            <StyledBagsContainer>
              <StyledBagsData>3</StyledBagsData>
            </StyledBagsContainer>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const StyledBagsContainer = styled.View`
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

export const StyledBagsData = styled.Text`
  color: ${Colors.white};
  font-size: 9px;
  line-height: 11px;
  font-family: SFUIText-Regular;
`;
