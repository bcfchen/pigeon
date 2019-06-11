import * as types from '../constants/action-types';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  let newState;
  switch (action.type) {
    case types.CREDENTIALS_UPDATED:
      newState = {
        ...state,
        email: action.email,
        password: action.password,
      };
      break;
    case types.LOGIN_SUCCESS:
      newState = {
        ...state,
        userInfo: action.userInfo,
      };
      break;
    default:
      break;
  }

  return newState || state;
}
