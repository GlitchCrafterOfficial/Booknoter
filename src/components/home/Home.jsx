import React from 'react'
import Nav from '../general/Nav'
import useFetch from '../../hooks/useFetch'
import BookShelf from './BookShelf'
import Title from '../general/Title'
import NewBook from './NewBook'
export default function Home() {
  const [data] = useFetch('http://localhost:8000/books')
  return (
    <>
        <Nav />
          <div id="body">

          {
          data && data.length > 0 ? 
          (
          <>
            <div>
              <Title>Clickea un libro y empieza para agregar notas</Title>
              <BookShelf data={data}/>
            </div>
            
          </>
        
          )
          
          : (
            <div>
              <NewBook />
            </div>
          )
          }

        </div>
    </>
  )
}
