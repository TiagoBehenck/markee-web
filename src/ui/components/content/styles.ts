import styled from 'styled-components/macro'
import { FileActiveUrl } from 'ui/assets/icons'

const wrapperPadding = '24px'

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${wrapperPadding};
  flex-grow: 5;
  flex-wrap: wrap;
`

const headerHeight = '30px'

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: ${headerHeight};
`

export const Input = styled.input`
  border: 0;
  background: url(${FileActiveUrl}) left calc(50% - 1px) no-repeat;
  flex-grow: 1;
  font-size: 1.6rem;
  padding: 5px;
  padding-left: 32px;
  font-family: 'DM Sans';

  &:focus {
    outline: none;
  }
`
export const Main = styled.main`
  display: flex;
  align-items: center;
  height: calc(100vh - ${headerHeight} - (${wrapperPadding} * 2));
  justify-content: space-between;
`

export const Textarea = styled.textarea`
  border: 0;
  background: transparent;
  font: 1.6rem 'Inconsolata', 'Courier New', Courier, monospace;
  height: 100%;
  padding: 20px;
  resize: none;
  width: 48%;

  &:focus {
    outline: none;
  }
`

export const Preview = styled.article`
  background: transparent;
  height: 100%;
  font-size: 1.6rem;
  padding: 20px;
  position: relative;
  width: 48%;

  &::before {
    background: ${({ theme }) => theme.colors.gray};
    content: '';
    height: 94%;
    left: -4%;
    position: absolute;
    top: 4%;
    width: 2px;
  }
`
