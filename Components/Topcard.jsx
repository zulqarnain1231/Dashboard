import React from 'react'

const Topcard = ({title,price,percent,span,icon}) => {
  return (
    <div className={`flex flex-col border p-4 rounded-lg md:col-span-${span}    bg-white w-full shadow-lg`}>
<div className='flex justify-between'>

<div>
<span className={title == 'Daily Revenue'? 'bg-[#3298EE] inline-block p-3 md:-translate-y-7 rounded-xl  w-16 h-16 shadow-xl text-white':title == 'YTD Revenue'? 'bg-[#5BB25F] inline-block p-3 md:-translate-y-7 rounded-xl  w-16 h-16 shadow-xl text-white':'bg-[#E63572] inline-block p-3 md:-translate-y-7 rounded-xl  w-16 h-16 shadow-xl text-white'}>{icon}</span>
   
</div>
<div>
<h1 className='text-2xl font-bold'>${price}</h1>
    <p className='text-gray-500'>{title}</p>
</div>

    </div>
    <span className='border-b-[2px] border-gray-300 p-2 w-full '></span>
    <div className='mt-3'>
      <h1><span className='text-green-500 font-bold'>+{percent}%</span> More Than Previous Time</h1>
    </div>
    </div>
    
  )
}

export default Topcard