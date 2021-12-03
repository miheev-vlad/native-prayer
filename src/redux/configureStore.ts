import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watchAuthSaga } from './sagas/rootSaga';
import authReducer from './ducks/auth/authSlice';
import userReducer from './ducks/user/userSlice';
import columnsReducer from './ducks/column/columnSlice';
import prayersReducer from './ducks/prayer/prayerSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  columns: columnsReducer,
  prayers: prayersReducer,
});

export type RootState = ReturnType<typeof reducer>;

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(watchAuthSaga);

export default store;
