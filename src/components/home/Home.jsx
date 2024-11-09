import React from 'react'
import Nav from '../general/Nav'
import useFetch from '../../hooks/useFetch'
import BookShelf from './BookShelf'
import Title from '../general/Title'
import NewBook from './NewBook'


function Books({ data }) {
  return (
    <>
      <div>
        <Title>Clickea un libro y empieza para agregar notas</Title>
        <BookShelf data={data}/>
      </div>
    </>
  )
}

export default function Home() {
  const [data] = useFetch('http://localhost:8000/books')
  return (
    <>
        <Nav />

        {
          (data && data.length > 0 ) ? <Books data={data}/>:<NewBook />
        }

    </>
  )
}
