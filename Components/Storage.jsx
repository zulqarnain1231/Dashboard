import React from 'react'

const Storage = () => {
  return (
    <div  className='h-full bg-white rounded-lg shadow-xl px-8 py-10 grid grid-cols-2'>
        <div>
        <div className="radial-progress h-28 w-28 bg-purple-700 text-primary-content border-4 border-purple-700" style={{"--value":70}}>70%</div>
        </div>
        <div className='felx flex-col  '>
            <h1 className='font-semibold my-1 text-purple-700 text-xl'>Upgrade Your Storage</h1>
            <p className='text-sm my-1 text-gray-500'>Lorem ipsum dolor sit amet, onsectetur.</p>
            <button className='rounded-lg my-1 py-2 font-semibold px-3 bg-purple-700 cursor-pointer text-white hover:bg-purple-500'>Upgrade</button>
        </div>
    </div>
  )
}

export default Storage