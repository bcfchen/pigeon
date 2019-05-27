import * as types from '../constants/action-types';

export const addErrorMessage = errorMessage => ({
  type: types.ERROR_MESSAGE_ADDED,
  errorMessage,
});

export const dismissErrorMessage = () => ({ type: types.ERROR_MESSAGE_DISMISSED });
