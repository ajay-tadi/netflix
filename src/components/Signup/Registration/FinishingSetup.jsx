import React, { useState } from 'react'
import Plans from './Plans'

function FinishingSetup() {

  const [param,setParam] = useState('register')

  const register = (
  <div className='flex items-center justify-center  w-screen text-center h-screen '>
                      <div className='w-80'>
                          <span className='regStepLogo'></span>
                          <h1 className='mt-4 text-xs'>STEP <span className='font-semibold '>1</span> OF <span className='font-semibold '>3</span></h1>
                          <h1 className='text-3xl font-semibold mt-1'>Finish setting up your account</h1>
                          <p className='text-lg font-normal mt-4'>Netflix is personalised for you. </p>
                          <p  className='text-lg font-normal '>Create a password to watch on any device at any time.</p>
                          <button className='getStartedButtonStyle w-full  h-16 text-2xl mt-4' onClick={()=>{setParam("regForm")}} >Next</button>
                      </div>
                    </div>
                    )
  const regForm = (
  <div className='flex items-start justify-center  w-screen text-start h-screen '>
                    <div className='w-[430px] mt-12'>
                        <h1 className='mt-4 text-xs'>STEP <span className='font-semibold '>1</span> OF <span className='font-semibold '>3</span></h1>
                        <h1 className='text-4xl font-[600] mt-1'>Create a password to start your membership</h1>
                        <p className='text-lg font-normal mt-4 '>Just a few more steps and you're done! We hate paperwork, too. </p>
                        <input placeholder='Email ' type='text'className=' h-14 mt-3 w-full mr-2 pl-4 border-[1px] border-green-700 rounded-md block' />
                        <input placeholder='Add a Password' type='text'className=' h-14 w-full mr-2 pl-4 border-[1px] mt-2 rounded-md block' />
                        <button className='getStartedButtonStyle w-full  h-16 text-2xl mt-4 '  onClick={()=>{setParam("signUp")}} >Next</button>
                    </div>
                  </div>

  )

  const signUp = (
                  <div className='flex items-center justify-center  w-screen h-screen '>
                            <div className='w-[330px] flex items-center justify-center flex-col'>
                                <span class="stepLogo planStepLogo"></span>
                                <h1 className='mt-4 text-xs'>STEP <span className='font-semibold '>2</span> OF <span className='font-semibold '>3</span></h1>
                                <h1 className='text-3xl font-[600] mt-1'>Choose your plan.</h1>
                                <div className='flex items-center justify-center w-64'>
                                  <div className='mr-3'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" ><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                  </div>
                                  <p className='text-base font-normal mt-4 '>No commitments, cancel anytime.</p>
                                </div>
                                <div className='flex items-center justify-center w-64'>
                                  <div className='mr-3'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" ><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                  </div>
                                  <p className='text-base font-normal mt-4 '>Everything on Netflix for one low price.</p>
                                </div>
                                <div className='flex items-center justify-center w-64'>
                                  <div className='mr-3'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" ><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                  </div>
                                  <p className='text-base font-normal mt-4 '>No ads and no extra fees. Ever.</p>
                                </div>
                                <button className='getStartedButtonStyle w-full  h-16 text-2xl mt-12 '   onClick={()=>{setParam("planForm")}} >Next</button>
                            </div>
                        </div>
  )
  
  const planForm = (
    <div className=' w-screen text-start '>
          <div className=' m-9 mx-20 '>
              <h1 className='mt-4 text-xs'>STEP <span className='font-semibold '>2</span> OF <span className='font-semibold '>3</span></h1>
              <h1 className='text-3xl font-[600] mt-1'>Choose the plan that’s right for you</h1>
              <div className='flex justify-around mt-12'>
                  <Plans />
                  <Plans />
                  <Plans />
                  <Plans />
              </div>
              <p className='text-sm font-normal mt-4 ml-4 '>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details. </p>
              <p className='text-sm font-normal mt-2 ml-4'>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile. </p>
              <div className='flex w-auto item-center justify-center h-44 mt-12'>

                <button className='getStartedButtonStyle w-[430px] h-16 text-2xl mt-4 ' >Next</button>
              </div>
          </div>
      </div>
  )

  function renderSwitch(param) {
    switch(param) {
      case 'register':
        return register;
      case 'regForm':
        return regForm;
      case 'signUp':
        return signUp;
      case 'planForm':
        return planForm;
      
      default:
        return register;
    }
  }

  return (
    
    <> 
      {renderSwitch(param)}


    </>
  )
}

export default FinishingSetup