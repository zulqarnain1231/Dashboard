import Image from 'next/image';
import React from 'react'
import project1 from '../../public/project1.jpg'
import project2 from '../../public/project2.jpg'
import project3 from '../../public/project3.jpg'
import project4 from '../../public/project4.jpg'
const Projects = () => {
    return (
        <div className='grid mt-6 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

            {/* Project 1 */}

            <div className='md:mr-2 my-4 lg:my-0'>
                <div className='relative h-56 w-full md:h-46 md:w-46 lg:h-40  lg:w-40 rounded-xl'>
                    <Image className='rounded-xl object-cover shadow-2xl' src={project1} alt='pic' fill />
                </div>
                <div className='flex flex-col gap-2 '>
                    <p className='mt-3 text-sm text-gray-500'>Project #1</p>
                    <p className='font-bold text-xl '>Modern</p>
                    <p className='break-words text-sm text-gray-500 w-full md:w-40'>As Uber works through a huge amount of internal management turmoil.</p>
                    <div className=' flex justify-between lg:flex lg:justify-start  my-2'>
                        <button className='rounded-lg hover:text-blue-400 hover:border-blue-400 text-blue-500 font-semibold text-sm border-blue-500 border  break-words p-3'>View Project</button>
                        <div className="avatar-group -space-x-6">
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Project 2 */}

            <div className='my-4 lg:my-0 '>
                <div className='relative h-56 w-full md:h-46 md:w-46 lg:h-40  lg:w-40 rounded-xl'>
                    <Image className='rounded-xl object-cover shadow-2xl' src={project2} alt='pic' fill />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='mt-3 text-sm text-gray-500'>Project #2</p>
                    <p className='font-bold text-xl '>Scandinavian</p>
                    <p className='break-words text-sm text-gray-500 w-full md:w-40'>Music is something that every person has his or her own specific opinion.</p>
                    <div className=' flex justify-between lg:flex lg:justify-start  my-2'>
                        <button className='rounded-lg hover:text-blue-400 hover:border-blue-400 text-blue-500 font-semibold text-sm border-blue-500 border  break-words p-3'>View Project</button>
                        <div className="avatar-group -space-x-6">
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Project3 */}

            <div className='md:mr-2 my-4 lg:my-0'>
                <div className='relative h-56 w-full md:h-46 md:w-46 lg:h-40  lg:w-40 rounded-xl'>
                    <Image className='rounded-xl object-cover shadow-2xl' src={project3} alt='pic' fill />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='mt-3 text-sm text-gray-500'>Project #3</p>
                    <p className='font-bold text-xl '>Minimalist</p>
                    <p className='break-words text-sm text-gray-500 w-full md:w-40'>Music is something that every person has his or her own specific opinion.</p>
                    <div className=' flex justify-between lg:flex lg:justify-start  my-2'>
                        <button className='rounded-lg hover:text-blue-400 hover:border-blue-400 text-blue-500 font-semibold text-sm border-blue-500 border  break-words p-3'>View Project</button>
                        <div className="avatar-group -space-x-6">
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Project 4 */}

            <div className=' my-4 lg:my-0 '>
                <div className='relative h-56 w-full md:h-46 md:w-46 lg:h-40  lg:w-40 rounded-xl'>
                    <Image className='rounded-xl object-cover shadow-2xl' src={project4} alt='pic' fill />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='mt-3 text-sm text-gray-500'>Project #4</p>
                    <p className='font-bold text-xl '>Gothic</p>
                    <p className='break-words text-sm text-gray-500 w-full md:w-40'>Music is something that every person has his or her own specific opinion.</p>
                    <div className=' flex justify-between lg:flex lg:justify-start  my-2'>
                        <button className='rounded-lg hover:text-blue-400 hover:border-blue-400 text-blue-500 font-semibold text-sm border-blue-500 border  break-words p-3'>View Project</button>
                        <div className="avatar-group -space-x-6">
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 cursor-pointer h-10">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Projects;