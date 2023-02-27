import { CurrencyTableDropdown } from './currency-table-dropdown';
import { CurrencyTableRadioGroup } from './currency-table-radio-group';

import { Box } from '../../../../shared/ui/basic/mui';

export const CurrencyTableControls = () => (
  <Box display='flex' flex='1'>
    <CurrencyTableDropdown />
    <CurrencyTableRadioGroup />
  </Box>
);
