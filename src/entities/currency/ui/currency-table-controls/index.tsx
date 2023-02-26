import { Box } from 'shared/ui/basic/mui';

import { CurrencyTableDropdown } from './currency-table-dropdown';
import { CurrencyTableRadioGroup } from './currency-table-radio-group';

export const CurrencyTableControls = () => (
  <Box display='flex'>
    <CurrencyTableDropdown />
    <CurrencyTableRadioGroup />
  </Box>
);
