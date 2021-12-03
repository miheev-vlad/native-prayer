import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import { normalize, schema } from 'normalizr';
import { RequestAuthPayload } from '../../ducks/column/columnSlice';
import {
  RequestRemoveCommentPayload,
  RequestUpdateCommentPayload,
  setComments,
  setError,
  setLoading,
  updateComment,
} from '../../ducks/comments/commentsSlice';
import {
  requestGetAllComments,
  requestRemoveComment,
  requestUpdateComment,
} from '../requests/comments';

export function* handleGetAllComments(
  action: PayloadAction<RequestAuthPayload>,
): any {
  const { token } = action.payload;

  try {
    const response = yield call(requestGetAllComments, { token });
    const { data } = response;
    const comment = new schema.Entity(
      'comments',
      {},
      {
        idAttribute: 'id',
      },
    );
    const commentsListSchema = [comment];
    const normalizedData = normalize(data, commentsListSchema);
    yield put(setComments(normalizedData));
  } catch (error) {
    yield put(setError('Some error happened...'));
  }
}

export function* handleRemoveComment(
  action: PayloadAction<RequestAuthPayload & RequestRemoveCommentPayload>,
): any {
  const { token, id } = action.payload;

  try {
    yield call(requestRemoveComment, { token, id });
    yield put(setLoading());
  } catch (error) {
    yield put(setError('Some error happened...'));
  }
}

export function* handleUpdateComment(
  action: PayloadAction<RequestAuthPayload & RequestUpdateCommentPayload>,
): any {
  const { token, id, body } = action.payload;

  try {
    const response = yield call(requestUpdateComment, { token, id, body });
    const { data } = response;
    const comment = new schema.Entity('comment');
    const normalizedData = normalize(data, comment);
    yield put(updateComment(normalizedData));
  } catch (error) {
    yield put(setError('Some error happened...'));
  }
}
