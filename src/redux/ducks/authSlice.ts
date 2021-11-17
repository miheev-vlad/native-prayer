import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IAuthState {
  token: string;
  isLoading: boolean;
  error: any;
}

export interface LoginPayload {
  token: string;
}

const initialState: IAuthState = {
  token: '',
  isLoading: false,
  error: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isLoading = true;
    },
    setAuth: (state, action: PayloadAction<LoginPayload>) => {
      state.isLoading = false;
      state.token = action.payload.token;
    },
    loginFail: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {login, setAuth, loginFail} = authSlice.actions;

export default authSlice.reducer;
