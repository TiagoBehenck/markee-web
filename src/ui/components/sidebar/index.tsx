import { MouseEvent } from 'react'
import { File } from 'resources/files/types'

import logo from 'ui/assets/fullLogo.svg'
import * as icon from 'ui/assets/icons'
import * as S from './style'

type SidebarProps = {
  files: File[]
  handleAddFile: () => void
  handleRemoveFile(id: string): void;
  onSelectFile: (id: string) => (e: MouseEvent<HTMLAnchorElement>) => void
}

function Sidebar({
  files,
  handleAddFile,
  handleRemoveFile,
  onSelectFile,
}: SidebarProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo src={logo} alt='Logo da aplicação Markee app' />
      </S.Header>
      <S.H1>
        <span> Arquivos </span>
      </S.H1>
      <S.Button onClick={handleAddFile} data-test-id='add-button'>
        <icon.PlusDark />
        Adicionar arquivo
      </S.Button>

      <S.WrapperLink>
        {files.map(file => (
          <S.LinkItem
            key={file.id}

          >
            <S.LinkItemContent
              href={`/file/${file.id}`}
              active={file.active}
              onClick={onSelectFile(file.id)}
            >
              {file.name}
            </S.LinkItemContent>

            {file.active && <S.StatusIconStyled status={file.status} />}

            {!file.active && (
              <S.DeleteButton onClick={() => handleRemoveFile(file.id)}>
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
