import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #121214;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
export default GlobalStyle