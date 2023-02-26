import { useSelector } from 'react-redux';
import { CurrencyTableControls } from 'entities/currency';
import { currencyHistoryViewVariantSelector } from 'entities/currency/model';
import { CurrencyHistoryViewVariant } from 'entities/currency/lib';
import { Box } from 'shared/ui/basic/mui';

import { CurrencyHistoryTable } from '../CurrencyHistoryTable';
import { CurrencyHistoryChart } from '../CurrencyHistoryChart';

export const CurrencyHistoryDataView = () => {
  const currencyHistoryViewVariant = useSelector(
    currencyHistoryViewVariantSelector
  );

  return (
    <Box flex='1'>
      <CurrencyTableControls />
      {currencyHistoryViewVariant === CurrencyHistoryViewVariant.table && (
        <CurrencyHistoryTable />
      )}
      {currencyHistoryViewVariant === CurrencyHistoryViewVariant.chart && (
        <CurrencyHistoryChart />
      )}
    </Box>
  );
};
