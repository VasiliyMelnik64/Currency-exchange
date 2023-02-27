import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import { currencyHistoryChartRatesSelector } from '../../model/currency-slice';
import { Box } from '../../../../shared/ui/basic/mui';

export const CurrencyHistoryChart = () => {
  const theme = useTheme();
  const data = useSelector(currencyHistoryChartRatesSelector);

  return (
    <Box
      sx={{
        marginTop: '20px',
        maxHeight: 290,
        maxWidth: 400,
        overflow: 'auto',
      }}
    >
      <LineChart
        width={400}
        height={290}
        data={data}
        margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <Line type='monotone' dataKey='uv' stroke={theme.colors.primary} />
        <CartesianGrid stroke={theme.colors.dark} strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
      </LineChart>
    </Box>
  );
};
