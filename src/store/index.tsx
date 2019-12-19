import {createStore, applyMiddleware, compose} from 'redux';
import {AsyncStorage} from 'react-native';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {rootReducer} from './ducks';

const persistConfig = {
  key: 'skilopay',
  storage: AsyncStorage,
  whitelist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);
export {store, persistor};
