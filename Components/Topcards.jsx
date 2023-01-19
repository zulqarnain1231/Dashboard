import React from 'react'
import Topcard from './Topcard'
const Topcards = () => {
  return (
    <div className='grid grid-cols-1 p-4 my-4 md:grid-cols-5 lg:gap-5 gap-4'>
     <Topcard price='2,4323' title='Daily Revenue' percent='12' span='2' />
     <Topcard price='7,3323' title='YTD Revenue' percent='17' span='2' />
     <Topcard price='3323' title='Customers' percent='20' span='1' />
    </div>
  )
}

export default Topcards