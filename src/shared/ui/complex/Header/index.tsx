import { FormattedText } from 'shared/ui/basic';
import styled, { useTheme } from 'styled-components';
import { Logo } from '../logo';
import { Navigation } from '../navigation';
import { Button } from '../../basic/button';
import { Box } from '../../basic/mui';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  padding: 0 10%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  box-sizing: border-box;
  gap: 50px;
  justify-content: space-between;
`;

export const Header = () => {
  const theme = useTheme();

  return (
    <StyledHeader>
      <Box display='flex' gap={2}>
        <Logo />
        <Navigation
          tabs={[
            { id: '1', href: '/', label: 'navigation.main.tab' },
            { id: '2', href: '/history', label: 'navigation.history.tab' },
          ]}
        />
      </Box>
      <Button
        style={{
          color: theme.colors.primary,
        }}
      >
        <FormattedText bold label='navigation.logout' />
      </Button>
    </StyledHeader>
  );
};
