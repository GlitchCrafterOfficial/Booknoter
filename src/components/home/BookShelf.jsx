import React from 'react'
import { Link } from 'react-router-dom'
import NewBook from './NewBook'
import './BookShelf.css'
import BookCard from '../general/BookCard'

export default function BookShelf({data}) {
  console.log(data)
  return (
    <div id='books'>
      <NewBook />
      
      {data.map((book) => (
      
        <Link to={`/notes/${book.id}`} key={book.id}>
          <BookCard book={book} />
        </Link>
       ))}
    </div>
  )
}
