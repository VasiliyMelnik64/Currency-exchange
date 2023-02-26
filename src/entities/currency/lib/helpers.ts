import {
  CurrencyDaysAmountType,
  DatesRangeType,
  CurrencyHistoryItemType,
} from './types';

export const getDatesRange = (
  daysAmount: CurrencyDaysAmountType
): DatesRangeType => {
  const currentDate = new Date();
  const previousDate = new Date(
    new Date().setDate(new Date().getDate() - Number(daysAmount))
  );

  const start_date = previousDate.toISOString().replace(/T.*/, '');
  const end_date = currentDate.toISOString().replace(/T.*/, '');

  return {
    start_date,
    end_date,
  };
};

export const formatDateForHistoryTable = (date: string): string => {
  if (!date) {
    return '';
  }

  return date.split('-').reverse().join('/');
};
