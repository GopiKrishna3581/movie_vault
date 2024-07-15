import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end ' style={{backgroundImage:`url(https://images.alphacoders.com/107/1072652.jpg)`}}>
       <div className='text-white text-2xl text-center w-full bg-gray-900/60 p-2'>Money Heist</div> 
    </div>
  )
}

export default Banner