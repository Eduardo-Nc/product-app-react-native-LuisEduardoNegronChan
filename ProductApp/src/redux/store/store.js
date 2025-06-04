import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import { thunk } from 'redux-thunk'

import { createStore, applyMiddleware } from 'redux'
import appReducer from '../reducers'

const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, appReducer)

export const store = createStore(persistedReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store)