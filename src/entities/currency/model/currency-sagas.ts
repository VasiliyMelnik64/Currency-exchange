import { takeLatest, put, call } from 'redux-saga/effects';

import {
  getCurrencyRequest,
  getCurrencySuccess,
  getCurrencyError,
  ActionType,
  PayloadSuccessType,
} from './currency-slice';
import { getExchangeRate } from '../api';

function* fetchCurrencyData(action: ActionType) {
  try {
    const data: PayloadSuccessType = yield call(
      getExchangeRate,
      action.payload
    );

    yield put(getCurrencySuccess(data));
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
}
