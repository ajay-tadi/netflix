import React from 'react'

function PaymentPicker() {
  return (
    <>

        <div className='flex items-start justify-center mt-12 w-screen h-screen '>
            <div className='w-[480px] flex items-center justify-center flex-col'>
                <span class="stepLogo planStepLogo"></span>
                <h1 className='mt-4 text-xs'>STEP <span className='font-semibold '>3</span> OF <span className='font-semibold '>3</span></h1>
                <h1 className='text-3xl font-[600] mt-1'>Choose how to pay</h1>
                <p className='text-lg font-normal mt-4'>Your payment is encrypted and you can change your </p>
                <p  className='text-lg font-normal '>payment method at anytime.</p>
                <p  className='text-lg font-normal '>Secure for peace of mind.</p>
                <p  className='text-lg font-normal '>Cancel easily online.</p>
                <button className='getStartedButtonStyle w-full  h-16 text-2xl mt-4 ' >Next</button>
            </div>
        </div>

    </>
  )
}

export default PaymentPicker