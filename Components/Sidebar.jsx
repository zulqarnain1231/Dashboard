import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'
import { RxDashboard, RxPerson, RxSketchLogo } from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { MdNotifications } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import 'react-modern-drawer/dist/index.css'
// import { IoMdContact } from 'react-icons/io'
import Drawer from 'react-modern-drawer'
import picture from '../public/abraham.jpg'
const Sidebar = ({ children }) => {
   const [isToggle, setIsToggle] = useState(false)
   const [isDrawer, setIsDrawer] = useState(false);
   const handleDrawer = () => {
      setIsDrawer((prevvalue) => !prevvalue)
   }
   const handleClick = () => {
      setIsToggle((prevvalue) => !prevvalue)

   }
   return (
      <div className='grid sm:grid-cols-[80px,calc(100%-80px)]'>
         <Drawer
            open={isDrawer}
            onClose={handleDrawer}
            direction='left'
            style={{ width: '20%' }}
         >
            <div className='flex flex-col py-4 items-center'>
               <Link onClick={handleDrawer} href='/'>
                  <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                     <RxSketchLogo size={20} />
                  </div>
               </Link>
               <span className='border-b-[2px] border-gray-200 p-2 w-full '></span>
               <Link onClick={handleDrawer} href='/'>
                  <div className='bg-gray-200 hover:bg-gray-300 hover:text-purple-800 my-3 cursor-pointer p-3 rounded-lg inline-block'>
                     <RxDashboard size={20} />
                  </div>
               </Link>
               <Link onClick={handleDrawer} href='/Customers'>
                  <div className='bg-gray-200 hover:bg-gray-300 hover:text-purple-800 my-3 cursor-pointer p-3 rounded-lg inline-block'>
                     <RxPerson size={20} />
                  </div>
               </Link>
               <Link onClick={handleDrawer} href='/Orders'>
                  <div className='bg-gray-200 hover:bg-gray-300 hover:text-purple-800 my-3 cursor-pointer p-3 rounded-lg inline-block'>
                     <HiOutlineShoppingBag size={20} />
                  </div>
               </Link>
               <Link onClick={handleDrawer} href='/'>
                  <div className='bg-gray-200 hover:bg-gray-300 hover:text-purple-800 my-3 cursor-pointer p-3 rounded-lg inline-block'>
                     <FiSettings size={20} />
                  </div>
               </Link>
            </div>
         </Drawer>
         <div className=' hidden sm:inline-block p-4 h-screen bg-white justify-between flex-col fixed w-20 border-r-[1px]'>
            <div className='flex flex-col items-center'>
               <Link href='/'>
                  <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                     <RxSketchLogo size={20} />
                  </div>
               </Link>
               <span className='border-b-[2px] border-gray-200 p-2 w-full '></span>
               <Link href='/'>
                  <div className='bg-gray-200 hover:bg-gray-300 hover:text-purple-800 my-3 cursor-pointer p-3 rounded-lg inline-block'>
                     <RxDashboard size={20} />
                  </div>
               </Link>
               <Link href='/Customers'>
                  <div className='bg-gray-200 hover:bg-gray-300 hover:text-purple-800 my-3 cursor-pointer p-3 rounded-lg inline-block'>
                     <RxPerson size={20} />
                  </div>
               </Link>
               <Link href='/Orders'>
                  <div className='bg-gray-200 hover:bg-gray-300 hover:text-purple-800 my-3 cursor-pointer p-3 rounded-lg inline-block'>
                     <HiOutlineShoppingBag size={20} />
                  </div>
               </Link>
               <Link href='/'>
                  <div className='bg-gray-200 hover:bg-gray-300 hover:text-purple-800 my-3 cursor-pointer p-3 rounded-lg inline-block'>
                     <FiSettings size={20} />
                  </div>
               </Link>
            </div>
            <div>

            </div>
         </div>

         <main className='w-full'>
            <div className='pb-4 w-full relative flex items-center justify-between sm:flex-row-reverse md:gap-4 sm:gap-2 px-6 sm:px-4 pt-3 text-right  bg-gray-50'>
               <span onClick={handleDrawer} className='cursor-pointer hover:text-purple-700 flex sm:hidden justify-center text-center pt-2 '>
                  <RxHamburgerMenu size={25} />
               </span>

               <div className='flex items-center gap-3'>
                  <span onClick={handleClick} className='hover:bg-gray-200 gap-1 text-gray-500 rounded-lg p-2 cursor-pointer hover:text-purple-700 '>
                     <MdNotifications size={25} />

                  </span>
                  <Link href='/Profile'>
                     <div className="avatar online">
                        <div className="w-10 h-10 mt-1 rounded-full relative">
                           <Image className='cursor-pointer  object-cover shadow-2xl  h-full w-full' src={picture} alt='avatar' height='100px' width='100px' /><Image className='rounded-lg cursor-pointer  object-cover shadow-2xl  h-16 w-16' src={require('../public/abraham.jpg')} alt='avatar' height='100px' width='100px' />
                        </div> </div></Link>
               </div>

               <input className='p-2 rounded-lg border-2 hidden md:flex focus:ring-1 focus:outline-none  focus:ring-purple-500 focus:border-purple-500' placeholder='Typre Here' type="text" />
               {
                  isToggle ? <div className='absolute z-10 p-3 rounded-lg border bg-white top-14 flex flex-col right-2 h-auto'>

                     <div className='w-full flex p-2 justify-between gap-2 rounded-lg cursor-pointer hover:bg-gray-200 '>
                        <p>  <span className='font-bold'>New messege</span> From Laur</p>
                        <p className='text-sm text-gray-400 pt-1'>13 minutes ago</p>
                     </div>
                     <div className='w-full flex p-2 justify-between gap-2 rounded-lg cursor-pointer hover:bg-gray-200 '>
                        <p>  <span className='font-bold'>New Album</span> By Jack</p>
                        <p className='text-sm text-gray-400 pt-1'>20 minutes ago</p>
                     </div>
                     <div className='w-full flex p-2 justify-between gap-2 rounded-lg cursor-pointer hover:bg-gray-200 '>
                        <p> Payment Successfully Completed</p>
                        <p className='text-sm text-gray-400 pt-1'>1 day ago</p>
                     </div> </div> : ''}</div>
            {children}
         </main>
      </div>
   )
}

export default Sidebar;