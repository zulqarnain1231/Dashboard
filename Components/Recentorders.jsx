import React from 'react'
import {FaShoppingBag} from 'react-icons/fa';
import { data } from '@/data/data';

const Recentorders = () => {
  return (
    <div className='col-span-1 w-full shadow-lg flex flex-col lg:h-[70vh] h-[50vh] p-4 m-auto relative bg-white border rounded-lg overflow-scroll'>
        <h1>Recent orders</h1>
        <ul>
            {
                data.map((item)=>{
                    return <li key={item.id}>
                        <div className='flex my-3 bg-gray-100 rounded-lg p-2 justify-between w-full'>
                         
                         <div className='flex gap-4'>
                         <span className='bg-gray-200 cursor-pointer px-2 text-center  py-3 rounded-lg text-purple-600'><FaShoppingBag /></span>
                        <div>
                        <h1 className='font-bold'>$ {item.total}</h1>
                         <p className='text-gray-400 md:hidden lg:flex'>{item.name.first}</p>
                        </div>
                         
                         </div>
                         <span className=' md:hidden lg:flex'>{item.date}</span>
                        </div>
                    </li>
                })
            }
        </ul>

    </div>
  )
}

export default Recentorders