import {call, put} from 'redux-saga/effects';
import {loginFail, setAuth} from '../../ducks/authSlice';
import {requestLoginUser} from '../requests/login';

export function* handleLoginUser(): any {
  try {
    const response = yield call(requestLoginUser);
    const {data} = response;
    yield put(setAuth({...data}));
  } catch (error) {
    console.log(error);
    yield put(loginFail('Some error happened...'));
  }
}
