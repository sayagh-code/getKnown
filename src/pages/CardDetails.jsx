import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import{ FaFacebook, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const CardDetails = ({fetchURL}) => {

    const [cardDetails, setCardDetails] = useState({});
    const params = useParams();

    useEffect(()=>{
        axios.get(`${fetchURL}/${params.code}`).then(response => {
            setCardDetails(response.data);
            console.log(response.data)
        });
    },[fetchURL, params.code])

  return (
    <div className='w-full min-h-screen bg-gray-800 pt-16'>
            <div className='grid py-20 px-10 gap-5'>
                <div className='grid md:grid-cols-6 gap-10 bg-white rounded-lg shadow-md p-4'>
                    <img src={cardDetails.photo} alt="Profile" className='absolute z-40 top-44 left-20 w-20 h-20 object-cover rounded-full' />
                    <div className='col-span-3 h-[250px] md:h-[400px] relative'>
                        <img src={cardDetails.logo} alt="banniere"  className='absolute w-full h-full object-cover rounded-xl'/>
                    </div>
                    <div className='col-span-3 flex flex-col justify-around'>
                        <div className='mb-5 md:mb-0'>
                        {
                            cardDetails.company ? (
                                <p className='text-gray-700'>
                                    <span className='font-semibold'>Company:</span> {cardDetails.company}
                                </p>
                            ) : ('')
                        }
                        {
                            cardDetails.lastName || cardDetails.firstName ? (
                                <p className='text-gray-700'>
                                    <span className='font-semibold'>Full Name:</span> {cardDetails.lastName + ' '} {cardDetails.firstName}
                                </p>
                            ) : ('')
                        }
                        {
                            cardDetails.email ? (
                                <p className='text-gray-700'>
                                    <span className='font-semibold'>Email:</span> {cardDetails.email}
                                </p>
                            ) : ('')
                        }
                        {
                            cardDetails.phone ? (
                                <p className='text-gray-700'>
                                    <span className='font-semibold'>Phone:</span> 0{cardDetails.phone}
                                </p>
                            ) : ('')
                        }
                        {
                            cardDetails.site ? (
                                <p className='text-gray-700'>
                                    <span className='font-semibold'>Website: </span> 
                                    <a href={cardDetails.site} className='text-blue-500 hover:underline' target='_blank' rel='noopener noreferrer'>{cardDetails.site}</a>
                                </p>
                            ) : ('')
                        }
                        </div>
                        <div className='max-w-[900px] pr-5 flex flex-wrap justify-around mb-5 md:mb-0'>
                            {   
                                cardDetails.facebook ? (
                                    <Link className='flex mx-1 py-1' target="_blank" to={`https://www.facebook.com/${cardDetails.facebook}`}>
                                        <FaFacebook size={25} color='#056fe5' className='mr-1'/>{cardDetails.facebook}
                                    </Link>
                                ) : ('')
                            }
                            {
                                cardDetails.instagram ? (
                                    <Link className='flex mx-1 py-1' target="_blank" to={`https://www.instagram.com/${cardDetails.instagram}`}>
                                        <FaInstagram size={25} color='#fe0101' className='mr-1'/>{cardDetails.instagram}
                                    </Link>
                                ) : ('')
                            }
                            {
                                cardDetails.youtube ? (
                                    <Link className='flex mx-1 py-1' target="_blank" to={`https://www.youtube.com/user/${cardDetails.youtube}`}>
                                        <FaYoutube size={25} color='#fe0101' className='mr-1'/>{cardDetails.youtube}
                                    </Link>
                                ) : ('')
                            }
                            {
                                cardDetails.linkedin ? (
                                    <Link className='flex mx-1 py-1' target="_blank" to={`https://www.linkedin.com/in/${cardDetails.linkedin}`}>
                                        <FaLinkedinIn size={23} color='#006bac' className='mr-1'/>{cardDetails.linkedin}
                                    </Link>
                                ) : ('')
                            }
                            </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CardDetails