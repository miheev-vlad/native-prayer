import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { MainStackParamList } from '../../navigation/Navigator';
import { RootState } from '../../redux/configureStore';
import { StyledText, StyledTouch } from './styles';

export type ColumnBoxType = {
  item: number;
};

type MyDeskScreenProp = StackNavigationProp<MainStackParamList, 'MyDesk'>;

const ColumnBox: React.FC<ColumnBoxType> = ({ item }) => {
  const navigation = useNavigation<MyDeskScreenProp>();
  const column = useSelector(
    (state: RootState) => state.columns.columnObjects[item],
  );

  return (
    <StyledTouch
      onPress={() => {
        navigation.navigate<'Column'>('Column', {
          id: column.id,
          title: column.title,
        });
      }}>
      <StyledText>{column.title}</StyledText>
    </StyledTouch>
  );
};

export default ColumnBox;
