import React from 'react';
import {Text, View} from 'react-native';
import {ScreensWrapp} from '../components/ScreensWrapp';

export const MyDeskScreen: React.FC = () => {
  return (
    <ScreensWrapp>
      <View>
        <Text>My Desk</Text>
      </View>
    </ScreensWrapp>
  );
};
