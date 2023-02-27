import {
  CurrencyExchangeWidget,
  CurrencyDataViewWidget,
} from 'widgets/currency/ui';
import { Box } from 'shared/ui/basic/mui';
import { FormattedTitle } from 'shared/ui';

import { StyledTitle } from '../styles';

const HomePage = () => (
  <Box padding='0 10%'>
    <StyledTitle>
      <FormattedTitle label='home.title' />
    </StyledTitle>
    <CurrencyExchangeWidget />
    <CurrencyDataViewWidget />
  </Box>
);

export default HomePage;
