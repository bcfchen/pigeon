import { loadAllUsers } from '../../api/userInfoApi';
import * as types from '../constants/action-types';
import User from '../../models/core/User';

export const loadUsersSuccess = users => ({
  type: types.LOAD_USERS_SUCCESS,
  users,
});

export const loadUsersActionCreator = () => async (dispatch) => {
  const userObjs = await loadAllUsers();
  const users = userObjs.map(userObj => (
    new User(userObj)
  ));
  dispatch(loadUsersSuccess(users));
};
