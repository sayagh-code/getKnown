import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://www.androidauthority.com/wp-content/uploads/2021/09/Mi-Band-6-NFC-global-variant-scaled.jpg" alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1626682561863-fdbb965de0dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://plus.unsplash.com/premium_photo-1681748777406-3892175ab78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1472148439583-1f4cf81b80e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80" alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1534078362425-387ae9668c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="/" />
      </div>
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Fascinate Your Customer</h3>
        <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, itaque?</p>
        <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo dolore et earum!</p>
        <div>
          <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
          <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
        </div>
      </div>
    </div>
  )
}

export default Plan