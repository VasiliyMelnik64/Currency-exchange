import axios from 'axios';
import { defaultConfig } from './defaultConfig';

export const createInstance = (config = {}) => {
  const resConfig = {
    ...defaultConfig,
    ...config,
  };

  const instance = axios.create(resConfig);

  return instance;
};
