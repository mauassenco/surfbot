import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box; 
  }

  body {
    background: ${({ theme }) => theme.colors.bgPrimary};
    font-family:  ${({ theme }) => theme.fonts.primary};
  }

`;

export default GlobalStyles;
