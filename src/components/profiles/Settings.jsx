import React from 'react'

const Settings = () => {
  return (
    <div>
        <ul className='text-2xl font-thin space-y-1'>
          <li><a href="#">General</a></li>
          <li><a href="#">Edit Profile</a></li>
          <li><a href="#">Password</a></li>
          <li className='pb-6'><a href="#">Switch Account</a></li>
          <hr className='w-56 h-[2px] bg-gray-300' />
          <li className='text-red-500 cursor-pointer hover:text-gray-800 pt-1'>Delete Account</li>
        </ul>
    </div>
  )
}

export default Settings