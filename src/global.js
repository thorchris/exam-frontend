import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  th, td, p {
    color: ${({ theme }) => theme.primaryLight};
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

  .logo {
    padding-top: 20px;
    border-radius: 5px;
    height: auto;
    width: 12rem;
  }

  .errorBox{
    color: #D8000C;
    background-color: #FFBABA;
    margin: auto;
    padding: 10px;
    border-radius: 3px 3px 3px 3px;
    width: 40%
  }

  .gotImg, .swImg, .hpImg{
    float: left;
    width: 33.33%;
    padding: 5px;
    flex: 33.33%;
    height: 250px;
  }


  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`;