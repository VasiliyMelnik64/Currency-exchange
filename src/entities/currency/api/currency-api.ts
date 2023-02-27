import { createInstance } from '../../../shared/api';
import {
  getExchangeRateFromServer,
  sendExchangeRateParamsToServer,
  sendCurrencyHistoryParamsToServer,
  getCurrencyHistoryFromServer,
} from '../lib/mapping';

import { CurrencyHistoryParamsType } from '../lib';

const API = createInstance();

export const getExchangeRate = async (config: any): Promise<any> => {
  const response = await API.get(
    '/convert',
    sendExchangeRateParamsToServer(config)
  );

  return getExchangeRateFromServer(response);
};

export const getCurrencyHistory = async (
  params: CurrencyHistoryParamsType
): Promise<any> => {
  const response = await API.get(
    '/timeseries',
    sendCurrencyHistoryParamsToServer(params)
  );

  return getCurrencyHistoryFromServer(response);
};
