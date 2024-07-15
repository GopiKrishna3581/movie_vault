import React from 'react'

function Pagination({pagePrev, pageNext, page}) {
 

  return ( 
    <div 
        className='bg-gray-400 p-3 mt-8  flex justify-center'>
        <div className='px-8'><i className="fa-solid fa-arrow-left-long" 
         onClick={pagePrev}
        ></i></div>
        <div className='font-bold'>{page}</div>
        <div className='px-8'><i className="fa-solid fa-arrow-right-long" 
        onClick={pageNext}
        ></i></div>
    </div>
  )
}

export default Pagination