import { AxiosResponse } from 'axios';
import {
  getExchangeRateFromServer,
  sendCurrencyHistoryParamsToServer,
} from '..';

describe('Mapping functions', () => {
  describe('getExchangeRateFromServer', () => {
    describe('When call with params', () => {
      it('Then should return correct value', () => {
        const testObj = {
          data: {
            info: {
              rate: 0.94634,
            },
            result: 47.317015,
            query: {
              from: 'USD',
              to: 'EUR',
              amount: 50,
            },
          },
        };

        const data = getExchangeRateFromServer(testObj as AxiosResponse);

        expect(data.amount).toEqual(testObj.data.query.amount);
        expect(data.from).toEqual(testObj.data.query.from);
        expect(data.to).toEqual(testObj.data.query.to);
        expect(data.rate).toEqual(testObj.data.info.rate);
      });
    });
  });

  describe('sendCurrencyHistoryParamsToServer', () => {
    describe('When call with params', () => {
      it('Then should return correct value', () => {
        const testObj = {
          daysAmount: 10,
          base: 'EUR',
        };

        const data = sendCurrencyHistoryParamsToServer(testObj);

        expect(data.params.base).toEqual(testObj.base);
        expect(Number(data.params.start_date.split('-').at(-1))).toEqual(
          new Date().getDate() - 10
        );
        expect(Number(data.params.end_date.split('-').at(-1))).toEqual(
          new Date().getDate()
        );
      });
    });
  });
});
