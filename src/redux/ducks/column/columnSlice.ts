import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  columns: [
    { description: '', id: 2682, title: 'BACKLOG' },
    { description: '', id: 2683, title: 'TODO' },
    { description: '', id: 2684, title: 'IN PROGRESS' },
    { description: '', id: 2685, title: 'DONE' },
  ],
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

export const { setColumns } = columnSlice.actions;

export default columnSlice.reducer;
