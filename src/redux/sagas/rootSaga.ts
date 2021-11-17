import {takeLatest} from 'redux-saga/effects';
import {handleLoginUser} from './handlers/login';
import {login} from '../ducks/authSlice';

export function* watcherSaga() {
  yield takeLatest(login.type, handleLoginUser);
}
