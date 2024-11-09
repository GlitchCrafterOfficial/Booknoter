import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkButton({icon, label, to}) {
  return (
    <Link to={to}>
      <div className='bg-blue-300 p-2 rounded-md px-4 hover:bg-blue-500 font-bold'>
        <span id="icon">{icon}</span>
        <span id="description" className='ml-2'>{label}</span>
      </div>
    </Link>
    )
}
