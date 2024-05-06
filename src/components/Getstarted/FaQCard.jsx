import React, { useState } from 'react'
import Card from '../../Template/Card'

function FaQCard() {
    const FaqQuestonsList = [
        {toggle:false, question:'What is NetFlix?',answer1:'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.', answer2:'You can watch as much as you want, whenever you want, without a single ad all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week!' },
        {toggle:false, question:'How much does Netflix cost?',answer1:'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.',answer2:''},
        {toggle:false, question:'Where can i watch?', answer1:'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',answer2:'You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.'},
        {toggle:false, question:'How do i cancel?',answer1:'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',answer2:''},
        {toggle:false, question:'What can i watch on Netfilx?', answer1:'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',answer2:''},
        {toggle:false, question:'Is Netflix good for Kids?',answer1:'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.',answer2:'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'},

    ]
    const [questionList,setQuestionList] = useState(FaqQuestonsList)
    const onToggleButton =(targetIndex)=>{
        
        setQuestionList((prevState)=>{
            let prevStateVarible = prevState.map((item,index)=>index===targetIndex ? 
            {...item,toggle: !item.toggle} : 
            {...item,toggle: false} )
            return prevStateVarible
        })
    }

  return (
    <Card className=''>
        <div className='flex items-center justify-around flex-col w-screen p-10 px-44   '>
            <h1 className='text-5xl font-bold my-4 mb-5'>Frequently Asked Questions</h1>
            
            {questionList.map((item,index)=>{
                return(
                    <div className='w-[100%] m-1'>
                        <div key={index} onClick={()=>onToggleButton(index)} className='cursor-pointer w-[100%] bg-neutral-800 mb-[2px] hover:bg-neutral-700  p-2 px-9 flex items-center justify-between '>
                            <h1 className='text-2xl font-medium'>{item?.question}</h1>
                            <input type='button' className='cursor-pointer text-6xl font-thin mb-2 ' value='+' />

                        </div>

                        { item.toggle && 
                        <div className='w-[100%] bg-neutral-800 p-2 px-7 text-2xl font-medium '>
                            <p className='mb-4'>{item?.answer1}</p>
                            <p>{item?.answer2}</p>
                        </div>}
                    </div>
                )
            })}

            <h1 className='text-2xl font-medium mt-12'>Ready to watch? Enter your email to create or restart your membership.</h1>
            <div className='mt-6 flex items-center justify-center'>
                <input placeholder='Email Address' type='text'className='getStartedInputStyle h-14 w-96 mr-2 pl-4' />
                <button className='getStartedButtonStyle h-14 w-48 text-2xl font-medium '>Get Started</button>
            </div>
        </div>
    </Card>
  )
}

export default FaQCard