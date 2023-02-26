import { createSlice } from '@reduxjs/toolkit';
import {
  Currency,
  CurrecncyStateType,
  CurrecncySliceReducers,
  CurrencyHistoryPayloadDataType,
  CurrencyHistoryStatisticsType,
  CurrencyHistoryItemType,
} from 'entities/currency/lib';

import { formatDateForHistoryTable } from '../lib';

export const currencySlice = createSlice<
  CurrecncyStateType,
  CurrecncySliceReducers
>({
  name: 'currency',
  initialState: {
    data: [],
    currencyHistory: [],
    error: null,
    loading: false,
  },
  reducers: {
    getCurrencyRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getCurrencyHistoryRequest: (state) => {
      state.loading = false;
      state.error = null;
    },
    getCurrencyHistorySuccess: (state, action) => {
      state.loading = false;
      const fromCurrency = state.data.at(-1)?.to;

      if (fromCurrency) {
        state.currencyHistory = Object.entries(action.payload).map(
          ([key, value]: [string, { [key: string]: string }]) => ({
            date: formatDateForHistoryTable(key),
            rate: value[fromCurrency],
          }),
          []
        );
      }
    },
    getCurrencySuccess: (state, action) => {
      state.data.push(action.payload);
      state.loading = false;
    },
    getCurrencyError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteCurrency: (state, action) => {
      state.data = state.data.filter((currency: Currency) => false);
    },
  },
});

export const exchangeRateSelector = (state: any): Currency[] =>
  state.currency.data;

export const lastExchangeRateSelector = (state: any): Currency =>
  state.currency.data.at(-1);

export const currencyLoadingSelector = (state: any): boolean =>
  state.currency.loading;

export const currencyHistoryRatesSelector = (
  state: any
): CurrencyHistoryPayloadDataType => state.currency.currencyHistory;

export const currencyHistoryStatisticsSelector = (
  state: any
): CurrencyHistoryStatisticsType => ({
  highest: Math.max(
    ...state.currency.currencyHistory.map(
      (item: CurrencyHistoryItemType) => +item.rate
    )
  ),
  lowest: Math.min(
    ...state.currency.currencyHistory.map(
      (item: CurrencyHistoryItemType) => +item.rate
    )
  ),
  average: (
    state.currency.currencyHistory.reduce(
      (sum: number, item: CurrencyHistoryItemType): number => {
        sum += +item.rate;

        return sum;
      },
      0
    ) / state.currency.currencyHistory.length
  ).toFixed(6),
});

export const {
  getCurrencyHistoryRequest,
  getCurrencyHistorySuccess,
  getCurrencyRequest,
  getCurrencySuccess,
  getCurrencyError,
  deleteCurrency,
} = currencySlice.actions;

export const { reducer: currencyReducer } = currencySlice;
