import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import initialState from './reducers/initialState';
import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  blacklist: [],
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, initialState, applyMiddleware(thunk));
export const persistor = persistStore(store);
