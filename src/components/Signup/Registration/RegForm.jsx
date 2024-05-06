import React from 'react'
import {useNavigate} from 'react-router-dom'

function RegForm() {
  const navigate = useNavigate()

  return (
    <>

        <div className='flex items-start justify-center  w-screen text-start h-screen '>
            <div className='w-[430px] mt-12'>
                <h1 className='mt-4 text-xs'>STEP <span className='font-semibold '>1</span> OF <span className='font-semibold '>3</span></h1>
                <h1 className='text-4xl font-[600] mt-1'>Create a password to start your membership</h1>
                <p className='text-lg font-normal mt-4 '>Just a few more steps and you're done! We hate paperwork, too. </p>
                <input placeholder='Email ' type='text'className=' h-14 mt-3 w-full mr-2 pl-4 border-[1px] border-green-700 rounded-md block' />
                <input placeholder='Add a Password' type='text'className=' h-14 w-full mr-2 pl-4 border-[1px] mt-2 rounded-md block' />
                <button className='getStartedButtonStyle w-full  h-16 text-2xl mt-4 ' onClick={()=>{navigate("/signup");}} >Next</button>
            </div>
        </div>

    </>
  )
}

export default RegForm