import { createInstance } from 'shared/api';
import {
  getExchangeRateFromServer,
  sendExchangeRateToServer,
} from '../lib/mapping';

const API = createInstance();

export const getExchangeRate = async (config: any): Promise<any> => {
  const response = await API.get('/convert', sendExchangeRateToServer(config));

  return getExchangeRateFromServer(response);
};
