import { configureStore } from '@reduxjs/toolkit';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { currencyModel } from 'entities/currency';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = {
  currency: currencyModel.currencySlice.reducer,
};

const reducers = persistCombineReducers(persistConfig, reducer);

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
