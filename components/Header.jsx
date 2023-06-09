import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/24/solid'



const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-8'>
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image 
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input 
          type="text"
          placeholder='Start your search'
          className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400'
        />
        <MagnifyingGlassIcon 
          className='h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2 hover:bg-red-600'
        />
      </div>

      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className='hidden md:inline cursor-pointer hover:text-gray-900'>Become a host</p>
        <GlobeAltIcon
          className='h-6 cursor-pointer'
        />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <UserCircleIcon 
            className='h-6 cursor-pointer'
          />

        </div>
      </div>
    </header>
  )
}

export default Header