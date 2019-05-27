import * as types from '../constants/action-types';
import initialState from './initialState';

export default function generateFromUrlReducer(state = initialState.generate, action) {
  let newState;
  switch (action.type) {
    case types.GENERATE_TERMS_SUCCESS:
      newState = {
        ...state,
        generatedTerms: action.terms,
      };
      break;
    default:
      break;
  }

  return newState || state;
}
