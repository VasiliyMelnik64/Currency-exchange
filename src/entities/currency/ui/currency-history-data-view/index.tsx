import { useSelector } from 'react-redux';
import { currencyHistoryViewVariantSelector } from '../../../../entities/currency/model';
import { CurrencyHistoryViewVariant } from '../../../../entities/currency/lib';
import { Box } from '../../../../shared/ui/basic/mui';

import { CurrencyHistoryTable } from '../currency-history-table';
import { CurrencyHistoryChart } from '../currency-history-chart';

export const CurrencyHistoryDataView = () => {
  const currencyHistoryViewVariant = useSelector(
    currencyHistoryViewVariantSelector
  );

  return (
    <Box flex='1'>
      {currencyHistoryViewVariant === CurrencyHistoryViewVariant.table && (
        <CurrencyHistoryTable />
      )}
      {currencyHistoryViewVariant === CurrencyHistoryViewVariant.chart && (
        <CurrencyHistoryChart />
      )}
    </Box>
  );
};
