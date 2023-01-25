import React from 'react'

const EmailSubscribers = () => {
  return (
    <div className='h-full bg-white rounded-lg shadow-xl p-6'>
        <div className='w-full grid grid-cols-2 mt-3 mb-5'> 
         <div>
            <p className='font-bold text-xl'>7,642</p>
            <p className='font-semibold text-pink-600'>Total Email subscirbers</p>
         </div>
         <div className='w-full text-right'>
         <span className='py-2 px-3 rounded-lg bg-pink-600 text-white text-center font-semibold hover:bg-pink-500'>Compose Email</span>

         </div>
        </div>
        <p className='text-sm text-gray-500 w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
        </div>
  )
}

export default EmailSubscribers