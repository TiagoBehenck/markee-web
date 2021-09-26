import {
  useRef,
  useState,
  useEffect,
  ChangeEvent,
  MouseEvent,
  useCallback,
} from 'react'
import { v4 as uuidV4 } from 'uuid'
import { File } from 'resources/files/types'

const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

export function useFiles() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])

  const updateFile = useCallback(() => {
    const file = files.find(file => file.active)

    if (!file || file.status !== 'editing') {
      return
    }

    setFiles(files => files.map(file => {
      if (file.active) {
        return {
          ...file,
          status: 'saving',
        }
      }

      return file
    }))

    const saving = () => setFiles(files => files.map(file => {
      if (file.active) {
        return {
          ...file,
          status: 'saved',
        }
      }

      return file
    }))

    const savingDebounce = debounce(saving)
    savingDebounce()
  }, [files])

  useEffect(() => {
    const updateFileDebounce = debounce(updateFile)

    updateFileDebounce()
  }, [updateFile])

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

  const handleSelectFile = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    inputRef.current?.focus()

    setFiles(files => files.map(file => ({
      ...file,
      active: file.id === id,
    })))
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

  return {
    files,
    inputRef,
    handleAddFile,
    handleSelectFile,
    handleUpdateFile,
    handleUpdateTitle,
    handleDeleteFile,
  }
}
