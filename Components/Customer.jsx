import React from 'react'
import { RxPerson } from 'react-icons/rx'
import {BsThreeDotsVertical} from 'react-icons/bs'
const Customer = ({name,method,email,lastorder}) => {
  return (
    <div className='bg-gray-300 flex w-full items-center rounded-lg hover:shadow-lg justify-between p-3 my-3'>
        <div className='flex items-center gap-2 text-center'>
             <span className='bg-gray-100 hover:bg-gray-200 text-purple-800  cursor-pointer p-2 rounded-lg inline-block'>
                <RxPerson size={20} />
             </span>
            <h1>{name}</h1>
        </div>
        <div>
            <h1>{`${email}@gmail.com`}</h1>
        </div>
        <div className='hidden md:flex'>
            <h1>{lastorder}</h1>
        </div>
        <div className='hidden md:flex'>
            <h1>{method}</h1>
        </div>
<div className='cursor-pointer text-center pt-2 hidden md:flex'>
    <BsThreeDotsVertical />
</div>
    </div>
  )
}

export default Customer