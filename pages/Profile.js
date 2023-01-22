import Header from '@/Components/profile/Header'
import Main from '@/Components/profile/Main'
import React from 'react'

const Profile = () => {
  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      <h1 className='text-xl font-bold'> Profile</h1>
      <Header />
      <Main />
    </div>
  )
}

export default Profile