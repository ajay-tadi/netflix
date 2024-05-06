import React from 'react'
import {useNavigate} from 'react-router-dom'

function GetstartedCard() {
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    console.log('work');
    navigate('/signup/registration')
  };
  return (
    <>
       
            {/* <img className='' alt="bg-img"  src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg" 
            srcset="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg 1000w, 
            https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg 1500w,
             https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg 1800w" 
            /> */}

        
        
        <div  className='getStartedCardMainContainer  text-white flex justify-center items-center text-center '>
            <div className='absolute top-[41%]'>
                <h1 className='text-[46px] font-black pb-2 font-medium'>Unlimited movies, TV shows and more</h1>
                <p className='text-2xl  font-semibold pb-3 '>Watch anywhere. Cancel anytime.</p>
                <p className='text-xl font-medium pb-3 '>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='mt-2 flex items-center justify-center'>
                  <input placeholder='Email Address' type='text'className='getStartedInputStyle h-14 w-96 mr-2 pl-4' />
                  <button type='submit' onClick={handleSubmit} className='getStartedButtonStyle h-14 w-48 text-2xl font-medium'  >Get Started</button>
                </div>
            </div>
        </div>

    </>
  )
}
// onSubmit={()=>{}}
export default GetstartedCard