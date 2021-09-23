import { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import { File } from 'resources/files/types'

import logo from 'ui/assets/fullLogo.svg'
import * as icon from 'ui/assets/icons'
import * as S from './style'

function Sidebar() {
  const [files, setFiles] = useState<File[]>([])

  const handleAddFile = () => {
    const filesNotActive = files.map(file => ({
      ...file,
      active: false,
    }))

    setFiles([...filesNotActive, {
      id: uuidV4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }])
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo src={logo} alt='Logo da aplicação Markee app' />
      </S.Header>
      <S.H1>
        <span> Arquivos </span>
      </S.H1>
      <S.Button onClick={handleAddFile}>
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
