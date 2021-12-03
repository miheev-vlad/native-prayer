import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IColumnsState {
  loading: boolean;
  error: any;
  currentColumn?: IColumn;
  columnObjects: any;
  columnIds: number[];
}

export interface IColumn {
  id: number;
  description: string;
  title: string;
  userId: number;
}

export interface ResponsePayload {
  result: number[];
  entities: any;
}

export interface RequestAuthPayload {
  token: string;
}

export interface RequestSetCuurentColumnTitle {
  title: string;
  id: number;
}

export interface RequestCreateColumnPayload {
  title: string;
  description: string;
}

export interface RequestUpdateColumnPayload {
  title: string;
  description: string;
  id: number;
}

export interface RequestGetColumnByIdPayload {
  id: number;
}

export interface RequestRemoveColumnPayload {
  id: number;
}

export interface ResponseCreateColumnPayload {
  entities: any;
  result: number;
}

export interface RequestCreatePrayerPayload {
  id: number;
  description: string;
  title: string;
  checked: boolean;
}

export interface ResponseGetColumnByIdPayload {
  entities: any;
  result: number;
}

const initialState: IColumnsState = {
  loading: false,
  error: undefined,
  columnObjects: {},
  columnIds: [],
};

const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    setColumns: (state, action: PayloadAction<ResponsePayload>) => {
      state.loading = false;
      state.columnIds = action.payload.result;
      state.columnObjects = action.payload.entities.columns;
    },
    getColumns: (state, action: PayloadAction<RequestAuthPayload>) => {
      state.loading = true;
      action.payload;
    },
    columnsError: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
    createColumn: (
      state,
      action: PayloadAction<RequestCreateColumnPayload & RequestAuthPayload>,
    ) => {
      state.loading = true;
      action.payload;
    },
    addColumn: (state, action: PayloadAction<ResponseCreateColumnPayload>) => {
      state.loading = false;
      state.columnIds.push(action.payload.result);
      state.columnObjects[action.payload.result] =
        action.payload.entities.column[action.payload.result];
    },
    getColumnById: (
      state,
      action: PayloadAction<RequestGetColumnByIdPayload & RequestAuthPayload>,
    ) => {
      state.loading = true;
      action.payload;
    },
    setCurrentColumn: (
      state,
      action: PayloadAction<ResponseGetColumnByIdPayload>,
    ) => {
      state.loading = false;
      state.currentColumn =
        action.payload.entities.column[action.payload.result];
    },
    removeColumn: (
      state,
      action: PayloadAction<RequestRemoveColumnPayload & RequestAuthPayload>,
    ) => {
      state.loading = true;
      action.payload;
      delete state.columnObjects[action.payload.id];
      state.columnIds.splice(state.columnIds.indexOf(action.payload.id), 1);
    },
    setLoading: (state) => {
      state.loading = false;
    },
    updateColumn: (
      state,
      action: PayloadAction<RequestUpdateColumnPayload & RequestAuthPayload>,
    ) => {
      state.loading = true;
      action.payload;
    },
    updateCurrentColumn: (
      state,
      action: PayloadAction<ResponseGetColumnByIdPayload>,
    ) => {
      state.loading = false;
      state.columnObjects[action.payload.result] =
        action.payload.entities.column[action.payload.result];
    },
    createPrayer: (
      state,
      action: PayloadAction<RequestCreatePrayerPayload & RequestAuthPayload>,
    ) => {
      state.loading = true;
      action.payload;
    },
    cleareCurrentColumn: (state) => {
      state.currentColumn = undefined;
    },
  },
});

export const {
  setColumns,
  getColumns,
  columnsError,
  createColumn,
  addColumn,
  getColumnById,
  setCurrentColumn,
  removeColumn,
  setLoading,
  updateColumn,
  createPrayer,
  cleareCurrentColumn,
  updateCurrentColumn,
} = columnSlice.actions;

export default columnSlice.reducer;
