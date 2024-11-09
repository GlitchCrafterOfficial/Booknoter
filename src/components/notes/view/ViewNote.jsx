import React from 'react'
import useFetch from '../../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import SlimCard from '../add/SlimCard'
import Title from '../../general/Title'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Note({note}) {
  return (
    <div id="Note">
      <div id="header" className="flex">
        <span id='color' className='w-5 h-5 mt-[1vh] mr-4' style={{backgroundColor: note.color}}></span>
        <Title>{note.title}</Title>
      </div>
      <div className='mt-4 mb-4' id="body" dangerouslySetInnerHTML={{__html: note.content}}>
      </div>
      <Link to={`/notes/edit/${note.id}`} className='px-2 py-1 mb-4 border-blue-400 border-2 transition-colors duration-100 hover:bg-blue-500 font-bold '>Editar</Link>

    </div>
  )
}

export default function ViewNote() {
  let { id } = useParams()

  let [note] = useFetch(`http://localhost:8000/note/${id}`)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (note) {
      axios.get(`http://localhost:8000/books/${note.book_id}`).then((r) => {
        setData(r.data)
      })
    }
  })

  return (
    <>
    {
      (data) ? <SlimCard data={data} /> : undefined
    }
    
    {
      (note) ? <Note note={note} /> : undefined
    }
    </>

  )
}
