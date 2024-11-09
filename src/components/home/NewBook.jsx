import React from 'react'
import NewNoteButton from '../notes/list/NewNoteButton'
import { Link } from 'react-router-dom'

export default function NewBook() {
  return (
    <Link
     to='/new_book'>
        <NewNoteButton icon={"📖"}>Agregar nuevo libro</NewNoteButton>
    </Link>
    )
}
