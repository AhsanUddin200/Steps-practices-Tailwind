import React from 'react'

const Pricing = () => {
  return (
    <div className='p-4 bg-gray-300 '>
      <div className='grid grid-cols-3 grid-rows-1 bg-pink-100 gap-10 p-6 rounded-lg shadow-lg'>
        
      <div className='col-span-1 row-span-1  bg-white p-6 rounded-xl text-black font-bold text-lg'>
            
            Standard
            <p className='text-sm font-thin'>Monthy Plan</p>

            <p className='text-3xl'>
                $25
            </p>
            
          
          </div>

          <div className='col-span-1 row-span-1  bg-pink-600 p-6 rounded-xl text-white font-bold text-lg '>
            
            Popular
            <p className='text-sm font-thin'>Monthy Plan</p>

            <p className='text-3xl'>
                $40
            </p>
            
          
          </div>

          <div className='col-span-1 row-span-1  bg-white p-6 rounded-xl text-black font-bold text-lg'>
            
            Premium
            <p className='text-sm font-thin'>Monthy Plan</p>

            <p className='text-3xl'>
                $55
            </p>
            
          
          </div>
         
          
        
          

      
      </div>
    </div>
  )
}

export default Pricing
