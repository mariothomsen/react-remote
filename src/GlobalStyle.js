import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');
  
  body {
    font-size: 13px;
    font-family: 'Noto', sans-serif;
    color: white;
    background-color: black;
    padding: 0;
    margin: 0;
  }

  input, textarea, button {
    font-size: 1em;
  }

  input[type='range'] {
    pointer-events: none;
  }

  input[type='range']::-webkit-slider-thumb {
    pointer-events: auto;
  }

  input[type='range']::-moz-range-thumb {
    pointer-events: auto;
  }


  :root{
    --color-primary: #ffaa1e;
    --color-secondary: #535353;
    --color-tertiary: #999999;
    --color-bg: #F4F4F4;
    --color-text: #8E8E8E;
  }

  h1, h2, h3, h4, h5, h6, p, pre, blockquote, form, ul, ol, dl {  
    margin: 0;  
    font-size: 1em;
    font-weight: inherit;
  }  

  h2 {
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: 100;
  }

  h3 {
    font-size: 0.75em;
    font-weight: 200;
    text-transform: capitalize;
  }


`
