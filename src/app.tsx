import styled, { css } from 'styled-components'

function App() {
  return (
    <Title>App</Title>
  )
}

const Title = styled.h1`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.black}
  `}
`

export { App }
