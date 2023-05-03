import React from 'react'

const LiveCard = ({ image, title }) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='h-80 w-80 mb-3'>
        <img src={image} alt="" className='object-cover rounded-xl' />
      </div>
      <p className='font-semibold text-lg'>{title}</p>
    </div>
  )
}

export default LiveCard