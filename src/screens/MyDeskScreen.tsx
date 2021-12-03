import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
import {
  cleareCurrentColumn,
  getColumns,
} from '../redux/ducks/column/columnSlice';
import { Colors } from '../styles/Colors';
import { ColumnBox, ModalWindow } from '../components';
import { ScreensWrapper } from '../components/containers';

export const MyDeskScreen: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColumns({ token }));
    dispatch(cleareCurrentColumn());
  }, [dispatch, token]);

  const loading = useSelector((state: RootState) => state.columns.loading);
  const columnItems = useSelector(
    (state: RootState) => state.columns.columnIds,
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ScreensWrapper>
        <ModalWindow />
        {loading && <ActivityIndicator size="large" color={Colors.starDust} />}
        {!loading &&
          columnItems.map((item: number, index: number) => (
            <ColumnBox key={index} item={item} />
          ))}
      </ScreensWrapper>
    </ScrollView>
  );
};
