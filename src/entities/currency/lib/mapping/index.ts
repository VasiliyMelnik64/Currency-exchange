import { AxiosResponse } from 'axios';

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

export const sendExchangeRateToServer = (params: any) => ({ params });
