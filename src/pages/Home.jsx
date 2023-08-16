import React from 'react'
import Hero from '../components/Hero'
import Offers from '../components/Offers'
import Plan from '../components/Plan'
import Rooms from '../components/Rooms'
import ImageSlider from '../components/ImageSlider'
import requests from '../services/Requests'

const Home = () => {
  return (
    <>
        <Hero />
        <Offers />
        <Plan />
        <Rooms />
        <ImageSlider fetchURL={requests.cardsDetails} />
    </>
  )
}

export default Home