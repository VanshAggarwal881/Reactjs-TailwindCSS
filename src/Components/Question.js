import React from 'react'

export default function Question() {
  return (
    <div className='bg-sky-500 p-4'>
        <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
            <div className='m-2'>
                <h1 className='text-[30px] font-bold text-white'><span className='text-red-600'>Warning! </span>Don't attempt to learn both simultaneously</h1>
                <span className='text-white'>Concentrate on one before moving to the other</span>
            </div>

            <div className='m-2'>
                <input type='email' className='rounded-md mb-2 p-4 mr-2 text-black' placeholder='Email' />
                <button className="bg-black text-white p-4 rounded-md ">Get Started</button>
            </div>

        </div>
    </div>
  )
}
