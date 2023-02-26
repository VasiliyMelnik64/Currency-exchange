import { configureStore } from '@reduxjs/toolkit';
import { persistCombineReducers, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';

import { currencyModel } from 'entities/currency';
import { rootSaga } from './root-saga';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = {
  currency: currencyModel.currencySlice.reducer,
};

const sagaMiddleware = createSagaMiddleware();

const reducers = persistCombineReducers(persistConfig, reducer);
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
