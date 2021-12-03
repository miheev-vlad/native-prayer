import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import { normalize, schema } from 'normalizr';
import {
  addColumn,
  columnsError,
  RequestAuthPayload,
  RequestCreateColumnPayload,
  RequestCreatePrayerPayload,
  RequestGetColumnByIdPayload,
  RequestRemoveColumnPayload,
  RequestUpdateColumnPayload,
  setColumns,
  setCurrentColumn,
  setLoading,
  updateCurrentColumn,
} from '../../ducks/column/columnSlice';
import { addPrayer } from '../../ducks/prayer/prayerSlice';
import {
  requestCreateColumn,
  requestCreatePrayer,
  requestGetAllColumns,
  requestGetColumnById,
  requestRemoveColumn,
  requestUpdateColumn,
} from '../requests/columns';

export function* handleGetAllColumns(
  action: PayloadAction<RequestAuthPayload>,
): any {
  const { token } = action.payload;

  try {
    const response = yield call(requestGetAllColumns, { token });
    const { data } = response;
    const column = new schema.Entity(
      'columns',
      {},
      {
        idAttribute: 'id',
      },
    );
    const columnsListSchema = [column];
    const normalizedData = normalize(data, columnsListSchema);
    yield put(setColumns(normalizedData));
  } catch (error) {
    yield put(columnsError('Some error happened...'));
  }
}

export function* handleCreateColumns(
  action: PayloadAction<RequestCreateColumnPayload & RequestAuthPayload>,
): any {
  const { token, title, description } = action.payload;

  try {
    const response = yield call(requestCreateColumn, {
      token,
      title,
      description,
    });
    const { data } = response;
    const column = new schema.Entity('column');
    const normalizedData = normalize(data, column);
    yield put(addColumn(normalizedData));
  } catch (error) {
    yield put(columnsError('Some error happened...'));
  }
}

export function* handleGetColumnById(
  action: PayloadAction<RequestGetColumnByIdPayload & RequestAuthPayload>,
): any {
  const { token, id } = action.payload;

  try {
    const response = yield call(requestGetColumnById, { token, id });
    const { data } = response;
    const column = new schema.Entity('column');
    const normalizedData = normalize(data, column);
    yield put(setCurrentColumn(normalizedData));
  } catch (error) {
    yield put(columnsError('Some error happened...'));
  }
}

export function* handleRemoveColumn(
  action: PayloadAction<RequestRemoveColumnPayload & RequestAuthPayload>,
): any {
  const { token, id } = action.payload;

  try {
    yield call(requestRemoveColumn, { token, id });
    yield put(setLoading());
  } catch (error) {
    yield put(columnsError('Some error happened...'));
  }
}

export function* handleUpdateColumn(
  action: PayloadAction<RequestUpdateColumnPayload & RequestAuthPayload>,
): any {
  const { token, id, title, description } = action.payload;

  try {
    const response = yield call(requestUpdateColumn, {
      token,
      id,
      title,
      description,
    });
    const { data } = response;
    const column = new schema.Entity('column');
    const normalizedData = normalize(data, column);
    yield put(setCurrentColumn(normalizedData));
    yield put(updateCurrentColumn(normalizedData));
  } catch (error) {
    yield put(columnsError('Some error happened...'));
  }
}

export function* handleCreatePrayer(
  action: PayloadAction<RequestCreatePrayerPayload & RequestAuthPayload>,
): any {
  const { token, id, title, description, checked } = action.payload;

  try {
    const response = yield call(requestCreatePrayer, {
      token,
      id,
      title,
      description,
      checked,
    });
    const { data } = response;
    const prayer = new schema.Entity('prayer');
    const normalizedData = normalize(data, prayer);
    yield put(addPrayer(normalizedData));
    yield put(setLoading());
  } catch (error) {
    yield put(columnsError('Some error happened...'));
  }
}
