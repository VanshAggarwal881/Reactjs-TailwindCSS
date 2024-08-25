import React from 'react'

export default function Cards() {
  return (
    <div className='py-[100px]'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
            <div className='shadow-xl h-[400px] hover:scale-105 duration-500 flex flex-col items-center justify-evenly'>
                <h1 className='text-4xl font-bold '>DSA</h1>
                <h2 className='text-3xl font-bold text-gray-400'>Duration : 8 Months</h2>
                <button className='bg-black text-white p-5 w-[40%] rounded-md'>Start Learning</button>
            </div>

            <div className='shadow-xl h-[400px] hover:scale-105 duration-500 flex flex-col items-center justify-evenly'>
                <h1 className='text-4xl font-bold '>DEVELOPMENT</h1>
                <h2 className='text-3xl font-bold text-gray-400'>Duration : 10 Months</h2>
                <button className='bg-black text-white p-5 w-[40%] rounded-md'>Start Learning</button>
            </div>

            <div className='shadow-xl h-[400px] hover:scale-105 duration-500 flex flex-col items-center justify-evenly'>
                <h1 className='text-4xl font-bold '>DSA+DEVELOPMENT</h1>
                <h2 className='text-3xl font-bold text-gray-400'>Duration : 24 Months</h2>
                <button className='bg-black text-white p-5 w-[40%] rounded-md'>Start Learning</button>
            </div>
            

        </div>
    </div>
  )
}
