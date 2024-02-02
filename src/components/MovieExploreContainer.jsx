import React from 'react'
import { useSelector } from 'react-redux'
import MovieTitle from './MovieTitle'
import MovieBackground from './MovieBackground'
import useMovieInfo from '../customHooks/useMovieInfo'


const MovieExploreContainer = () => {
  const selectedMovie = useSelector(store => store.movies?.exploreMovie);
  if(!selectedMovie)return;
  useMovieInfo(selectedMovie);
 
  const movieInfo = useSelector(store => store.movies?.exploredMovieInfo)
  console.log(movieInfo);
  if(!movieInfo)return;
  const {title,overview,id} = movieInfo;

  return (
     <div className='pt-[30%] bg-black md:pt-0 w-screen'>
        <MovieTitle title={title} overview = {overview}/>
        <MovieBackground movie_id={id}/>
    </div>
  )
}

export default MovieExploreContainer