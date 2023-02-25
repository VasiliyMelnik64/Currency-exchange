import { createSlice } from '@reduxjs/toolkit';
import { Currency } from 'entities/currency/lib';

export type PayloadRequestType = {
  params: {
    [key: string]: string | number;
  };
};
export type PayloadSuccessType = Currency;
export type PayloadErrorType = unknown | Error | null;
export type PayloadDeleteType = number;

type StateType = {
  data: Currency[];
  error: PayloadErrorType;
  loading: boolean;
};

type ActionSuccessType = {
  type: string;
  payload: Currency;
};

export type ActionErrorType = {
  type: string;
  payload: PayloadErrorType;
};

type ActionRequestType = {
  type: string;
  payload: PayloadRequestType;
};

type ActionDeleteType = {
  type: string;
  payload: string | number;
};

export type ActionType =
  | ActionSuccessType
  | ActionErrorType
  | ActionRequestType;

type SliceReducers = {
  getCurrencyRequest: (state: StateType, action: ActionRequestType) => void;
  getCurrencySuccess: (state: StateType, action: ActionSuccessType) => void;
  getCurrencyError: (state: StateType, action: ActionErrorType) => void;
  deleteCurrency: (state: StateType, action: ActionDeleteType) => void;
};

export const currencySlice = createSlice<StateType, SliceReducers>({
  name: 'currency',
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {
    getCurrencyRequest: (state) => {
      state.loading = true;
      state.error = null;
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

export const {
  getCurrencyRequest,
  getCurrencySuccess,
  getCurrencyError,
  deleteCurrency,
} = currencySlice.actions;

export const { reducer: currencyReducer } = currencySlice;
