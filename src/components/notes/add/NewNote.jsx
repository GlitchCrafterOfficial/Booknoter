import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../../general/Nav';
import useFetch from '../../../hooks/useFetch';
import { Editor } from 'primereact/editor';
import SlimCard from './SlimCard';
import Title from '../../general/Title'
import { useForm } from 'react-hook-form';
import TextInput from '../../general/TextInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DialogMetadata({ text, noteTitle, bookId }) {
  let navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (data) => {
    data['content'] = text
    data['title'] = noteTitle
    const response = await axios.post(`http://localhost:8000/note/${bookId}`, data)
    return navigate(`/notes/edit/${response.data.id}`)
  }

  const onCancel = () => {
    document.querySelector('dialog').close()
  }

  return (
    <dialog className='w-[80vw] h-[40vw] p-20 shadow-md rounded-md'>
      <div className='flex justify-end'>
        <button onClick={onCancel} 
        className='text-xl'>x</button>
      
      </div>
     
      
      <div className="flex justify-around">
      <Title>Datos adicionales para la nota.</Title>
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)} className='mt-4'>
        <div className="flex gap-4">
          <TextInput 
            name={'book_pages'}
            placeholder={'Pagina del libro'}
            register={register}
            additional={{required: false, pattern: /\w+/}}
          />
          <div id="inputGroup" className='flex flex-col'>
            <label htmlFor="color" className=' font-bold'>Color</label>
            <input type="color" {...register('color', {required: false})} className='w-[31.5vw]'/>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <TextInput 
              name={'tags'}
              placeholder={'Etiquetas'}
              register={register}
              additional={{required: false, pattern: /\w+/}}
              w={'35vw'}
            />
                   
            <TextInput 
              name={'topic'}
              placeholder={'Tema'}
              register={register}
              additional={{required: false, pattern: /\w+/}}
              w={'35vw'}
            />
        </div>
        <div className="flex justify-around">
          <input type="submit" value={'Guardar'} className='p-2 mt-4 border-2 border-green-700 bg-green-400 font-bold cursor-pointer hover:bg-green-500'/>

        </div>

      </form>
    </dialog>
  )
}

export default function NewNote() {
  let { id } = useParams()
  let [data] = useFetch(`http://localhost:8000/books/${id}`)
  const [text, setText] = useState('')
  const [noteTitle, setNoteTitle] = useState('')

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
      e.preventDefault()
      document.querySelector('dialog').showModal()
    }
  })

  return (
    <>
      <Nav />
      { data ? <SlimCard data={data} /> : undefined}
      <input type="text" className='border-2 border-gray-900 w-full my-4 text-xl' placeholder='Titulo...' value={noteTitle} onChange={(e) => {setNoteTitle(e.target.value)}} />
      <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
      <span className='bg-gray-100 px-2 border-2 border-gray-300 mt-2 rounded-2'>Press ctrl+s to save.</span>
      { data ?       <DialogMetadata text={text} noteTitle={noteTitle} bookId={data.id}/> : undefined}
    </>
  )
}
