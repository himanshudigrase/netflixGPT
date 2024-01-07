import React from 'react'
import { useSelector } from 'react-redux'
import MovieTitle from './MovieTitle';
import MovieBackground from './MovieBackground';

const MainContainer = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  
  if(!movies)return;
  const {title,overview,id} = movies[0];
  

  return (
     <div className='pt-[30%] bg-black md:pt-0 w-screen'>
        <MovieTitle title={title} overview = {overview}/>
        <MovieBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer;