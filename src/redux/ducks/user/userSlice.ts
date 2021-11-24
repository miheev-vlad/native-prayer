import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
  id: number;
  name: string;
  email: string;
}

export interface ResponseUserPayload {
  id: number;
  name: string;
  email: string;
}

const initialState: IUserState = {
  id: 0,
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<ResponseUserPayload>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
