import React from 'react'

export default function SlimCard({data}) {
  return (
    <div id="card" className='py-4 flex flex-row gap-4'>
        <div id="image">
        <img src={"http://localhost:8000"+data.cover} className='w-16'/>
        </div>
        <div className='flex flex-col'>
            <span class='font-bold'>ISBN: {data.isbn}</span>
            <span id="title" className='font-bold text-xs'>{data.short_title}</span>
            <span id="authors" className='font-bold text-sm'>
                {(data.author.includes('by')) ? data.author : 'by ' + data.author}
            </span>         
        </div>
    </div>
    
 )
}
