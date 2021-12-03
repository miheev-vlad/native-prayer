import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import { normalize, schema } from 'normalizr';
import { RequestAuthPayload } from '../../ducks/column/columnSlice';
import { addComment } from '../../ducks/comments/commentsSlice';
import {
  addCommentToCurrentPrayers,
  RequestAddCommentPayload,
  RequestGetPrayerByIdPayload,
  RequestRemovePrayerPayload,
  RequestUpdatePrayerPayload,
  setCurrentPrayer,
  setError,
  setLoading,
  setPrayers,
  updatePrayersInStore,
} from '../../ducks/prayer/prayerSlice';
import {
  requestAddComment,
  requestGetAllPrayers,
  requestGetPrayerById,
  requestRemovePrayer,
  requestUpdatePrayer,
} from '../requests/prayers';

export function* handleGetAllPrayers(
  action: PayloadAction<RequestAuthPayload>,
): any {
  const { token } = action.payload;

  try {
    const response = yield call(requestGetAllPrayers, { token });
    const { data } = response;
    const prayer = new schema.Entity(
      'prayers',
      {},
      {
        idAttribute: 'id',
      },
    );
    const prayersListSchema = [prayer];
    const normalizedData = normalize(data, prayersListSchema);
    yield put(setPrayers(normalizedData));
  } catch (error) {
    yield put(setError('Some error happened...'));
  }
}

export function* handleUpdatePrayer(
  action: PayloadAction<RequestUpdatePrayerPayload & RequestAuthPayload>,
): any {
  const { token, id, title, description, checked } = action.payload;

  try {
    const response = yield call(requestUpdatePrayer, {
      token,
      id,
      title,
      description,
      checked,
    });
    const { data } = response;
    const prayer = new schema.Entity('prayer');
    const normalizedData = normalize(data, prayer);
    yield put(updatePrayersInStore(normalizedData));
  } catch (error) {
    yield put(setError('Some error happened...'));
  }
}

export function* handleRemovePrayer(
  action: PayloadAction<RequestRemovePrayerPayload & RequestAuthPayload>,
): any {
  const { token, id } = action.payload;

  try {
    yield call(requestRemovePrayer, {
      token,
      id,
    });
    yield put(setLoading());
  } catch (error) {
    yield put(setError('Some error happened...'));
  }
}

export function* handleGetPrayerById(
  action: PayloadAction<RequestGetPrayerByIdPayload & RequestAuthPayload>,
): any {
  const { token, id } = action.payload;

  try {
    const response = yield call(requestGetPrayerById, {
      token,
      id,
    });
    const { data } = response;
    const prayer = new schema.Entity('prayer');
    const normalizedData = normalize(data, prayer);
    yield put(setCurrentPrayer(normalizedData));
  } catch (error) {
    yield put(setError('Some error happened...'));
  }
}

export function* handleAddComment(
  action: PayloadAction<RequestAddCommentPayload & RequestAuthPayload>,
): any {
  const { token, id, body } = action.payload;

  try {
    const response = yield call(requestAddComment, {
      token,
      id,
      body,
    });
    const { data } = response;
    const comment = new schema.Entity('comment');
    const normalizedData = normalize(data, comment);
    yield put(addComment(normalizedData));
    yield put(addCommentToCurrentPrayers(normalizedData));
    yield put(setLoading());
  } catch (error) {
    yield put(setError('Some error happened...'));
  }
}
