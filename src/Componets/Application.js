import React from 'react'


const Application = ({Applicationdata}) => {
  return (
    <div className='grid grid-cols-4 pb-10 px-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
      {Applicationdata.map((itme) => {
        return (
          <div className='flex flex-col justify-center items-center p-4 shadow-lg m-4'>
            <img className='w-16 ' src={itme.src} alt='' />
            <p className='text-3xl text-center'>{itme.heading}</p>
          </div>
        )
      })}
     

    </div>
  )
}

export default Application