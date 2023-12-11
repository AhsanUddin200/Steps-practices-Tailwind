import React from 'react'

const Sheet = () => {
  return (
    <div className='p-12  bg-pink-100'>
   <div className='grid  grid-cols-12 grid-rows-6 shadow-2xl '>
   <div className='col-span-12 text-gray-50 bg-slate-600 p-4 font-bold rounded-t-lg'>Header
   </div>
   <div className='col-span-3 row-span-6 bg-gray-600 p-4 font-bold'>Slidebar
   <p className='text-white'>----------------------------------</p>
   <p className='text-white'>----------------------------------</p>
   <p className='text-white'>----------------------------------</p>
   <p className='text-white'>----------------------------------</p>
    <p className='text-white'>----------------------------------</p></div>
   
<div className='col-span-9 row-span-6 bg-white p-4 font-bold '>
    Main Content
    <p className='text-gray '>----------------------------------</p>
    <p className='text-gray'>----------------------------------</p>
    <p className='text-gray'>----------------------------------</p>
    <p className='text-gray'>----------------------------------</p>
    <p className='text-gray'>----------------------------------</p> <p className='text-gray'>----------------------------------</p></div>
   <div className='font-bold col-span-12 text-gray-50 bg-slate-600 p-4 rounded-b-lg'>Footer</div>
   </div>
   </div>
  )
}

export default Sheet
