import React from 'react'
import Card from '../../Template/Card'

function TvandWatchCard(props) {
  let {order,mainText,paraText,videoSrc,imgSrc,videoStyle} = props; 
  return (
    <Card>
        <div className=' min-h-[540px] flex items-center justify-around text-white w-screen px-32'>
            
            <div className={order}>
                <h1 className='text-5xl font-bold mb-3'>{mainText}</h1>
                <p className='text-2xl font-medium w-[550px]'>{paraText}</p>
            </div>
            <div className='flex items-center justify-center w-1/2'>

                <div className='absolute'>
                    <img className='h-96 my-24' src={imgSrc} alt='tv' />
                </div>
                <video  className={videoStyle} autoPlay={true} muted playsinline loop><source  src={videoSrc} type="video/mp4" /></video>
            
            </div>
        </div>

        {/* <div className='flex items-center justify-around border-zinc-600 border-2 bg-zinc-300 '>
            <div className=' h-[100px] w-[100px] ' >
                <div className='border-red-700 border-2  h-[50px] w-[50px] order-2' ></div>
            </div>
            <div className='  h-[100px] w-[100px] ' >
                <div className='border-green-700 border-2  h-[50px] w-[50px] order-2' ></div>
            </div>
        </div> */}
    </Card>
  )
}

export default TvandWatchCard

// right-[15%] w-[372px] top-[125.5%] right-[10%]