import {
  CurrencyHistoryDataView,
  CurrencyRatingTable,
} from 'entities/currency';
import { FormattedSubtitle } from 'shared/ui';

import { Box } from 'shared/ui/basic/mui';

export const CurrencyDataViewWidget = () => (
  <Box pt={3} pb={3}>
    <FormattedSubtitle bold label='home.exchange.history' />
    <Box display='flex' mt={3} gap={5}>
      <CurrencyHistoryDataView />
      <CurrencyRatingTable />
    </Box>
  </Box>
);
