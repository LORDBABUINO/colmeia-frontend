import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    background-color: #e3e3e3;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #333;
    font-size: 14px;
    line-height: 1.42857143;
    font-family: Raleway, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`
