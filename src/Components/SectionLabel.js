import React from 'react'

const SectionLabel = ({name}) => {
  return (
    <div className='flex items-center gap-2 text-red-500 font-medium'>
            <span className='bg-red-500 h-7 w-2 p-2 rounded'></span>
            <p>{name}</p>
    </div>
  )
}

export default SectionLabel