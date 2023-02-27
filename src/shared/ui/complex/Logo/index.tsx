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
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`;

export const Logo = () => (
  <StyledIconContainer alignItems='center'>
    <Icon name='findReplace' />
    <FormattedText label='logo.title.currency' />
    <FormattedText bold label='logo.title.exchange' />
  </StyledIconContainer>
);
