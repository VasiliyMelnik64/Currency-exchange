import styled from 'styled-components';
import { Box } from '../../basic/mui';
import { Icon } from '../../basic/icon';
import { FormattedText } from '../../basic/typography';

export const StyledIconContainer = styled(Box)`
  display: flex;
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
  span {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export const Logo = () => (
  <StyledIconContainer alignItems='center'>
    <Icon name='findReplace' />
    <FormattedText label='logo.title.currency' />
    <FormattedText bold label='logo.title.exchange' />
  </StyledIconContainer>
);
