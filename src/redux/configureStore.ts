import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watchSaga } from './sagas/rootSaga';
import authReducer from './ducks/auth/authSlice';
import userReducer from './ducks/user/userSlice';
import columnsReducer from './ducks/column/columnSlice';
import prayersReducer from './ducks/prayer/prayerSlice';
import modalReducer from './ducks/modal/modalSlice';
import commentsReducer from './ducks/comments/commentsSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  columns: columnsReducer,
  prayers: prayersReducer,
  modal: modalReducer,
  comments: commentsReducer,
});

export type RootState = ReturnType<typeof reducer>;

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(watchSaga);

export default store;
