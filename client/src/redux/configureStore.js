import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initialState from './reducers/initialState';
import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, initialState, applyMiddleware(thunk));
export const persistor = persistStore(store);
