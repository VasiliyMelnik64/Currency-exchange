import styled, { css } from 'styled-components';

export const textMixin = css`
  ${({
    capitalized,
    bold,
    italic,
  }: {
    capitalized?: boolean;
    bold?: boolean;
    italic?: boolean;
  }) => ({
    textDecoration: capitalized ? 'capitalized' : 'none',
    fontStyle: italic ? 'italic' : 'normal',
    fontWeight: bold ? 'bold!important' : 'normal',
  })}

  vertical-align: super;
`;

export const StyledTitle = styled.span`
  ${textMixin}
  font-family: Roboto, sans-serif;
  font-weight: 600;
  font-size: 3rem;
`;

export const StyledSubtitle = styled.span`
  ${textMixin}
  font-family: Roboto, sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const StyledText = styled.span`
  ${textMixin}
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
`;
