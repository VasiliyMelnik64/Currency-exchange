import { SyntheticEvent } from 'react';
import { useTheme } from 'styled-components';
import { useDispatch } from 'react-redux';

import { setCurrencyHistoryViewVariant } from '../../model/currency-slice';
import { CurrencyHistoryViewVariant } from '../../lib/types';

import {
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from 'shared/ui/basic/mui';
import { FormattedText } from 'shared/ui';

export const CurrencyTableRadioGroup = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleChange = (__e: SyntheticEvent, value: string) => {
    dispatch(
      setCurrencyHistoryViewVariant(value as CurrencyHistoryViewVariant)
    );
  };

  return (
    <Box flex='1' textAlign='right'>
      <FormControl>
        <RadioGroup
          defaultValue='table'
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
          onChange={handleChange}
        >
          <FormControlLabel
            sx={{ margin: 0, span: { verticalAlign: 'baseline' } }}
            value='table'
            control={
              <Radio
                sx={{
                  color: theme.colors.primary,
                  '&.Mui-checked': {
                    color: theme.colors.primary,
                  },
                }}
              />
            }
            label={
              <FormattedText
                bold
                label='label.table'
                color={theme.colors.dark}
              />
            }
          />
          <FormControlLabel
            sx={{ margin: 0, span: { verticalAlign: 'baseline' } }}
            value='chart'
            control={
              <Radio
                sx={{
                  color: theme.colors.primary,
                  '&.Mui-checked': {
                    color: theme.colors.primary,
                  },
                }}
              />
            }
            label={
              <FormattedText
                bold
                label='label.chart'
                color={theme.colors.dark}
              />
            }
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
