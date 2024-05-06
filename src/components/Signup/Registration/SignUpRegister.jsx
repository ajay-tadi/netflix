import React from 'react'
import {useNavigate} from 'react-router-dom'

function SignUpRegister() {
    const navigate = useNavigate()
  return (
    <>

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
                <button className='getStartedButtonStyle w-full  h-16 text-2xl mt-12 ' onClick={()=>{navigate("/signup/planform");}} >Next</button>
            </div>
        </div>

        </>
  )
}

export default SignUpRegister