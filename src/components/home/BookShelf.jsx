import React from 'react'
import { Link } from 'react-router-dom'
import NewBook from './NewBook'

export default function BookShelf({data}) {
  console.log(data)
  return (
    <div className="grid grid-cols-4 gap-4 py-4">
      <NewBook />
      {data.map((e, i) => (
      
        <Link to={`/notes/${e.id}`}>
          <div id="bookcard" className='transition-transform duration-100 hover:shadow-sm text-center hover:scale-105'>
            <div id="image" className='flex justify-center'>
              <img 
                className="w-[15vw]"
                src={"http://localhost:8000"+e.cover} 
                alt={e.title + " cover"} key={i} />
            </div>
            <div id="info">
              <div id="title" className='py-4 text-sm font-bold align-center'>{e.short_title}</div>
            </div>
          </div>
        </Link>
       ))}
    </div>
  )
}
