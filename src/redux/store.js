import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

const rootReducer = combineReducers({});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  return createStore(rootReducer);
};

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
