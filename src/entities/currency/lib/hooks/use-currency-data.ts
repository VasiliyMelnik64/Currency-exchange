/* eslint-disable camelcase */
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCurrencyRequest,
  getCurrencyHistoryRequest,
  deleteCurrency,
  exchangeRateSelector,
  lastExchangeRateSelector,
} from '../../model/currency-slice';

import {
  Currency,
  PayloadRequestType,
  CurrencyHistoryParamsType,
} from '../types';

type CurrencyData = {
  currency?: Currency;
  currencies: Currency[];
  onRequestCurrency: (params: PayloadRequestType) => void;
  onDeleteCurrency: (id: string) => () => void;
  onRequestCurrencyHistory: (params: CurrencyHistoryParamsType) => void;
};

export const useCurrencyData = (
  shouldRequestInitially?: boolean
): CurrencyData => {
  const dispatch = useDispatch();
  const currencies = useSelector(exchangeRateSelector);
  const currency = useSelector(lastExchangeRateSelector);

  const onRequestCurrency = useCallback(
    (params: PayloadRequestType): void => {
      dispatch(getCurrencyRequest(params));
    },
    [dispatch]
  );

  const onDeleteCurrency = useCallback(
    (id: string): (() => void) =>
      (): void => {
        dispatch(deleteCurrency(id));
      },
    [dispatch]
  );

  const onRequestCurrencyHistory = useCallback(
    (params: CurrencyHistoryParamsType): void => {
      dispatch(getCurrencyHistoryRequest(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!currencies?.length && !!shouldRequestInitially) {
      onRequestCurrency({ params: {} });
    }
  }, [currencies?.length, onRequestCurrency, shouldRequestInitially]);

  return {
    currency,
    currencies,
    onRequestCurrency,
    onRequestCurrencyHistory,
    onDeleteCurrency,
  };
};
