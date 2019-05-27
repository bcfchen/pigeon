import * as types from '../constants/action-types';
import initialState from './initialState';

export default function errorHandlerReducer(state = initialState.errorHandler, action) {
  let newState;
  switch (action.type) {
    case types.ERROR_MESSAGE_ADDED:
      newState = {
        ...state,
        errorMessage: action.errorMessage,
      };
      break;
    case types.ERROR_MESSAGE_DISMISSED:
      newState = {
        ...state,
        errorMessage: undefined,
      };
      break;
    default:
      break;
  }

  return newState || state;
}
