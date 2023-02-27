import { AxiosResponse } from 'axios';
import { v4 as uuid } from 'uuid';

import { CurrencyHistoryParamsType, getDatesRange } from '../../lib';

export const getExchangeRateFromServer = (
  response: AxiosResponse<any, any>
) => {
  const {
    data: { info, result, query },
  } = response;

  return {
    ...query,
    id: uuid(),
    rate: info.rate,
    reverseRate: +(query.amount / result).toFixed(6),
    date: new Date().toISOString(),
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
}: CurrencyHistoryParamsType) => ({
  params: {
    ...getDatesRange(daysAmount),
    base,
  },
});
