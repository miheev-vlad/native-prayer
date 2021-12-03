import { takeLatest } from 'redux-saga/effects';
import { handleLoginUser } from './handlers/login';
import { login, register } from '../ducks/auth/authSlice';
import { handleRegisterUser } from './handlers/register';
import {
  createColumn,
  createPrayer,
  getColumnById,
  getColumns,
  removeColumn,
  updateColumn,
} from '../ducks/column/columnSlice';
import {
  handleCreateColumns,
  handleCreatePrayer,
  handleGetAllColumns,
  handleGetColumnById,
  handleRemoveColumn,
  handleUpdateColumn,
} from './handlers/columns';
import {
  addComment,
  getAllPrayers,
  getPrayerById,
  removePrayer,
  upDatePrayer,
} from '../ducks/prayer/prayerSlice';
import {
  handleAddComment,
  handleGetAllPrayers,
  handleGetPrayerById,
  handleRemovePrayer,
  handleUpdatePrayer,
} from './handlers/prayers';
import {
  getAllComments,
  putComment,
  removeComment,
} from '../ducks/comments/commentsSlice';
import {
  handleGetAllComments,
  handleRemoveComment,
  handleUpdateComment,
} from './handlers/comments';

export function* watchSaga() {
  yield takeLatest(login.type, handleLoginUser);
  yield takeLatest(register.type, handleRegisterUser);
  yield takeLatest(getColumns.type, handleGetAllColumns);
  yield takeLatest(createColumn.type, handleCreateColumns);
  yield takeLatest(getColumnById.type, handleGetColumnById);
  yield takeLatest(removeColumn.type, handleRemoveColumn);
  yield takeLatest(updateColumn.type, handleUpdateColumn);
  yield takeLatest(getAllPrayers.type, handleGetAllPrayers);
  yield takeLatest(createPrayer.type, handleCreatePrayer);
  yield takeLatest(upDatePrayer.type, handleUpdatePrayer);
  yield takeLatest(removePrayer.type, handleRemovePrayer);
  yield takeLatest(getPrayerById.type, handleGetPrayerById);
  yield takeLatest(addComment.type, handleAddComment);
  yield takeLatest(getAllComments.type, handleGetAllComments);
  yield takeLatest(removeComment.type, handleRemoveComment);
  yield takeLatest(putComment.type, handleUpdateComment);
}
