import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { currencyHistoryRatesSelector } from 'entities/currency/model';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
} from 'shared/ui/basic/mui';

import { historyTableHead } from 'entities/currency/config';
import { FormattedText } from 'shared/ui';

export const CurrencyHistoryTable = () => {
  const theme = useTheme();
  const currencyHistoryData = useSelector(currencyHistoryRatesSelector);

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: '20px', maxHeight: 290, boxShadow: 4 }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {historyTableHead.map((item) => (
              <TableCell key={item}>
                <FormattedText bold color={theme.colors.dark} label={item} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {currencyHistoryData.map((row) => (
            <TableRow key={row.date}>
              <TableCell component='th' scope='row'>
                <FormattedText label='date' values={{ date: row.date }} />
              </TableCell>
              <TableCell>
                <FormattedText label='rate' values={{ rate: row.rate }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
