import { useCurrencyData } from 'entities/currency/lib/hooks';
import { useState, useCallback, useEffect } from 'react';
import { FormattedMessage } from 'shared/ui';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  InputLabel,
} from 'shared/ui/basic/mui';

import { CurrencyDaysAmountType } from '../../lib';
import { selectOptions } from '../../config';

export const CurrencyTableDropdown = () => {
  const [value, setValue] = useState<CurrencyDaysAmountType>(
    selectOptions[0].value
  );

  const { currency, onRequestCurrencyHistory } = useCurrencyData();

  const handleChange = useCallback((e: SelectChangeEvent) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    onRequestCurrencyHistory({
      daysAmount: value,
      base: currency?.from,
    });
  }, [value, currency, onRequestCurrencyHistory]);

  return (
    <Box flex='1'>
      <FormControl variant='standard' sx={{ width: '100%' }}>
        <InputLabel>
          <FormattedMessage label='label.duration' />
        </InputLabel>
        <Select
          value={value?.toString()}
          onChange={handleChange}
          placeholder='100500'
        >
          {selectOptions.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
