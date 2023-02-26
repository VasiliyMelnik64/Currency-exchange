import {
  CurrencyExchangeWidget,
  CurrencyDataViewWidget,
} from 'widgets/currency/ui';
import { Box } from 'shared/ui/basic/mui';

const HomePage = () => {
  return (
    <Box padding='0 10%'>
      <CurrencyExchangeWidget />
      <CurrencyDataViewWidget />
    </Box>
  );
};

export default HomePage;
