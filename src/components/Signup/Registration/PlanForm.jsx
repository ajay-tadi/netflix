import React, { useState } from 'react'
import Plans from './Plans'


function PlanForm() {

  const planDetails = [
    {checked:false,plan:'Premium',resolution:'4K + HDR',price:'649',quality:'Best',devices:'TV, computer, mobile phone, tablet',watch:'4',download:'6'},
    {checked:false,plan:'Standard',resolution:'1080p',price:'499',quality:'Great',devices:'TV, computer, mobile phone, tablet',watch:'2',download:'2'},
    {checked:false,plan:'Basic',resolution:'720p',price:'199',quality:'Good',devices:'TV, computer, mobile phone, tablet',watch:'1',download:'1'},
    {checked:false,plan:'Mobile',resolution:'480p',price:'149',quality:'Fair',devices:'Mobile phone, tablet',watch:'1',download:'1'},
  ]

  const [planDetailsState,setplanDetailsState]  = useState(planDetails)

  return (
    <>

        <div className=' w-screen text-start '>
          <div className=' m-9 mx-20 '>
              <h1 className='mt-4 text-xs'>STEP <span className='font-semibold '>2</span> OF <span className='font-semibold '>3</span></h1>
              <h1 className='text-3xl font-[600] mt-1'>Choose the plan that’s right for you</h1>
              <div className='flex justify-around mt-12 mx-6'>
                  {planDetailsState.map(item=>( <Plans items={item} />))}
              </div>
              <p className='text-sm font-normal mt-4 ml-4 '>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details. </p>
              <p className='text-sm font-normal mt-2 ml-4'>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile. </p>
              <div className='flex w-auto item-center justify-center h-44 mt-12'>

                <button className='getStartedButtonStyle w-[430px] h-16 text-2xl mt-4 ' >Next</button>
              </div>
          </div>
      </div>

    </>
  )
}

export default PlanForm