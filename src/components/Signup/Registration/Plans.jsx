import React from 'react'

function Plans(props) {
  const {checked,plan,resolution,price,quality,devices,watch,download} = props.items;
  return (
    <div className='h-[616px] w-[292px] border-[1px] border-zinc-600 rounded-2xl p-2'>
      <div className=' rounded-xl w-full h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 pt-3 pl-4 text-white '>
        <h1 className='font-bold'>{plan}</h1>
        <p className='font-semibold text-xs'>{resolution}</p>
      </div>
      <div className='p-4 mt-3 text-[13px] font-semibold text-zinc-600'>
        <h5 className=''>Monthly price</h5>
        <p className='text-black text-sm font-medium'>₹{price}</p>
        <hr className='my-3'/>
        <h5>Video and sound quality</h5>
        <p className='text-black text-sm font-medium'>{quality}</p>
        <hr className='my-3'/>
        <h5>Resolution</h5>
        <p className='text-black text-sm font-medium'>{resolution}</p>
        <hr className='my-3'/>
        <h5>Supported devices</h5>
        <p  className='text-black text-sm font-medium'>{devices}</p>
        <hr className='my-3'/>
        <h5>Devices your household can watch at the same time</h5>
        <p className='text-black text-sm font-medium'>{watch}</p>
        <hr className='my-3'/>
        <h5>Download devices</h5>
        <p className='text-black text-sm font-medium'>{download}</p>
      </div>

    </div>
  )
}

export default Plans