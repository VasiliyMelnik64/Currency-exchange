import { takeLatest, put, call } from 'redux-saga/effects';

import {
  getCurrencyHistoryRequest,
  getCurrencyHistorySuccess,
  getCurrencyRequest,
  getCurrencySuccess,
  getCurrencyError,
} from './currency-slice';

import {
  CurrencyHistoryPayloadDataType,
  ActionRequestCurrencyType,
  CurrencyPayloadSuccessType,
  ActionRequestHistoryType,
} from '../../../entities/currency/lib';
import { getExchangeRate, getCurrencyHistory } from '../api';

function* fetchCurrencyData(action: ActionRequestCurrencyType) {
  try {
    const data: CurrencyPayloadSuccessType = yield call(
      getExchangeRate,
      action.payload
    );

    yield put(getCurrencySuccess(data));
  } catch (e) {
    yield put(getCurrencyError(e));
  }
}

function* fetchCurrencyHistoryData(action: ActionRequestHistoryType) {
  try {
    const data: CurrencyHistoryPayloadDataType = yield call(
      getCurrencyHistory,
      action.payload
    );

    yield put(getCurrencyHistorySuccess(data));
  } catch (e) {
    yield put(getCurrencyError(e));
  }
}

export function* currencySaga() {
  /**
   * getCurrencyRequest(sampleData).type may look a bit unusual, but action creators are
   * pure functions that have no side effects. At this point, the call occurs without
   * the "dispatch" method, so a plain object is returned here (with necessary field "type")
   */
  const sampleData: any = {};

  yield takeLatest(getCurrencyRequest(sampleData).type, fetchCurrencyData);
  yield takeLatest(
    getCurrencyHistoryRequest(sampleData).type,
    fetchCurrencyHistoryData
  );
}
