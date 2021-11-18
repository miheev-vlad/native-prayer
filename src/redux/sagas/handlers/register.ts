import {PayloadAction} from '@reduxjs/toolkit';
import {call, put} from 'redux-saga/effects';
import {
  authFail,
  RequestRegisterPayload,
  setAuth,
} from '../../ducks/auth/authSlice';
import {setColumns} from '../../ducks/column/columnSlice';
import {setUser} from '../../ducks/user/userSlice';
import {requestRegisterUser} from '../requests/register';

export function* handleRegisterUser(
  action: PayloadAction<RequestRegisterPayload>,
): any {
  const {email, name, password} = action.payload;

  try {
    const response = yield call(requestRegisterUser, {email, name, password});
    const {data} = response;
    yield put(setAuth({...data}));
    yield put(setUser({...data}));
    yield put(setColumns({...data}));
  } catch (error) {
    console.log(error);
    yield put(authFail('Some error happened...'));
  }
}
