import React from 'react'

export default function TextInput({register, placeholder, name, additional, w}) {
  return (
    <input type="text" {...register(name, additional)} placeholder={placeholder}
       className={`p-2 border-2 rouded-full outline-none active:border-gray-500 focus:border-gray-500 ${w ? `w-[${w}]` : 'w-full'} placeholder:text-gray-800 placeholder:font-semibold`}
    />
  )
}
