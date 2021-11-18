import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IColumnsState {
  columns: IColumn[];
}

export interface IColumn {
  id: number;
  description: string;
  title: string;
}

export interface ResponsePayload {
  columns: IColumn[];
}

const initialState: IColumnsState = {
  columns: [],
};

const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    setColumns: (state, action: PayloadAction<ResponsePayload>) => {
      state.columns = action.payload.columns;
    },
  },
});

export const {setColumns} = columnSlice.actions;

export default columnSlice.reducer;
