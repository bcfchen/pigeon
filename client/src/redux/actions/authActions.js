import login from '../../api/authenticationApi';
import * as types from '../constants/action-types';

export const loginSuccess = userInfo => ({
  type: types.LOGIN_SUCCESS,
  userInfo,
});

export const loginActionCreator = (email, password) => (async (dispatch) => {
  const userInfo = await login(email, password);
  dispatch(loginSuccess(userInfo));
});
