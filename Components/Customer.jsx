import React from 'react'
import { RxPerson } from 'react-icons/rx'
import {BsThreeDotsVertical} from 'react-icons/bs'
const Customer = ({name,method,email,lastorder}) => {
  return (
    <div className='bg-gray-300 flex rounded-lg  justify-between p-3 my-3'>
        <div className='flex gap-2 text-center'>
             <span className='bg-gray-100 hover:bg-gray-200 text-purple-800  cursor-pointer p-2 rounded-lg inline-block'>
                <RxPerson size={20} />
             </span>
            <h1>{name}</h1>
        </div>
        <div>
            <h1>{email}</h1>
        </div>
        <div>
            <h1>{lastorder}</h1>
        </div>
        <div>
            <h1>{method}</h1>
        </div>
<div>
    <BsThreeDotsVertical />
</div>
    </div>
  )
}

export default Customer