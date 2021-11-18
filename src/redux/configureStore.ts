import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {watchAuthSaga} from './sagas/rootSaga';
import authReducer from './ducks/auth/authSlice';
import userReducer from './ducks/user/userSlice';
import columnsReducer from './ducks/column/columnSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  columns: columnsReducer,
});

export type RootState = ReturnType<typeof reducer>;

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(watchAuthSaga);

export default store;
