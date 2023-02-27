import { useSelector } from 'react-redux';
import {
  CurrencyHistoryDataView,
  CurrencyRatingTable,
  CurrencyTableControls,
} from 'entities/currency';
import { currencyHistoryTableRatesSelector } from 'entities/currency/model';

import { FormattedSubtitle, FormattedText } from 'shared/ui';

import { Box } from 'shared/ui/basic/mui';

export const CurrencyDataViewWidget = () => {
  const currencyHistoryData = useSelector(currencyHistoryTableRatesSelector);

  return (
    <Box pt={3} pb={3}>
      <FormattedSubtitle bold label='home.exchange.history' />
      <Box display='flex' mt={3} gap={5}>
        <CurrencyTableControls />
        <Box flex='1' />
      </Box>
      {!!currencyHistoryData.length ? (
        <Box display='flex' mt={3} gap={5}>
          <CurrencyHistoryDataView />
          <CurrencyRatingTable />
        </Box>
      ) : (
        <Box display='flex' mt={3} gap={5}>
          <FormattedText label='no.history.data.message' />
        </Box>
      )}
    </Box>
  );
};
