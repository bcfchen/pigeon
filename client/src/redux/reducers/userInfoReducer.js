import * as types from '../constants/action-types';
import initialState from './initialState';

export default function userInfoReducer(state = initialState.userInfo, action) {
  let newState;
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      newState = {
        ...state,
        users: action.users,
      };
      break;
    default:
      break;
  }

  return newState || state;
}
