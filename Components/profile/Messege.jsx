import React from 'react'
import Image from 'next/image'
const Messege = ({name,messege,pic}) => {
  return (
    <div className='my-3 flex justify-between gap-1 md:gap-3 relative'>
        <div className='relative flex gap-2'>
        <Image className='rounded-lg cursor-pointer  object-cover shadow-xl  h-12 w-12' src={pic} alt='avatar' height='500' width='500' />
        <div className='flex flex-col gap-1'>
        <h1 className='font-bold text-sm'>{name}</h1>
        <p className='break-word text-sm text-gray-500 '>{messege}</p>
        </div>
        
        </div>
 
<span className='px-3 pt-3 pb-0 rounded-lg cursor-pointer font-semibold duration-300 ease-in hover:bg-blue-100 text-sm text-blue-600'>Reply</span>
    </div>
  )
}

export default Messege