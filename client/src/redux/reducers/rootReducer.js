import { combineReducers } from 'redux';
import authReducer from './authReducer';
import messageReducer from './messageReducer';
import userInfoReducer from './userInfoReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  users: userInfoReducer,
});

export default rootReducer;
