import * as types from '../constants/action-types';
import initialState from './initialState';

export default function consumeReducer(state = initialState.consume, action) {
  let newState;
  switch (action.type) {
    case types.CONSUME_TERMS_SUCCESS:
      newState = {
        ...state,
        consumedTerms: action.terms,
      };
      break;
    default:
      break;
  }

  return newState || state;
}
