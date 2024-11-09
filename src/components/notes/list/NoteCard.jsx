import React from 'react'
import { Link } from 'react-router-dom';

export default function NoteCard({ noteData }) {  
  return (
    <Link to={`/note/view/${noteData.id}`}>

      <div style={{backgroundColor: noteData.color}} className='p-2  w-[18vw] rounded-md shadow-md hover:scale-105 transition-all duration-100 hover:shadow-lg cursor-pointer'>
        <div className='container h-[19vw]'>
          <div className="title font-bold p-2">
            {noteData.title}
          </div>
          <div className='p-2 flex flex-col'>
            Tags:
            <span className='font-bold '>
              {noteData.tags}
            </span>
            </div>
          <div className='p-2'>
            pp.{noteData.book_pages}
          </div>
        </div>
      </div>
    </Link>

  )
}
