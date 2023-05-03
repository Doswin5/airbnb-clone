import React from 'react'

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <div className='relative cursor-pointer w-full my-16'>
      <div className="relative">
        <img src={img} alt="" className='object-cover h-96 w-full rounded-2xl' />
      </div>
      <div className="absolute top-16 md:top-24 left-8 md:left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p className="">{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-4">{buttonText}</button>
      </div>
    </div>
  )
}

export default LargeCard