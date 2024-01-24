import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    min-width: 530px;
    margin: 0;
    background-color: ${(props) => props.theme.colors.bgc};
    color: ${(props) => props.theme.colors.textColor};
  }

  button,
  input {
    border: 1px solid transparent;
    outline: 0;
    font-family: inherit;
  }

  ul,ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    
    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: ${(props) => props.theme.colors.textColor};
    }
  }

  ._no-select {
    -webkit-touch-callout: none; //? iOS Safari
    -webkit-user-select: none; //? Safari
    -khtml-user-select: none; //? Konqueror HTML
    -moz-user-select: none; //? Old versions of Firefox
    -ms-user-select: none; //? Internet Explorer/Edge
    user-select: none; //? Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox
  }

  @font-face {
  font-family: 'YourFont-Regular';
  src: url('/fonts/YourFont-Regular.woff2') format('woff2'), /* Формат WOFF2 */
       url('/fonts/YourFont-Regular.woff') format('woff'); /* Формат WOFF */
  font-weight: normal;
  font-style: normal;
}

  @media (max-width: 730px) {
    input, button {
      padding: 10px 12px;
    }
  }
`;
