import { File } from 'resources/files/types'

import logo from 'ui/assets/fullLogo.svg'
import * as icon from 'ui/assets/icons'
import * as S from './style'

const files: File[] = [
  {
    id: '0',
    name: 'README.md',
    content: 'Conteúdo do README',
    active: false,
    status: 'saved',
  },
  {
    id: '1',
    name: 'CONTRIBUTING.md',
    content: 'Conteúdo do Contributing',
    active: true,
    status: 'editing',
  },
]

function Sidebar() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo src={logo} alt='Logo da aplicação Markee app' />
      </S.Header>
      <S.H1>
        <span> Arquivos </span>
      </S.H1>
      <S.Button>
        <icon.PlusDark />
        Adicionar arquivo
      </S.Button>

      <S.WrapperLink>
        {files.map(file => (
          <S.LinkItem
            key={file.id}
          >
            <S.LinkItemContent href={`/file/${file.id}`} active={file.active}>
              {file.name}
            </S.LinkItemContent>

            {file.active && <S.StatusIconStyled status={file.status} />}

            {!file.active && (
              <S.DeleteButton>
                <S.DeleteIcon />
              </S.DeleteButton>
            )}
          </S.LinkItem>
        ))}
      </S.WrapperLink>

    </S.Wrapper>
  )
}

export { Sidebar }
