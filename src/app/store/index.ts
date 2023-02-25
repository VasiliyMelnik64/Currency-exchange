import { configureStore } from '@reduxjs/toolkit';

import { currencyModel } from 'entities/currency';

export const store = configureStore({
  reducer: {
    currency: currencyModel.currencySlice.reducer,
  },
});
