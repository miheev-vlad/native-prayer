import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from './sagas/rootSaga';
import authReducer from './ducks/authSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof reducer>;

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

export default store;
