import { useCallback, useState, useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { exchangeRateSelector } from 'entities/currency/model';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
  Box,
} from 'shared/ui/basic/mui';

import { userSearchHistoryTableHead } from 'entities/history/config';
import { formatDateForUserSearchHistoryTable } from 'entities/currency/lib';
import { useCurrencyData } from 'entities/currency/lib/hooks';
import { FormattedText, Icon } from 'shared/ui';
import { useNavigate } from 'react-router-dom';

export const UserSearchHistoryTable = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const theme = useTheme();
  const currencyData = useSelector(exchangeRateSelector);
  const { onRequestCurrency, onDeleteCurrency, currencies } = useCurrencyData();
  const prevCurrrenciesLength = useRef(currencies.length);

  const handleMouseOver = useCallback(
    (index: number) => () => {
      setActiveIndex(index);
    },
    []
  );

  const handleRequestCurrency = (params: any) => () => {
    onRequestCurrency(params);
  };

  useEffect(() => {
    if (currencies.length > prevCurrrenciesLength?.current) {
      navigate('/');
    }
  }, [currencies.length]);

  return !!currencyData.length ? (
    <TableContainer
      component={Paper}
      sx={{ marginTop: '20px', maxHeight: 1290, boxShadow: 4 }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {userSearchHistoryTableHead.map((item) => (
              <TableCell key={item}>
                <FormattedText bold color={theme.colors.dark} label={item} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {currencyData.map((row, i) => (
            <TableRow key={i} hover onMouseOver={handleMouseOver(i)}>
              <TableCell component='th' scope='row'>
                <FormattedText
                  label='date'
                  values={{
                    date: formatDateForUserSearchHistoryTable(
                      row.date.toString()
                    ),
                  }}
                />
              </TableCell>
              <TableCell>
                <FormattedText
                  label='table.row.event.label'
                  values={{
                    amount: row.amount,
                    currency1: row.from,
                    currency2: row.to,
                  }}
                />
              </TableCell>
              <TableCell
                sx={{
                  cursor: 'pointer',

                  span: {
                    position: 'relative',
                    bottom: '2px',
                  },
                }}
              >
                <Box
                  visibility={activeIndex === i ? 'visible' : 'hidden'}
                  onClick={handleRequestCurrency({
                    amount: row.amount,
                    from: row.from,
                    to: row.to,
                  })}
                >
                  <Icon name='removeRedEye' fill={theme.colors.primary} />
                  &nbsp;
                  <FormattedText label='table.title.view' />
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  cursor: 'pointer',
                  minWidth: 'auto',

                  span: {
                    position: 'relative',
                    bottom: '2px',
                  },
                }}
              >
                <Box
                  id={row.id}
                  visibility={activeIndex === i ? 'visible' : 'hidden'}
                  onClick={onDeleteCurrency(row.id)}
                >
                  <Icon name='deleteForever' fill={theme.colors.warn} />
                  &nbsp;
                  <FormattedText label='table.title.delete' />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Box display='flex' mt={3} gap={5}>
      <FormattedText label='no.history.data.message' />
    </Box>
  );
};
