export type Currency = {
  from: string;
  amount: number;
  to: string;
  rate: number;
  reverseRate: number;
  result: number;
  date: Date;
};

export type CurrencyHistoryStatisticsType = {
  lowest: number;
  highest: number;
  average: number | string;
};

export type DatesRangeType = {
  start_date: string;
  end_date: string;
};

export type CurrencyHistoryParamsType = {
  daysAmount: CurrencyDaysAmountType;
  base: string;
};
export type CurrencyHistoryItemType = {
  date: string;
  rate: string;
};
export type CurrencyDaysAmountType = string | number | undefined;
export type PayloadRequestType = {
  params: {
    [key: string]: string | number;
  };
};
export type CurrencyPayloadSuccessType = Currency;
export type PayloadErrorType = unknown | Error | null;
export type PayloadDeleteType = number;
export type CurrencyHistoryPayloadDataType = CurrencyHistoryItemType[];

export type CurrecncyStateType = {
  data: Currency[];
  currencyHistory: CurrencyHistoryPayloadDataType;
  currencyHistoryViewVariant: CurrencyHistoryViewVariant;
  error: PayloadErrorType;
  loading: boolean;
};

export type ActionSuccessType = {
  type: string;
  payload: Currency;
};

export type ActionErrorType = {
  type: string;
  payload: PayloadErrorType;
};

export type ActionRequestCurrencyType = {
  type: string;
  payload: PayloadRequestType;
};

export type ActionRequestHistoryType = {
  type: string;
  payload: CurrencyHistoryParamsType;
};

export type ActionRequestHistorySuccessType = {
  type: string;
  payload: CurrencyHistoryPayloadDataType;
};

export type ActionDeleteType = {
  type: string;
  payload: string | number;
};

export enum CurrencyHistoryViewVariant {
  table = 'table',
  chart = 'chart',
}

export type ActionSetCurrencyHistoryViewVariantType = {
  type: string;
  payload: CurrencyHistoryViewVariant;
};

export type CurrecncySliceReducers = {
  getCurrencyHistoryRequest: (
    state: CurrecncyStateType,
    action: ActionRequestHistoryType
  ) => void;
  getCurrencyHistorySuccess: (
    state: CurrecncyStateType,
    action: ActionRequestHistorySuccessType
  ) => void;
  getCurrencyRequest: (
    state: CurrecncyStateType,
    action: ActionRequestCurrencyType
  ) => void;
  getCurrencySuccess: (
    state: CurrecncyStateType,
    action: ActionSuccessType
  ) => void;
  getCurrencyError: (
    state: CurrecncyStateType,
    action: ActionErrorType
  ) => void;
  setCurrencyHistoryViewVariant: (
    state: CurrecncyStateType,
    action: ActionSetCurrencyHistoryViewVariantType
  ) => void;
  deleteCurrency: (state: CurrecncyStateType, action: ActionDeleteType) => void;
};
