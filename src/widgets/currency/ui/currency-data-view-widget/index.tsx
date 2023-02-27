import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
  CurrencyHistoryDataView,
  CurrencyRatingTable,
  CurrencyTableControls,
} from '../../../../entities/currency';
import { currencyHistoryTableRatesSelector } from '../../../../entities/currency/model';

import { FormattedSubtitle, FormattedText } from '../../../../shared/ui';

import { Box } from '../../../../shared/ui/basic/mui';

const TablesContainer = styled(Box)`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`;

const ControlsContainer = styled(Box)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`;

export const CurrencyDataViewWidget = () => {
  const currencyHistoryData = useSelector(currencyHistoryTableRatesSelector);

  return (
    <Box pt={3} pb={3}>
      <FormattedSubtitle bold label='home.exchange.history' />
      <ControlsContainer display='flex' mt={3} gap={5}>
        <CurrencyTableControls />
        <Box flex='1' />
      </ControlsContainer>
      {!!currencyHistoryData.length ? (
        <TablesContainer display='flex' mt={3} gap={5}>
          <CurrencyHistoryDataView />
          <CurrencyRatingTable />
        </TablesContainer>
      ) : (
        <Box display='flex' mt={3} gap={5}>
          <FormattedText label='no.history.data.message' />
        </Box>
      )}
    </Box>
  );
};
