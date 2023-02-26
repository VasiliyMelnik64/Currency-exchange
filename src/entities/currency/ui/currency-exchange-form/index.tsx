import { useCallback } from 'react';
import styled, { useTheme } from 'styled-components';
import { Controller, useForm } from 'react-hook-form';
import { Button, Input } from 'shared/ui/basic';
import { FormControl, Box } from 'shared/ui/basic/mui';
import { FormattedText, FormattedTitle, Icon } from 'shared/ui';
import { useCurrencyData } from '../../lib/hooks';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 25px;
`;

const StyledTitle = styled(Box)`
  margin: 20px 0;
`;

export const CurrencyExchangeForm = () => {
  const { currency, onRequestCurrency } = useCurrencyData();
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    onRequestCurrency(data);
  };

  const handleChangeValues = useCallback(() => {
    const values = getValues();

    setValue('from', values.to);
    setValue('to', values.from);
  }, [getValues, setValue]);

  return (
    <>
      <StyledTitle>
        <FormattedTitle label='home.title' />
      </StyledTitle>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormControl style={{ gridColumn: '1/3' }}>
          <Controller
            name='amount'
            control={control}
            rules={{ required: 'true' }}
            defaultValue={currency?.amount}
            render={({ field: { onChange, value = '' } }) => (
              <Input
                onChange={onChange}
                type='number'
                value={value}
                variant='standard'
                label={<FormattedText label='label.amount' />}
                error={!!errors?.amount}
              />
            )}
          />
        </FormControl>
        <FormControl style={{ gridColumn: '3/6' }}>
          <Controller
            name='from'
            control={control}
            rules={{ required: 'true' }}
            defaultValue={currency?.from}
            render={({ field: { onChange, value = '', ref } }) => (
              <Input
                onChange={onChange}
                value={value}
                variant='standard'
                label={<FormattedText label='label.from' />}
                error={!!errors?.from}
              />
            )}
          />
        </FormControl>

        <Button
          variant='contained'
          type='button'
          style={{
            backgroundColor: theme.colors.light,
            width: '10%',
            justifySelf: 'center',
            gridColumn: '6/7',
          }}
          onClick={handleChangeValues}
        >
          <Icon name='compareArrows' fill={theme.colors.primary} />
        </Button>

        <FormControl style={{ gridColumn: '7/10' }}>
          <Controller
            name='to'
            control={control}
            defaultValue={currency?.to}
            rules={{ required: 'true' }}
            render={({ field: { onChange, value = '' } }) => (
              <Input
                onChange={onChange}
                value={value}
                variant='standard'
                label={<FormattedText label='label.to' />}
                error={!!errors?.to}
              />
            )}
          />
        </FormControl>
        <Button
          variant='contained'
          style={{
            backgroundColor: theme.colors.primary,
            gridColumn: '10/12',
          }}
          type='submit'
        >
          <FormattedText label='label.convert' />
        </Button>
      </StyledForm>
    </>
  );
};
