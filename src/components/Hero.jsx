import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src='https://intelity.com/wp-content/uploads/Mobile-Blog-Update-Digital-Assets-210205-Featured-Image.jpg' alt=''/>
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p>All inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>The smart business card</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                  Empower Your Network: Craft Your Smart Business Card via NFC and Forge Connections at the Tap of a Finger!
                </p>
                <button className='bg-white text-black'>Download Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero