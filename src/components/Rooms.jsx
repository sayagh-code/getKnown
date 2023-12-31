import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Variety of Gadgets</h3>
            <p className='pt-4'>Unlock New Realms of Interaction with NFC Gadgets: Seamlessly connect with your environment using cutting-edge NFC technology. Explore a range of NFC gadgets to elevate your experience – from cards and wristbands to stickers and more!</p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full' src="https://i.pinimg.com/750x/20/c8/4b/20c84bb9a0b847352ababbcc45d56302.jpg" alt="/" />
            <img className='object-cover w-full h-full row-span-2' src="https://taptag.shop/cdn/shop/products/silicone-minimalist-nfc-wristband-343685.jpg?v=1679625962&width=2048" alt="/" />
            <img className='object-cover w-full h-full' src="https://gobright.com/wp-content/uploads/2021/11/NFC-Sticker.jpg" alt="/" />
        </div>
    </div>
  )
}

export default Rooms