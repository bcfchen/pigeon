import { combineReducers } from 'redux';
import errorHandlerReducer from './errorHandlerReducer';
import authReducer from './authReducer';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  errorHandler: errorHandlerReducer,
  auth: authReducer,
  message: messageReducer,
});

export default rootReducer;
