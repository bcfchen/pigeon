import { combineReducers } from 'redux';
import errorHandlerReducer from './errorHandlerReducer';
import generateFromUrlReducer from './generateFromUrlReducer';
import consumeReducer from './consumeReducer';

const rootReducer = combineReducers({
  errorHandler: errorHandlerReducer,
  generate: generateFromUrlReducer,
  consume: consumeReducer,
});

export default rootReducer;
