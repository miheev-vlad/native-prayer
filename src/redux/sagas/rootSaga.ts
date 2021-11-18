import {takeLatest} from 'redux-saga/effects';
import {handleLoginUser} from './handlers/login';
import {login, register} from '../ducks/auth/authSlice';
import {handleRegisterUser} from './handlers/register';

export function* watchAuthSaga() {
  yield takeLatest(login.type, handleLoginUser);
  yield takeLatest(register.type, handleRegisterUser);
}
