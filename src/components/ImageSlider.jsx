import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'
import { Link } from 'react-router-dom';

const ImageSlider = ({fetchURL}) => {

    const [slides, setSlides] = useState([]);

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            let cards = response.data.result.filter((card)=> card.banniere !== 'https://ilyas.serveurproduction.xyz/uploads/icons/logo.png')
            setSlides(cards);
            console.log(cards);
        })
    },[fetchURL])

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
        {slides.length > 0 && (
            <Link to={`/CardDetails/${slides[currentIndex].code}`}>
                <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' 
                    style={{backgroundImage: `url(${slides[currentIndex].banniere})`}}>
                </div>
            </Link>
        )}
        <div className='absolute top-[50%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className='absolute top-[50%] translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} />
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
                <div className='text-2xl cursor-pointer' key={slideIndex} onClick={()=>goToSlide(slideIndex)}>
                    <RxDotFilled />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider