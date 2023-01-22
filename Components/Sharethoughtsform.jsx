import React from 'react'
import { AiOutlinePicture, AiFillCalendar } from 'react-icons/ai'
import { MdCamera } from 'react-icons/md'

const Sharethoughtsform = () => {
    return (
        <div className='md:col-span-2 border lg:gap-7 rounded-lg p-4 shadow-lg bg-white  h-[50vh]'>
            <div>
                <h1 className='font-bold my-4 text-left text-gray-600'>Share Your Thoughts</h1>
                <textarea className='border-2 focus:outline-none focus:ring-1 focus:ring-purple-700 focus:border-purple-700 rounded-lg w-full' name="messege" id="messege" cols="93" rows="5"></textarea>
            </div>
            <div className='my-4 flex justify-between'>
                <button className='bg-purple-600 text-white cursor-pointer rounded-lg py-2 px-4 hover:bg-purple-800'>Share Post</button>
                <div className='flex justify-between gap-3'>
                    <span className='cursor-pointer text-gray-400 hover:text-gray-600'><AiOutlinePicture size={20} /></span>
                    <span className='cursor-pointer text-gray-400 hover:text-gray-600'><MdCamera size={20} /></span>
                    <span className='cursor-pointer text-gray-400 hover:text-gray-600'><AiFillCalendar size={20} /></span>
                </div>
            </div>
        </div>
    )
}

export default Sharethoughtsform