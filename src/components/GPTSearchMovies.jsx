import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const GPTSearchMovies = () => {

   const {movieNames, movieResults   } = useSelector((store) => store.gptSearch);
  return (
    movieNames &&
    <div className='bg-black text-white bg-opacity-90 m-4 p-4'>
      {
         movieNames.map((movie,index) =>(
        
          <MovieList title={movie} movies = {movieResults[index]}/>
        ))
      }
    </div>
  )
}

export default GPTSearchMovies