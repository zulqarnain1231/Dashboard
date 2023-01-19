import Link from 'next/link';
import React from 'react'
import {RxDashboard, RxPerson, RxSketchLogo} from 'react-icons/rx'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'
const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className=' flex p-4 h-screen bg-white justify-between flex-col fixed w-20 border-r-[1px]'>
            <div className='flex flex-col items-center'>
                <Link href='/'>
                <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                <RxSketchLogo size={20} />
             </div>
                </Link>
                <span className='border-b-[2px] border-gray-200 p-2 w-full '></span>
                <Link href='/'>
                <div className='bg-gray-200 hover:bg-gray-300 my-3 cursor-pointer p-3 rounded-lg inline-block'>
                <RxDashboard size={20} />
             </div>
                </Link>
                <Link href='/'>
                <div className='bg-gray-200 hover:bg-gray-300 my-3 cursor-pointer p-3 rounded-lg inline-block'>
                <RxPerson size={20} />
             </div>
                </Link>
                <Link href='/'>
                <div className='bg-gray-200 hover:bg-gray-300 my-3 cursor-pointer p-3 rounded-lg inline-block'>
                <HiOutlineShoppingBag size={20} />
             </div>
                </Link>
                <Link href='/'>
                <div className='bg-gray-200 hover:bg-gray-300 my-3 cursor-pointer p-3 rounded-lg inline-block'>
                <FiSettings size={20} />
             </div>
                </Link>
            </div>
            <div>

            </div>
        </div>

        <main className='w-full ml-20'>{children}</main>
    </div>
  )
}

export default Sidebar;