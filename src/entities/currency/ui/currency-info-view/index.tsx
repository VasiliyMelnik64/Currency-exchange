import { Fragment } from 'react';
import { useTheme } from 'styled-components';

import {
  FormattedText,
  FormattedTitle,
  FormattedNumber,
} from '../../../../shared/ui';
import { Box } from '../../../../shared/ui/basic/mui';
import { useCurrencyData } from '../../lib/hooks';

export const CurrencyInfoView = () => {
  const theme = useTheme();
  const { currency } = useCurrencyData();

  return !!currency ? (
    <Box borderBottom={`1px solid ${theme.colors.dark}`} padding={4}>
      <Box textAlign='center' paddingBottom={5}>
        <FormattedTitle
          label='converted.currency.result'
          bold={false}
          values={{
            amount: currency?.amount || 0,
            currency: currency?.from,
            sign: '=',
          }}
        />
        <FormattedTitle
          label='converted.currency.result'
          bold={false}
          color={theme.colors.accent}
          values={{
            amount: <FormattedNumber value={+currency?.result || 0} />,
            currency: currency?.to,
            sign: '',
          }}
        />
      </Box>
      <Box textAlign='center'>
        <FormattedText
          label='converted.currency.rate'
          values={{
            fromCurrency: currency?.from,
            toCurrency: currency?.to,
            toRate: currency?.rate,
          }}
        />
      </Box>
      <Box textAlign='center'>
        <FormattedText
          label='converted.currency.rate'
          values={{
            fromCurrency: currency?.to,
            toCurrency: currency?.from,
            toRate: currency?.reverseRate,
          }}
        />
      </Box>
    </Box>
  ) : (
    <Fragment />
  );
};
