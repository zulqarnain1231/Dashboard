import Image from 'next/image';
import React from 'react';
import { MessegesData } from '@/data/data';
import { BsThreeDotsVertical, BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import Messege from './Messege';
const Main = () => {
    return (
        <div className='bg-white p-2 mx-4 shadow-xl rounded-xl -translate-y-10'>
            <div className='flex justify-between p-2 w-full'>
                <div className='relative flex justify-between gap-2 '>

                    <div className='mt-1'> <Image className='rounded-lg cursor-pointer  object-cover shadow-2xl  h-16 w-16' src={require('../../public/abraham.jpg')} alt='avatar' height='100px' width='100px' />
                        <h1 className='font-bold'>Abraham Jhons</h1>
                        <h1 className='text-sm text-gray-400'> CEO / Co-Founder</h1>
                    </div>
                </div>
                <span className='cursor-pointer mt-2 p-2 h-10 bg-gray-200 rounded-lg hover:bg-purple-800 hover:ease-in duration-200 hover:text-white'><BsThreeDotsVertical size={20} /></span>
            </div>

            <div className='my-4 p-2   grid w-full grid-cols-1 lg:grid-cols-3'>

                {/* First div */}

                <div className='col-span-1 my-3 lg:my-0 lg:mr-6'>
                    <h1 className='font-bold'>Platform settings</h1>
                    <p className='text-gray-500 text-sm my-2'>ACCOUNT</p>
                    <div className='flex flex-col my-2 '>
                        <div className='flex my-3 gap-3'>
                            <input type="checkbox" name="" id="" className='toggle toggle-primary' />
                            <p className='text-gray-500 text-sm break-all'> Email me When Someone Follows me</p>
                        </div>
                        <div className='flex my-3 gap-3'>
                            <input type="checkbox" name="" id="" className='toggle toggle-primary' />
                            <p className='text-gray-500 text-sm break-all'> Email me When Someone Answers on my post</p>
                        </div>
                        <div className='flex my-3 gap-3'>
                            <input type="checkbox" name="" id="" className='toggle toggle-primary' />
                            <p className='text-gray-500 text-sm break-all'> Email me When Someone Mentions me</p>
                        </div>
                    </div>

                    <p className='text-gray-500 text-sm my-2'>APPLICATION</p>
                    <div className='flex flex-col my-2 '>
                        <div className='flex my-3 gap-3'>
                            <input type="checkbox" name="" id="" className='toggle toggle-primary' />
                            <p className='text-gray-500 text-sm break-all'> New Launches And Projects</p>
                        </div>
                        <div className='flex my-3 gap-3'>
                            <input type="checkbox" name="" id="" className='toggle toggle-primary' />
                            <p className='text-gray-500 text-sm break-all'> Monthly Product Updates</p>
                        </div>
                        <div className='flex my-3 gap-3'>
                            <input type="checkbox" name="" id="" className='toggle toggle-primary' />
                            <p className='text-gray-500 text-sm break-all'> Subscribe to NewsLetter</p>
                        </div>
                    </div>

                </div>

                {/* Second Div  */}

                <div className='col-span-1 my-3 lg:my-0 lg:mr-6'>
                    <h1 className='font-bold'>Profile Information</h1>
                    <p className='text-gray-500 my-3 text-sm break-words leading-6'> Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                    <hr className='my-8' />

                    <div className='flex gap-3 my-4'>
                        <h1 className='font-bold text-sm'>First Name:</h1>
                        <p className='text-gray-500 text-sm'>Alec M. Thompson</p>

                    </div>
                    <div className='flex gap-3 my-4'>
                        <h1 className='font-bold text-sm'>Mobile:</h1>
                        <p className='text-gray-500 text-sm'>(44) 123 1234 123</p>

                    </div>
                    <div className='flex gap-3 my-4'>
                        <h1 className='font-bold text-sm'>Email:</h1>
                        <p className='text-gray-500 text-sm'>alecthompson@mail.com</p>

                    </div>
                    <div className='flex gap-3 my-4'>
                        <h1 className='font-bold text-sm'>Location:</h1>
                        <p className='text-gray-500 text-sm'>USA</p>

                    </div>
                    <div className='flex gap-3 my-4'>
                        <h1 className='font-bold text-sm'>Social:</h1>
                        <div className='flex gap-3'>
                            <span className='cursor-pointer mt-1 text-blue-500'><BsFacebook size={15} /></span>
                            <span className='cursor-pointer mt-1 text-pink-500'><BsInstagram size={15} /></span>
                            <span className='cursor-pointer mt-1 text-blue-400'><BsTwitter size={15} /></span>
                        </div>
                    </div>
                </div>

                {/* Third Div */}

                <div className='col-span-1 my-3 lg:my-0'>
                    <h1 className='font-bold mb-2'>Platform Messeges</h1>
                    <div className='flex flex-col '>
                        {
                            MessegesData.map((item) => {
                                return (
                                    <Messege name={item.Name} pic={item.image} messege={item.messege} />
                                )
                            })
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Main;