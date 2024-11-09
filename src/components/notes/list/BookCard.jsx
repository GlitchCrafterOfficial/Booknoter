import React, {useState} from 'react'
import cutDescription from '../../../hooks/utils'

export default function BookCard({data}) {
  let [newDescription, modified] = cutDescription(data.description, 40)
  const [description, setDescription] = useState(newDescription)
  const revealDescription = () => {

    if (modified) {
      console.log('opla')

      setDescription(data.description)
      modified = false
    } else {
      setDescription(cutDescription(data.description, 40))
      modified = true
    }

  }

  return (
    <div id="card" className='py-4 flex flex-row mx-4 border-gray-200 border-2 px-4 rounded-md shadow-sm'>
      <div id="image" className='w-32'>
        <img src={"http://localhost:8000"+data.cover} />
      </div>
      <div id="cardContent" className='flex flex-col px-4'>
        <span id="isbn" className='font-sm font-bold'>ISBN: {data.isbn}</span>

        <span id="title" className='text-lg font-bold'>
          {data.short_title}
        </span>
        <span id="authors" className='font-bold text-sm'>
          {(data.author.includes('by')) ? data.author : 'by ' + data.author}
        </span>
        <span className='text-xs max-w-[60vw]'>
          {description} {modified ? <button onClick={revealDescription} 
                                            className='px-1 text-blue-400 hover:underline cursor-pointer'>Ver mas</button>:undefined}
        </span>
      </div>

    </div>
  )
}
