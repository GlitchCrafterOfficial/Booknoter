import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='flex justify-around items-center'>
      <div></div>
      <div id='logo' className='text-2xl mt-4 font-logo'>
        <Link to='/'>
        <span>📚👀</span>
        <span> BookNoter</span>
        </Link>

      </div>
      <div></div>
    </div>
    )
}
