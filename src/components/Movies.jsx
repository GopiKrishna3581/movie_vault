
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import movies1 from "./../api/movies.json";
import movies2 from "./../api/movies2.json";
import movies3 from "./../api/movies3.json";
import movies4 from "./../api/movies4.json";

const allMovies = [movies1, movies2, movies3, movies4];

function Movies({handleAddWatchlist, removeFromWatchlist}) {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(allMovies[0]);

  useEffect(() => {
    setMovies(allMovies[page - 1]);
  }, [page]);

  function pagePrev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function pageNext() {
    if (page < 4) {
      setPage(page + 1);
    }
  }

  return (
    <div className='p-2'>
      <div className='text-center font-bold p-3 m-2 text-xl'>
        Trending Movies
      </div>
      
      <div className='flex flex-row flex-wrap justify-around'>
        {movies.map((movie, index) => (
          <MovieCard key={index} anime={movie} handleAddWatchlist = {handleAddWatchlist} removeFromWatchlist = {removeFromWatchlist} />
        ))}
      </div>
      <Pagination page={page} pagePrev={pagePrev} pageNext={pageNext} />
    </div>
  );
}

export default Movies;
