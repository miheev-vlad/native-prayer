import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IAuthState {
  token: string;
  isLoading: boolean;
  error: any;
}

export interface RequestLoginPayload {
  email: string;
  password: string;
}

export interface RequestRegisterPayload {
  email: string;
  name: string;
  password: string;
}

export interface ResponseAuthPayload {
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
    login: (state, action: PayloadAction<RequestLoginPayload>) => {
      state.isLoading = true;
      action;
    },
    register: (state, action: PayloadAction<RequestRegisterPayload>) => {
      state.isLoading = true;
      action;
    },
    setAuth: (state, action: PayloadAction<ResponseAuthPayload>) => {
      state.isLoading = false;
      state.token = action.payload.token;
    },
    authFail: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {login, register, setAuth, authFail} = authSlice.actions;

export default authSlice.reducer;
