import { AxiosResponse } from 'axios';

import { CurrencyHistoryParamsType } from '../../lib';

export const getExchangeRateFromServer = (
  response: AxiosResponse<any, any>
) => {
  const {
    data: { info, result, query },
  } = response;

  return {
    ...query,
    rate: info.rate,
    reverseRate: +(query.amount / result).toFixed(6),
    date: new Date(),
    result,
  };
};

export const sendExchangeRateParamsToServer = (params: any) => ({ params });

export const getCurrencyHistoryFromServer = (
  response: AxiosResponse<any, any>
) => {
  return response.data.rates;
};

export const sendCurrencyHistoryParamsToServer = ({
  daysAmount = 0,
  base = 'EUR',
}: CurrencyHistoryParamsType) => {
  const currentDate = new Date();
  const previousDate = new Date(
    new Date().setDate(new Date().getDate() - Number(daysAmount))
  );

  const start_date = previousDate.toISOString().replace(/T.*/, '');
  const end_date = currentDate.toISOString().replace(/T.*/, '');

  return {
    params: {
      start_date,
      end_date,
      base,
    },
  };
};
