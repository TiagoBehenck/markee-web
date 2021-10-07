import { ThemeProvider } from 'styled-components'
import { theme } from 'resources/theme'
import { GlobalStyle } from '../src/root'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
]
