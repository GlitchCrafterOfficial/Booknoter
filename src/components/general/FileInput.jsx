import React, {useState} from 'react'

export default function FileInput({color, initialLabel}) {
  const [defaultLabel, setDefaultLabel] = useState(initialLabel)
  const changeName = (e) => {
    let file = e.files[0]
    if (file) {
      setDefaultLabel(file.name)
    } else {
      setDefaultLabel(initialLabel)
    }
  }  
  return (
    <div id="file">
      <input onChange={changeName} type="file" name="Book Cover" id='cover' />
      <div className={`hover:bg-${color}-500 flex w-[25vw] p-3 rounded-md shadow-sm gap-2 my-5 bg-${color}-400`}>
        <span><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="16px" height="19px" viewBox="0 0 32 32" version="1.1"> <path d="M30 2.497h-28c-1.099 0-2 0.901-2 2v23.006c0 1.099 0.9 2 2 2h28c1.099 0 2-0.901 2-2v-23.006c0-1.099-0.901-2-2-2zM30 27.503l-28-0v-5.892l8.027-7.779 8.275 8.265c0.341 0.414 0.948 0.361 1.379 0.035l3.652-3.306 6.587 6.762c0.025 0.025 0.053 0.044 0.080 0.065v1.85zM30 22.806l-5.876-6.013c-0.357-0.352-0.915-0.387-1.311-0.086l-3.768 3.282-8.28-8.19c-0.177-0.214-0.432-0.344-0.709-0.363-0.275-0.010-0.547 0.080-0.749 0.27l-7.309 7.112v-14.322h28v18.309zM23 12.504c1.102 0 1.995-0.894 1.995-1.995s-0.892-1.995-1.995-1.995-1.995 0.894-1.995 1.995c0 1.101 0.892 1.995 1.995 1.995z"/></svg></span>
        <label htmlFor="cover" id='filename' className='font-bold'>{defaultLabel}</label>
      </div>
    </div>
  )
}
  
