import React from 'react'

function Card(props) {
  return (
    <>
        <div className='bg-zinc-800 h-2'></div>
        <div className="text-white w-screen  ">
          {props.children}
        </div>
    </>
  )
}

export default Card