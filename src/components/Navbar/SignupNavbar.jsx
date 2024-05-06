import React from 'react'
import logo from '../../assets/Netflix_Logo_PMS.png' 
import {useNavigate} from 'react-router-dom';

function SignupNavbar(props) {
  const { btnProp } = props;
  const navigate = useNavigate()
  return (
    <>
        <div className='flex items-center justify-between  w-screen px-5 bg-transparent border-zinc-200 border-b-[1px]  '>
            <img src={logo} className='h-[88px] cursor-pointer ' alt='netflix-logo' onClick={()=>{navigate('/in')}}/> 
            {btnProp ? 
            <button className='pr-3 w-20 text-lg bg-transparent font-semibold'>Sign Out</button> :
            <button className='pr-3 w-20 text-lg bg-transparent font-semibold '>Sign In</button> 
            }
        </div>
        
    </>
  )
}

export default SignupNavbar;

// items-center justify-between 