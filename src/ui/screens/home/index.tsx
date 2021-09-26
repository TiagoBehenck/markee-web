import { ChangeEvent, useRef, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import { File } from 'resources/files/types'
import { Content } from 'ui/components/content'
import * as S from './style'

function Home() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])

  const handleAddFile = () => {
    inputRef.current?.focus()

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

  const handleUpdateFile = (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          content: e.target.value,
          status: 'editing',
        }
      }

      return file
    }))
  }
  const handleUpdateTitle = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          name: e.target.value,
          status: 'editing',
        }
      }

      return file
    }))
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
      <Content
        file={files.find(file => file.active)}
        inputRef={inputRef}
        handleUpdateTitle={handleUpdateTitle}
        handleUpdateFile={handleUpdateFile}
      />
    </S.Wrapper>
  )
}

export { Home }
