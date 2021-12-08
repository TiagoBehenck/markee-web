import { RefObject, ChangeEvent } from 'react'
import marked from 'marked'

import 'highlight.js/styles/base16/darcula.css'

import * as S from './styles'
import { File } from 'resources/files/types'

import('highlight.js').then(hljs => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }

      return h.highlightAuto(code).value
    },
  })
})

type ContentProps = {
  file?: File
  inputRef: RefObject<HTMLInputElement>
  handleUpdateTitle: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void
  handleUpdateFile: (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => void
}

function Content({
  file,
  inputRef,

  handleUpdateTitle,
  handleUpdateFile,
}: ContentProps) {
  if (!file) {
    return null
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Input
          type='text'
          placeholder='Título'
          ref={inputRef}
          value={file.name}
          onChange={handleUpdateTitle(file.id)}
          data-test-id='header-title'
          autoFocus
        />
      </S.Header>

      <S.Main>
        <S.Textarea
          placeholder='Digite aqui seu markdown'
          value={file.content}
          onChange={handleUpdateFile(file.id)}
        />

        <S.Preview dangerouslySetInnerHTML={{ __html: marked(file.content) }} />
      </S.Main>
    </S.Wrapper>
  )
}

export { Content }
