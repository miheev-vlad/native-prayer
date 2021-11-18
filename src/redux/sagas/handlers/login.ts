import {PayloadAction} from '@reduxjs/toolkit';
import {call, put} from 'redux-saga/effects';
import {
  authFail,
  RequestLoginPayload,
  setAuth,
} from '../../ducks/auth/authSlice';
import {setUser} from '../../ducks/user/userSlice';
import {requestLoginUser} from '../requests/login';

export function* handleLoginUser(
  action: PayloadAction<RequestLoginPayload>,
): any {
  const {email, password} = action.payload;

  try {
    const response = yield call(requestLoginUser, {email, password});
    const {data} = response;
    if (data.name && data.name === 'EntityNotFound') {
      yield put(authFail('Incorrect login data...'));
    } else {
      yield put(setAuth({...data}));
      yield put(setUser({...data}));
    }
  } catch (error) {
    console.log(error);
    yield put(authFail('Some error happened...'));
  }
}
