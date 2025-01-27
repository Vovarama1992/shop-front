import { useEffect, useRef } from 'react'

import Quill from 'quill'
import { FaRegImage } from 'react-icons/fa'

import './editor.css'
import 'quill/dist/quill.snow.css'

type EditorProps = {
  isimg?: boolean
  onChange?: (content: string) => void
  setimg?: any
  value?: string
}

export const Editor: React.FC<EditorProps> = ({ isimg, onChange, setimg, value }) => {
  const editorRef = useRef<HTMLDivElement>(null)
  const toolbarRef = useRef<HTMLDivElement>(null)
  const quillInstance = useRef<Quill | null>(null)

  const toolbarOptions = [
    [{ size: ['8px', '10px', '12px', '14px', '18px', '24px', '32px', '48px'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['link', 'image'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['clean'],
  ]

  useEffect(() => {
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        modules: {
          toolbar: toolbarRef.current || toolbarOptions,
        },
        theme: 'snow',
      })

      quillInstance.current.on('text-change', () => {
        if (onChange) {
          onChange(quillInstance.current?.root.innerHTML || '')
        }
      })
    }
  }, [])

  useEffect(() => {
    if (quillInstance.current && value !== quillInstance.current.root.innerHTML) {
      quillInstance.current.root.innerHTML = value || ''
    }
  }, [value])

  return (
    <div className={'custom-quill-container'} style={{ width: '100%', height: 'fit-content' }}>
      <div ref={toolbarRef}>
        <div className={'ql-sect'}>
          <select className={'ql-size'}>
            <option value={'8px'}>8</option>
            <option value={'10px'}>10</option>
            <option value={'12px'}>12</option>
            <option value={'14px'}>14</option>
            <option value={'18px'}>18</option>
            <option value={'24px'}>24</option>
            <option value={'32px'}>32</option>
            <option value={'48px'}>48</option>
          </select>
        </div>
        <div className={'ql-sect'}>
          <button className={'ql-bold'}></button>
          <button className={'ql-italic'}></button>
          <button className={'ql-underline'}></button>
          <button className={'ql-strike'}></button>
          <button className={'ql-link'}></button>
        </div>

        <div className={'ql-sect'}>
          <button className={'ql-align'} value={''}></button>
          <button className={'ql-align'} value={'center'}></button>
          <button className={'ql-align'} value={'right'}></button>
        </div>
        <div className={'ql-sect'}>
          <button className={'ql-list'} value={'ordered'}></button>
          <button className={'ql-list'} value={'bullet'}></button>
        </div>
        <button
          className={'ql-img'}
          disabled={isimg}
          onClick={setimg}
          style={{ color: isimg ? '#00000030' : '#202224' }}
        >
          <FaRegImage /> Изображение
        </button>
      </div>
      <div ref={editorRef}></div>
    </div>
  )
}
