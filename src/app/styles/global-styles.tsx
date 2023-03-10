import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roboto,sans-serif;
  }

  html, body, #root {
    height: 100%;
    background-color: ${(props) => props.theme.colors.secondary}
  }
`;
