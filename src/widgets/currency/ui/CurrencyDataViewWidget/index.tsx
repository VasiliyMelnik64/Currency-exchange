import { CurrencyHistoryTable, CurrencyRatingTable } from 'entities/currency';
import { FormattedSubtitle } from 'shared/ui';

import { Box } from 'shared/ui/basic/mui';

export const CurrencyDataViewWidget = () => {
  return (
    <Box mt={3}>
      <FormattedSubtitle bold label='home.exchange.history' />
      <Box display='flex' mt={3}>
        <CurrencyHistoryTable />
        <CurrencyRatingTable />
      </Box>
    </Box>
  );
};
