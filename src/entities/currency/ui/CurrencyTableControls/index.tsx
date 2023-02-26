import { Box } from 'shared/ui/basic/mui';

import { CurrencyTableDropdown } from './CurrencyTableDropdown';
import { CurrencyTableRadioGroup } from './CurrencyTableRadioGroup';

export const CurrencyTableControls = () => (
  <Box display='flex'>
    <CurrencyTableDropdown />
    <CurrencyTableRadioGroup />
  </Box>
);
