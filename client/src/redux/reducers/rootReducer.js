import { combineReducers } from 'redux';
import errorHandlerReducer from './errorHandlerReducer';

const rootReducer = combineReducers({
  errorHandler: errorHandlerReducer,
});

export default rootReducer;
