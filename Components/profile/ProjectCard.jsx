import React from 'react'
import Image from 'next/image'
const ProjectCard = ({picture,title,name}) => {
  return (
    <div className='w-full my-4 lg:my-0'>
    <div className='relative h-56 w-full rounded-xl'>
        <Image className='rounded-xl object-cover shadow-2xl' src={picture} alt='pic' fill />
    </div>
    <div className='flex flex-col gap-2 items-start justify-center '>
        <p className='mt-3 text-sm text-gray-500'>{title}</p>
        <p className='font-bold text-xl '>{name}</p>
        <p className='break-words text-sm text-gray-500 w-full md:w-40'>As Uber works through a huge amount of internal management turmoil.</p>
        <div className=' flex justify-between items-center lg:flex lg:justify-start  my-2'>
            <button className='h-[46px] w-[100px] flex items-center justify-center rounded-lg hover:text-blue-400 hover:border-blue-400 text-blue-500 font-semibold text-sm border-blue-500 border  break-words'>View Project</button>
            <div className="avatar-group -space-x-6">
                <div className="avatar">
                    <div className="w-10 cursor-pointer h-10">
                        <img src="https://placeimg.com/192/192/people"  alt='' />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-10 cursor-pointer h-10">
                        <img src="https://placeimg.com/192/192/people" alt='' />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-10 cursor-pointer h-10">
                        <img src="https://placeimg.com/192/192/people" alt='' />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-10 cursor-pointer h-10">
                        <img src="https://placeimg.com/192/192/people" alt='' />
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
  )
}

export default ProjectCard