import React from 'react'

export default function Button({icon, label, onclick}) {
  return (
        <button onClick={onclick} className='bg-blue-300 p-2 rounded-md px-4 hover:bg-blue-500 font-bold'>
            <span id="icon">{icon}</span>
            <span id="description" className='ml-2'>{label}</span>
        </button>
    )
}
