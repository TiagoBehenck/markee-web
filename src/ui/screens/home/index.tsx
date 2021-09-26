import { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import { File } from 'resources/files/types'
import { Content } from 'ui/components/content'
import * as S from './style'

function Home() {
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

  const handleDeleteFile = (id: string) => {
    setFiles(files => files.filter(files => files.id !== id))
  }

  return (
    <S.Wrapper>
      <S.Sidebar
        files={files}
        handleAddFile={handleAddFile}
        handleRemoveFile={handleDeleteFile}
      />
      <Content />
    </S.Wrapper>
  )
}

export { Home }
