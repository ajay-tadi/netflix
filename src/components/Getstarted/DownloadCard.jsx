import React from 'react'
import Card from '../../Template/Card'

function DownloadCard() {
  return (
    <Card>
        <div className=' min-h-[540px] flex items-center justify-center text-white'>
            <div className='flex items-center justify-center'>
                <img className='w-[34rem]' alt="downloadpic" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" ></img>
                <div className='flex items-center justify-between absolute mt-[16rem] bg-black h-auto w-72 border-zinc-600 border-2 rounded-xl'>
                    <img className='w-[82px] h-[100px] p-3 ' alt="downloadpic" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" ></img>
                    <div>
                        <h1>Stranger Things</h1>
                        <h5 className='text-blue-500 text-sm'>Downloading...</h5>
                    </div>
                    <div className="downloadCss">
                        
                    </div>
                </div>

            </div>
            <div className=''>
                <h1 className='text-5xl font-bold mb-3 w-[500px]'>Download your shows to watch offline</h1>
                <p className='text-2xl font-medium w-[550px]'> Save your favourites easily and always have something to watch.</p>
            </div>
            
        </div>
    </Card>
  )
}

export default DownloadCard