import React from 'react'

export default function Message({color, children}) {
  return (
    <div id="title" className='flex place-items-center justify-center my-4'>
        <h1 className={`font-bold p-4 bg-${color}-500 border-${color}-700 text-${color}-900`}>{children}</h1>
    </div> 
    )
}
