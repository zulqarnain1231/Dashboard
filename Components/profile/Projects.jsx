import Image from 'next/image';
import React from 'react'
import abrham from '../../public/mountain.jpg'
const Projects = () => {
  return (
    <div className='grid mt-6 w-full grid-cols-1 lg:grid-cols-3'>
        
        {/* Project 1 */}

     <div className=''>
        <div className='relative h-36  w-36 rounded-xl'>
<Image className='rounded-xl object-cover shadow-2xl' src={abrham} alt='pic' fill />
        </div>
        <div className='flex flex-col gap-2'>
            <p className='mt-3 text-sm text-gray-500'>Project #1</p>
            <p className='font-bold text-xl '>Modern</p>
            <p className='break-words text-sm text-gray-500 w-full'>As Uber works through a huge amount of internal management turmoil.</p>
        <div className='flex my-2'>
<button className='rounded-lg hover:text-blue-400 hover:border-blue-400 text-blue-500 font-semibold text-sm border-blue-500 border-2  break-words p-3'>View Project</button>
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

<div className=''>
        <div className='relative h-36  w-36 rounded-xl'>
<Image className='rounded-xl object-cover shadow-2xl' src={abrham} alt='pic' fill />
        </div>
        <div className='flex flex-col gap-2'>
            <p className='mt-3 text-sm text-gray-500'>Project #1</p>
            <p className='font-bold text-xl '>Modern</p>
            <p className='break-words text-sm text-gray-500 w-full'>As Uber works through a huge amount of internal management turmoil.</p>
        <div className='flex my-2'>
<button className='rounded-lg hover:text-blue-400 hover:border-blue-400 text-blue-500 font-semibold text-sm border-blue-500 border-2  break-words p-3'>View Project</button>
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