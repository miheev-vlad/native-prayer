import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { MainStackParamList } from '../../navigation/Navigator';
import { StyledText, StyledTouch } from './styles';

export type ColumnBoxType = {
  title: string;
  id: number;
};

type MyDeskScreenProp = StackNavigationProp<MainStackParamList, 'MyDesk'>;

export const ColumnBox: React.FC<ColumnBoxType> = ({ title, id }) => {
  const navigation = useNavigation<MyDeskScreenProp>();
  return (
    <StyledTouch
      onPress={() =>
        navigation.navigate<'Column'>('Column', {
          id,
          title,
        })
      }>
      <StyledText>{title}</StyledText>
    </StyledTouch>
  );
};
