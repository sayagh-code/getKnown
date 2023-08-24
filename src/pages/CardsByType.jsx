import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';

const CardsByType = ({fetchURL}) => {

    const [list, setList] = useState([]);

    const [page, setPage] = useState(0);

    const params = useParams();

    useEffect(()=>{
        axios.get(`${fetchURL}/${params.type}`).then((response)=>{
            let l=response.data.result.filter((data)=> data.company !== '');
            console.log(l);
            setList(l);
        });
    },[fetchURL, params.type])

    const slideLeft = () =>{
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 175;
    }

    const slideRight = () =>{
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 175;
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
        {list.slice(page*10, page*10+10).map((card, cardIndex)=>(
          <Link to={`/CardDetails/${card.code}`} key={cardIndex} className='grid md:grid-cols-5 lg:grid-cols-7 gap-20 bg-white rounded-lg shadow-md p-4'>
            <img src={card.banniere} alt="/" className='col-span-1 w-full h-full object-cover rounded-md'/>
            <div className='md:col-span-4 lg:col-span-6 flex flex-col justify-center flex-1'>
              <h1 className='text-2xl font-semibold'>{card.company}</h1>
            </div>
          </Link>
        ))}
        </div>
      </div>
      <div id='slider' className='mt-8 mb-[-4rem] w-[15%] m-auto h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide'>
      <MdChevronLeft onClick={slideLeft} className='left-[10%] absolute opacity-50 hover:opacity-100 cursor-pointer z-100' size={40} />
      <MdChevronRight onClick={slideRight} className='right-[10%] absolute opacity-50 hover:opacity-100 cursor-pointer z-100' size={40} />
        {pages().map((el, index) => (
          <div onClick={()=>changePage(index)} key={index} className='inline-block cursor-pointer py-2 px-4 border-white border-[1px] font-bold text-white bg-gray-800'>{el}</div>
        ))}
      </div>
    </>
  )
}

export default CardsByType