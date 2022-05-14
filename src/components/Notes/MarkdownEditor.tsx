import React, { useEffect, useState } from 'react'
import SimpleMde from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { notesApi } from '@/hooks/notesApi'
import { useRouter } from 'next/router'
import { NoteItem } from '@/types/NoteItem'

export const MarkdownEditor: React.VFC = () => {
  const [saveMessage, setSaveMessage] = useState('')
  const router = useRouter()
  const { fetchNote, deleteNote, updateNote } = notesApi()
  const [note, setNote] = useState<NoteItem>()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // loading init note
  useEffect(() => {
    if (router.isReady) {
      fetchNote(setNote, Number(router.query.id), router)
    }
  }, [router.query])

  // loaded init note
  useEffect(() => {
    if (note) {
      setTitle(note.title)
      setBody(note.body)
    }
  }, [note])

  return (
    <>
      <div className="relative h-10">
        <label className="text-xl pl-2 absolute bottom-0 inline-block">
          Title
        </label>
        <button
          className="px-2 py-1 absolute right-0 rounded transition duration-500 hover:bg-red-400 border border-red-200 bg-red-100"
          onClick={() => {
            deleteNote(Number(router.query.id)).then(() => {
              router.push('/')
            })
          }}>
          Delete
        </button>
      </div>

      <input
        type="text"
        className="mb-6 w-full rounded border border-gray-200"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="text-xl ml-2">Body</label>
      <SimpleMde
        value={body}
        onChange={(value: string) => {
          setSaveMessage('')
          setBody(value)
        }}
      />

      <button
        className="px-2 py-1 rounded transition duration-500 hover:bg-blue-400 border border-blue-200 bg-blue-100"
        onClick={() => {
          setSaveMessage('保存中です...')
          updateNote(Number(router.query.id), { title, body }).then(() =>
            setSaveMessage('保存中しました!')
          )
        }}>
        Save
      </button>
      <p className="mt-2">{saveMessage}</p>
    </>
  )
}

export default MarkdownEditor
