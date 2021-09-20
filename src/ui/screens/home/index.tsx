import { Content } from 'ui/components/content'
import * as S from './style'

function Home() {
  return (
    <S.Wrapper>
      <S.Sidebar />
      <Content />
    </S.Wrapper>
  )
}

export { Home }
