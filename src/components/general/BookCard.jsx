import React from 'react'

export default function BookCard({book}) {
  return (
        <div id="bookcard" className='transition-transform duration-100 hover:shadow-sm text-center hover:scale-105'>
        <div id="image" className='flex justify-center'>
        <img 
            className="w-[15vw]"
            src={"http://localhost:8000"+book.cover} 
            alt={book.title + " cover"} />
        </div>
        <div id="info">
        <div id="title" className='py-4 text-sm font-bold align-center'>{book.short_title}</div>
        </div>
    </div>
    )
}
