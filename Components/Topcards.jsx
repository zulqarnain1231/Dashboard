import React from 'react'
import Topcard from './Topcard'
import { UserPlusIcon,
  CurrencyDollarIcon,
  ChartBarIcon
} from '@heroicons/react/24/solid'
const Topcards = () => {
  return (
    <div className='grid grid-cols-1 p-4 my-4 md:grid-cols-6  gap-4'>
     <Topcard price='2,4323' title='Daily Revenue' icon={<CurrencyDollarIcon size={20} />} percent='12' span='2' />
     <Topcard price='7,3323' title='YTD Revenue' icon={<ChartBarIcon size={20} />} percent='17' span='2' />
     <Topcard price='3323' title='Customers' icon={<UserPlusIcon size={20} />} percent='20' span='2' />
    </div>
  )
}

export default Topcards