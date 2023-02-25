import styled, { useTheme } from 'styled-components';
import { Controller, useForm } from 'react-hook-form';
import { Button, Input } from 'shared/ui/basic';
import { FormControl, Box } from 'shared/ui/basic/mui';
import { FormattedText, FormattedTitle, Icon } from 'shared/ui';

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
`;

const StyledTitle = styled(Box)`
  margin: 20px 0;
`;

export const CurrencyExchangeForm = () => {
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data, errors);
  };

  const handleChangeValues = () => {
    const values = getValues();

    setValue('from', values.to);
    setValue('to', values.from);
  };

  return (
    <>
      <StyledTitle>
        <FormattedTitle label='home.title' />
      </StyledTitle>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Controller
            name='amount'
            control={control}
            rules={{ required: 'true' }}
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
        <FormControl>
          <Controller
            name='from'
            control={control}
            rules={{ required: 'true' }}
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
          }}
          onClick={handleChangeValues}
        >
          <Icon name='compareArrows' fill={theme.colors.primary} />
        </Button>

        <FormControl>
          <Controller
            name='to'
            control={control}
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
          }}
          type='submit'
        >
          <FormattedText label='label.convert' />
        </Button>
      </StyledForm>
    </>
  );
};
