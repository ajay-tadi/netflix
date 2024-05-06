import React from 'react'
import Navbar from '../Navbar/Navbar'
import GetstartedCard from './GetstartedCard'
import TvandWatchCard from './TvandWatchCard'
import DownloadCard from './DownloadCard'
import FaQCard from './FaQCard'
import ContactCard from './ContactCard'

function GetstartedMain() {
  return (
    <div className='bg-black '>
        <Navbar />
        <GetstartedCard />
        <TvandWatchCard  
          mainText='Enjoy on your TV' 
          paraText='Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.' 
          order='' 
          videoSrc='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' 
          imgSrc='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' 
          videoStyle='h-56  w-[372px] mb-4 mr-1' />
          <DownloadCard />
        <TvandWatchCard  
          mainText='Watch everywhere' 
          paraText='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' 
          order='' 
          videoSrc='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v' 
          imgSrc='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png' 
          videoStyle='h-[11rem]  w-[372px] mb-[7.5rem] mr-[0.25rem]' />
        <TvandWatchCard  
          mainText='Create profiles for kids' 
          paraText='Send children on adventures with their favourite characters in a space made just for them—free with your membership.' 
          order='order-1' 
          videoSrc='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v' 
          imgSrc='https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d' 
          videoStyle='hidden' />
          <FaQCard />
          <ContactCard />
    </div>
  )
}

export default GetstartedMain