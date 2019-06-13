import * as types from '../constants/action-types';
import initialState from './initialState';

export default function messageReducer(state = initialState.message, action) {
  let newState;
  switch (action.type) {
    case types.ADD_PENDING_MESSAGE:
      newState = {
        ...state,
        messages: [...state.messages, action.message],
      };
      break;
    case types.ADD_MESSAGE_SUCCESS:
      const clonedMessages = state.messages.slice();
      const pendingMessage = clonedMessages.slice().find(message => message.isPending);
      pendingMessage.isPending = false;
      newState = {
        ...state,
        messages: clonedMessages,
      };
      break;
    case types.LOAD_MESSAGES_SUCCESS:
      newState = {
        ...state,
        messages: state.messages.concat(action.messages),
      };
      break;
    default:
      break;
  }

  return newState || state;
}
