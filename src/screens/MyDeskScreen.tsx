import React from 'react';
import { useSelector } from 'react-redux';
import { ColumnBox } from '../components/ColumnBox';
import { ScreensWrapp } from '../components/ScreensWrapp';
import { RootState } from '../redux/configureStore';

export const MyDeskScreen: React.FC = () => {
  const columns = useSelector((state: RootState) => state.columns.columns);

  return (
    <ScreensWrapp>
      {columns.map((column, index) => (
        <ColumnBox key={index} id={column.id} title={column.title} />
      ))}
    </ScreensWrapp>
  );
};
