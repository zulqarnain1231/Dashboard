import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import {BsThreeDotsVertical} from 'react-icons/bs'
const Order = ({name,method,status,order,lastorder}) => {
  return (
    <div className='bg-gray-300 grid md:grid-cols-4 grid-cols-2 rounded-lg hover:shadow-lg justify-between p-3 my-3'>
    <div className='flex gap-1 text-center'>
         <span className='bg-gray-100 hover:bg-gray-200 text-purple-800  cursor-pointer px-2 pt-3 rounded-lg inline-block'>
            <FaShoppingBag size={20} />
         </span>
         <div className='text-center gap-1 pl-4'>
            <h1 className='text-lg font-bold'>${order.toLocaleString()}</h1>
         <h1 className='text-gray-500 '>{name}</h1>
         </div>
        
    </div>
    <p className='text-gray-600 sm:text-left text-right mt-2'>
                  <span
                    className={
                      status == 'Processing'
                        ? 'bg-green-300 p-2 rounded-lg'
                        : status == 'Completed'
                        ? 'bg-blue-300 p-2 rounded-lg'
                        : 'bg-yellow-200 p-2 rounded-lg'
                    }
                  >
                    {status}
                  </span>
                </p>
    <div className='hidden md:grid'>
        <h1>{lastorder}</h1>
    </div>
    <div className='hidden md:flex justify-between'>
        <h1>{method}</h1>
        <BsThreeDotsVertical />
    </div>

</div>
  )
}

export default Order