import React from 'react'
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <>

        <div className='flex items-center justify-center  w-screen text-center h-screen '>
            <div className='w-80'>
                <span className='regStepLogo'></span>
                <h1 className='mt-4 text-xs'>STEP <span className='font-semibold '>1</span> OF <span className='font-semibold '>3</span></h1>
                <h1 className='text-3xl font-semibold mt-1'>Finish setting up your account</h1>
                <p className='text-lg font-normal mt-4'>Netflix is personalised for you. </p>
                <p  className='text-lg font-normal '>Create a password to watch on any device at any time.</p>
                <button className='getStartedButtonStyle w-full  h-16 text-2xl mt-4' onClick={()=>{navigate("/signup/regform");}} >Next</button>
            </div>
        </div>
        
    </>
  )
}

export default Register