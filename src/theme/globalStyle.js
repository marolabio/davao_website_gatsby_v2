import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Lato', 'Open Sans', 'Droid Sans', 'Droid Serif', sans-serif;
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    color: hsla(0, 0%, 0%, 0.8);
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: inherit;
  }
  img {
    max-width: 100%;
  }
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`
