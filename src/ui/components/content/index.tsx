import * as S from './styles'

function Content() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Input type='text' />
      </S.Header>

      <S.Main>
        <S.Textarea
          placeholder='### Test preview'
        />

        <S.Preview>
          <p>Test preview</p>
        </S.Preview>
      </S.Main>
    </S.Wrapper>
  )
}

export { Content }
