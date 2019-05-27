import { generateFromUrl } from '../../api/sakaarApi/sakaarApi';
import * as types from '../constants/action-types';

export const generateFromUrlSuccess = terms => ({
  type: types.GENERATE_TERMS_SUCCESS,
  terms,
});

export const generateFromUrlAction = (contentUrl) => {
  return async (dispatch) => {
    const terms = await generateFromUrl(contentUrl, dispatch);
    dispatch(generateFromUrlSuccess(terms));
  };
};
