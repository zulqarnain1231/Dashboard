import React from 'react'
import Image from 'next/image';
import mountain from '../../public/mountain.jpg'
const Header = () => {
  return (
    <div className='h-[40vh] md:h-[50vh] w-full my-4 relative'>
        <Image className='w-full  rounded-xl object-cover'  src={mountain} alt='mountain' fill />
  
    </div>
  )
}

export default Header;