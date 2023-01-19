import React from 'react'

const Topcard = ({title,price,percent,span}) => {
  return (
    <div className={`flex justify-between border p-4 rounded-lg col-span-${span}  sd bg-white w-full shadow-lg`}>

<div>
    <h1 className='text-2xl font-bold'>${price}</h1>
    <p className='text-gray-500'>{title}</p>
</div>
<div>
    <h1 className='py-3 px-1 bg-green-200 text-green-600 font-bold text-lg rounded-lg items-center'>+{percent}%</h1>
</div>

    </div>
  )
}

export default Topcard