import React from 'react'
import { data } from '@/data/data'
import Order from '@/Components/Order'
const Orders = () => {
  return (
    <div className="bg-gray-100 min-h-[100vh]">
    <div className="flex justify-between p-4">
      <h1 className='font-bold text-xl'>Orders</h1>
      <h1 className='font-bold text-xl'>Welcome Back! Admin</h1>
    </div>
    <div className="m-2 bg-white rounded-lg border shadow-lg p-4">
      <div className="grid md:grid-cols-4 grid-cols-2 justify-between p-2 my-2">
        <h1 className='grid'>Order</h1>
        <h1 className="text-right md:text-left">Status</h1>
        <h1 className="hidden md:grid">Last Order</h1>
        <h1 className="hidden md:grid">Method</h1>
        
      </div>
      <div>

    
{
data.map((item)=>{
    return (
        <div key={item.id}>
        <Order name={item.name.first} order={item.total} status={item.status} lastorder={item.date} method={item.method}/>
        </div>
    )
})
}</div>
    </div>
   
  </div>
  )
}

export default Orders