import { UserSearchHistoryTable } from 'entities/history/ui';
import { FormattedTitle } from 'shared/ui';
import { Box } from 'shared/ui/basic/mui';
import { StyledTitle } from '../styles';

export const HistoryPage = () => (
  <Box padding='0 10%'>
    <StyledTitle>
      <FormattedTitle label='history.title' />
    </StyledTitle>
    <UserSearchHistoryTable />
  </Box>
);

export default HistoryPage;
