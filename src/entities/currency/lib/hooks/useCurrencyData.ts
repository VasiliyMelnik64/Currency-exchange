/* eslint-disable camelcase */
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCurrencyRequest,
  deleteCurrency,
  exchangeRateSelector,
  lastExchangeRateSelector,
  PayloadRequestType,
} from '../../model/currency-slice';

import { Currency } from '../types';

type CurrencyData = {
  currency: Currency;
  currencies: Currency[];
  onRequestCurrency: (params: PayloadRequestType) => void;
  onDeleteCurrency: (id: number) => () => void;
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
    (id: any): (() => void) =>
      (): void => {
        dispatch(deleteCurrency(id));
      },
    [dispatch]
  );

  useEffect(() => {
    if (!currencies?.length && !!shouldRequestInitially) {
      onRequestCurrency({ params: {} });
    }
  }, [currencies?.length, onRequestCurrency, shouldRequestInitially]);

  return { currency, currencies, onRequestCurrency, onDeleteCurrency };
};
