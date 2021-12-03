import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthParamsType } from '../../../api/instance';
import { ResponseComentEntitiesPayload } from '../coments/commentsSlice';

export interface IPrayerState {
  loading: boolean;
  updateLoading: boolean;
  currentPrayer?: IPrayer;
  error?: any;
  updatePrayerId?: number;
  prayerObjects: any;
  prayerIds: number[];
  subscribed: IPrayer[];
}

export interface IPrayer {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId?: number;
  commentsIds?: any[];
}

export interface RequestAuthPayload {
  token: string;
}

export interface ResponseAddPrayerPayload {
  id: number;
  title: string;
  description: string;
  checked: boolean;
}

export interface ResponsePrayerPayload {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId?: number;
  commentsIds?: any[];
}

export interface ResponsePrayerEntitiesPayload {
  entities: any;
  result: number;
}

export interface RequestUpdaePrayerPayload {
  id: number;
  title: string;
  description: string;
  checked: boolean;
}

export interface RequestAddCommentPayload {
  id: number;
  body: string;
}

export interface RequestRemovePrayerPayload {
  id: number;
}

export interface RequestGetPrayerByIdPayload {
  id: number;
}

export interface ResponsePayload {
  entities: any;
  result: number[];
}

const initialState: IPrayerState = {
  loading: false,
  updateLoading: false,
  prayerObjects: {},
  prayerIds: [],
  subscribed: [],
};

const prayerSlice = createSlice({
  name: 'prayers',
  initialState,
  reducers: {
    setPrayers: (state, action: PayloadAction<ResponsePayload>) => {
      state.loading = false;
      state.prayerIds = action.payload.result;
      state.prayerObjects = action.payload.entities.prayers;
    },
    addPrayer: (
      state,
      action: PayloadAction<ResponsePrayerEntitiesPayload>,
    ) => {
      state.loading = false;
      state.prayerIds.push(action.payload.result);
      if (state.prayerObjects) {
        state.prayerObjects[action.payload.result] =
          action.payload.entities.prayer[action.payload.result];
      } else {
        state.prayerObjects = action.payload.entities.prayer;
      }
    },
    getAllPrayers: (state, action: PayloadAction<RequestAuthPayload>) => {
      state.loading = true;
      action.payload;
    },
    upDatePrayer: (
      state,
      action: PayloadAction<RequestUpdaePrayerPayload & RequestAuthPayload>,
    ) => {
      state.updateLoading = true;
      state.updatePrayerId = action.payload.id;
      action.payload;
    },
    updatePrayersInStore: (
      state,
      action: PayloadAction<ResponsePrayerEntitiesPayload>,
    ) => {
      state.updateLoading = false;
      state.updatePrayerId = undefined;
      state.prayerObjects[action.payload.result] =
        action.payload.entities.prayer[action.payload.result];
    },
    removePrayer: (
      state,
      action: PayloadAction<RequestRemovePrayerPayload & AuthParamsType>,
    ) => {
      state.updateLoading = true;
      action.payload;
      delete state.prayerObjects[action.payload.id];
      state.prayerIds.splice(state.prayerIds.indexOf(action.payload.id), 1);
    },
    getPrayerById: (
      state,
      action: PayloadAction<RequestGetPrayerByIdPayload & AuthParamsType>,
    ) => {
      state.loading = true;
      action.payload;
    },
    setCurrentPrayer: (
      state,
      action: PayloadAction<ResponsePrayerEntitiesPayload>,
    ) => {
      state.loading = false;
      state.currentPrayer =
        action.payload.entities.prayer[action.payload.result];
    },
    addComment: (
      state,
      action: PayloadAction<RequestAddCommentPayload & AuthParamsType>,
    ) => {
      state.loading = true;
      action.payload;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.updatePrayerId = undefined;
      state.updateLoading = false;
      state.loading = false;
      state.error = action.payload;
    },
    setLoading: (state) => {
      state.loading = false;
      state.updateLoading = false;
    },
    cleareCurrentPrayer: (state) => {
      state.currentPrayer = undefined;
    },
    updateCurrentPrayers: (state, action: PayloadAction<{ id: number }>) => {
      state.updateLoading = false;
      state.updatePrayerId = undefined;
      state.currentPrayer!.commentsIds =
        state.currentPrayer?.commentsIds?.filter(
          (id) => id !== action.payload.id,
        );
    },
    addCommentToCurrentPrayers: (
      state,
      action: PayloadAction<ResponseComentEntitiesPayload>,
    ) => {
      if (state.currentPrayer!.commentsIds) {
        state.currentPrayer!.commentsIds!.push(action.payload.result);
      } else {
        state.currentPrayer!.commentsIds = [action.payload.result];
      }
    },
  },
});

export const {
  setPrayers,
  getAllPrayers,
  addPrayer,
  upDatePrayer,
  updatePrayersInStore,
  removePrayer,
  getPrayerById,
  setCurrentPrayer,
  addComment,
  setError,
  setLoading,
  cleareCurrentPrayer,
  updateCurrentPrayers,
  addCommentToCurrentPrayers,
} = prayerSlice.actions;

export default prayerSlice.reducer;
