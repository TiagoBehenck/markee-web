import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { App } from './app'

import { theme } from 'resources/theme'

import 'normalize.css'

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased;
  }

  button {
    border-style: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`

export { Root }
