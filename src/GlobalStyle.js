import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');


  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 13px;
    font-family: 'Roboto', 'Noto', sans-serif;
  
    font-family: sans-serif;
    color: white;
    background-color: black;
    margin: 20px;
  }

  input, textarea, button {
    font-size: 1em;
  }

  :root{
    /* Colors */
    --color-primary: #ffad22;
    --color-secondary: #535353;
    --color-tertiary: #999999;
    --color-bg: #F4F4F4;
    --color-text: #8E8E8E;
  }


`
