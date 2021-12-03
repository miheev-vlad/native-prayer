import _ from 'lodash';
import { createSelector } from 'reselect';
import { RootState } from '../../configureStore';
import { IUserState } from './userSlice';

const user = (state: RootState) => state.user;

function nameSelector() {
  return createSelector(user, (user: IUserState) => user.name);
}

export default nameSelector;
