import React from 'react'
import Image from 'next/image'

const ExploreCard = ({ image, location, distance }) => {
  return (
    <div className='flex items-center gap-x-4 cursor-pointer hover:bg-gray-100 rounded-lg transition duration-300 ease-out'>
      <img src={image} alt="" className='h-24 w-24 rounded-lg' />
      <div className="">
        <h3 className="font-semibold">
          {location}
        </h3>
        <p>
          {distance}
        </p>
      </div>
    </div>
  )
}

export default ExploreCard