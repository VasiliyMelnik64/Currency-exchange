import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { Box } from '../../../../shared/ui/basic/mui';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
} from '../../../../shared/ui/basic/mui';

import { historyRatingTableHead } from '../../../../entities/currency/config';
import { currencyHistoryStatisticsSelector } from '../../../../entities/currency/model';
import { FormattedText } from '../../../../shared/ui';

export const CurrencyRatingTable = () => {
  const theme = useTheme();
  const statistics = useSelector(currencyHistoryStatisticsSelector);

  return (
    <Box flex='1'>
      <TableContainer
        component={Paper}
        sx={{ marginTop: '20px', maxHeight: 270, boxShadow: 4 }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {historyRatingTableHead.map((item) => (
                <TableCell key={item}>
                  <FormattedText bold color={theme.colors.dark} label={item} />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component='th' scope='row'>
                <FormattedText label='table.title.lowest' />
              </TableCell>
              <TableCell>
                <FormattedText
                  label='rate'
                  values={{ rate: statistics.lowest }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component='th' scope='row'>
                <FormattedText label='table.title.highest' />
              </TableCell>
              <TableCell>
                <FormattedText
                  label='rate'
                  values={{ rate: statistics.highest }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component='th' scope='row'>
                <FormattedText label='table.title.average' />
              </TableCell>
              <TableCell>
                <FormattedText
                  label='rate'
                  values={{ rate: statistics.average }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
