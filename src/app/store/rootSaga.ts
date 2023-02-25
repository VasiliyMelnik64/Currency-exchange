import { all } from 'redux-saga/effects';

import { currencySaga } from 'entities/currency/model';

export function* rootSaga() {
  yield all([currencySaga()]);
}
