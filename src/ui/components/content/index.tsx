import { RefObject, ChangeEvent, useState } from 'react'
import marked from 'marked'

import 'highlight.js/styles/base16/darcula.css'

import * as S from './styles'

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
  inputRef: RefObject<HTMLInputElement>
}

function Content({ inputRef }: ContentProps) {
  const [content, setContent] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Input
          type='text'
          placeholder='Título'
          ref={inputRef}
          autoFocus
        />
      </S.Header>

      <S.Main>
        <S.Textarea
          placeholder='Digite aqui seu markdown'
          value={content}
          onChange={handleChange}
        />

        <S.Preview dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </S.Main>
    </S.Wrapper>
  )
}

export { Content }
