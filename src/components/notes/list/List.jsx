import React from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../../../general/Nav'
import Title from '../../../general/Title'
import useFetch from '../../../hooks/useFetch'
import BookCard from './BookCard'
import NewNoteButton from './NewNoteButton'
import { Link } from 'react-router-dom'
import NoteCard from './NoteCard'
export default function List() {
  let { id } = useParams()
  let [data] = useFetch(`http://localhost:8000/books/${id}`)
  
  let [notes] = useFetch(`http://localhost:8000/notes/${id}`)
  return (
    <>
      <Nav />
      {data ? (<BookCard data={data}/>) : undefined }
      <div className='mt-4 '>
        <Title>Notas</Title>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {/* Notas */}
          <Link to={(data) ? `/notes/new/${data.id}` : '#'}>
            <NewNoteButton icon="+"> Agregar una nueva nota </NewNoteButton>
          </Link>
          {(notes && notes.map) ? (
            notes.map((e, i) => (
              <NoteCard noteData={e} key={i}/>
            ))
          ) : undefined}
        </div>
      </div>
      
    </>
  )
}
