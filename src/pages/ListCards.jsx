import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const ListCards = ({fetchURL}) => {

  const [list, setList] = useState([]);

  const [page, setPage] = useState(0);

  useEffect(()=>{
    axios.get(fetchURL).then((response)=>{
      let l=response.data.result.filter((data)=> data.company !== '');
      setList(l);
    });
  },[fetchURL])

  const slideLeft = () =>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 100;
}

const slideRight = () =>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 100;
}

  const pages = () => {
    const p = [];
    for (let i = 0; i < Math.ceil(list.length/10); i++) {
        p.push(i + 1);
    }
    return p;
  }

  function changePage(index) {
    setPage(index);
  }

  return (
    <>
      <div className='w-full min-h-screen bg-gray-800 pt-10'>
        <div className='grid py-20 px-10 gap-10' style={{ gridAutoRows: '1fr' }}>
        {list.slice(page*10, page*10+9).map((card, cardIndex)=>(
            <div key={cardIndex} className='grid md:grid-cols-5 lg:grid-cols-7 gap-20 bg-white rounded-lg shadow-md p-4'>
              <img src={card.banniere} alt="/" className='md:col-span-1 lg:col-span-1 w-full h-full object-cover rounded-md'/>
              <div className='md:col-span-4 lg:col-span-6 flex flex-col justify-center flex-1'>
                <h1 className='text-2xl font-semibold'>{card.company}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id='slider' className='mt-8 mb-[-4rem] w-[15%] m-auto h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide'>
      <MdChevronLeft onClick={slideLeft} className='left-[10%] absolute opacity-50 hover:opacity-100 cursor-pointer z-100' size={40} />
      <MdChevronRight onClick={slideRight} className='right-[10%] absolute opacity-50 hover:opacity-100 cursor-pointer z-100' size={40} />
        {pages().map((el, index) => (
          <div onClick={()=>changePage(index)} key={index} className='inline-block cursor-pointer p-2'>{el}</div>
        ))}
      </div>
    </>
  )
}

export default ListCards