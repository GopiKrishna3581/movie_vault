import React from 'react'

function MovieCard({anime, handleAddWatchlist, removeFromWatchlist}) {
  return (
    <div  className='flex flex-col border  h-[50vh] w-[200px] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300 m-1' style={{backgroundImage:`url(${anime.poster})`}}>

        <div onClick={()=>(handleAddWatchlist(anime))} className=' h-8 w-8 flex justify-center m-2 rounded-lg bg-gray-900/60'>
          &#128525;
        </div>
        <div className='text-white flex items-end h-full justify-center font-bold' >
            
            <h1 className='bg-gray-900/60 w-full p-1 text-center' >{anime.title}</h1>
        </div>
    </div>
  )
}

export default MovieCard