import * as S from './style'

function Sidebar() {
  return (
    <S.Wrapper>
      <img src='' alt='Logo da aplicação Markee app' />
      <S.Title>Arquivos</S.Title>
      <S.Button>
        <span> + </span>
        Adicionar arquivo
      </S.Button>
      <div>
        <a href='/'>
          Readme
          <button>x</button>
        </a>
      </div>
    </S.Wrapper>
  )
}

export { Sidebar }
