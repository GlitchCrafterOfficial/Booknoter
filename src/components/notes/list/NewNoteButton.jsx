import React from 'react'

export default function NewNoteButton({icon, children}) {
  return (
    <div className='w-[18vw] h-[20vw] border-4 border-dotted border-gray-300 shadow-sm hover:bg-blue-100 cursor-pointer'>
            <div id="icon" className='text-center text-4xl font-bold relative bottom-0 text-gray-400 mt-[35%] cursor-pointer'>
            <span className='border-gray-200 px-4 py-2 rounded-md shadow-sm border-spacing-2 border-dotted border-2'>{icon}</span>
            <div className="text-center text-2xl font-bold text-gray-400 mt-4 cursor-pointer">{children}</div>
        </div>
    </div>
  )
}
