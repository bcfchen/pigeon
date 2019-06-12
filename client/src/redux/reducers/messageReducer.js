import * as types from '../constants/action-types';
import initialState from './initialState';

export default function messageReducer(state = initialState.message, action) {
  let newState;
  switch (action.type) {
    case types.ADD_MESSAGE_SUCCESS:
      newState = {
        ...state,
        messages: [...state.messages, action.message],
      };
      break;
    case types.LOAD_MESSAGES_SUCCESS:
      newState = {
        ...state,
        messages: action.messages,
      };
      break;
    default:
      break;
  }

  return newState || state;
}
