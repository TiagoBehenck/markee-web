import { useFiles } from 'resources/files/use-files'
import { Content } from 'ui/components/content'
import * as S from './style'

function Home() {
  const {
    files,
    handleAddFile,
    handleDeleteFile,
    handleSelectFile,
    inputRef,
    handleUpdateTitle,
    handleUpdateFile,
  } = useFiles()

  return (
    <S.Wrapper>
      <S.Sidebar
        files={files}
        handleAddFile={handleAddFile}
        handleRemoveFile={handleDeleteFile}
        onSelectFile={handleSelectFile}
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
