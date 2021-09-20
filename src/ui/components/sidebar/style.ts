import styled, { css } from 'styled-components/macro'

export const Wrapper = styled.aside`
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  padding: 3.2rem;
  height: 100vh;
  width: 20vw;
`

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1.6rem;
    padding: 2.4rem 0;
  `}
`

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
  height: 3.3rem;
`
