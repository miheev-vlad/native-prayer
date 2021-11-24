import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPrayerState {
  prayers: IPrayer[];
}

export interface IPrayer {
  id: number;
  title: string;
  description: string;
  checked: boolean;
}

export interface ResponsePayload {
  prayers: IPrayer[];
}

const initialState: IPrayerState = {
  prayers: [
    {
      description: 'description description description1',
      id: 1,
      title:
        'Prayer item two which is for my family to love God whole heartedly.',
      checked: false,
    },
    {
      description: 'description description description2',
      id: 2,
      title:
        'Prayer item two which is for my family to love God whole heartedly.',
      checked: false,
    },
    {
      description: 'description description description3',
      id: 3,
      title:
        'Prayer item two which is for my family to love God whole heartedly.',
      checked: false,
    },
    {
      description: 'description description description4',
      id: 4,
      title:
        'Prayer item two which is for my family to love God whole heartedly.',
      checked: false,
    },
    {
      description: 'description description description5',
      id: 5,
      title:
        'Prayer item two which is for my family to love God whole heartedly.',
      checked: false,
    },
    {
      description: 'description description description1',
      id: 6,
      title: 'title title title1',
      checked: true,
    },
    {
      description: 'description description description2',
      id: 7,
      title: 'title title title 2',
      checked: true,
    },
    {
      description: 'description description description3',
      id: 8,
      title: 'title title title 3',
      checked: true,
    },
    {
      description: 'description description description4',
      id: 9,
      title: 'title title title 4',
      checked: true,
    },
    {
      description: 'description description description5',
      id: 10,
      title: 'title title title 5',
      checked: true,
    },
  ],
};

const prayerSlice = createSlice({
  name: 'prayers',
  initialState,
  reducers: {
    setPrayer: (state, action: PayloadAction<ResponsePayload>) => {
      state.prayers = action.payload.prayers;
    },
  },
});

export const { setPrayer } = prayerSlice.actions;

export default prayerSlice.reducer;
