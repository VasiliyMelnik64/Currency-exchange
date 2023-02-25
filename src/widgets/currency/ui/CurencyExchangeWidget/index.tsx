import { CurrencyExchangeForm, CurrencyInfoView } from 'entities/currency';
import { Box } from 'shared/ui/basic/mui';

export const CurrencyExchangeWidget = () => {
  return (
    <Box padding='0 10%'>
      <CurrencyExchangeForm />
      <CurrencyInfoView />
    </Box>
  );
};
