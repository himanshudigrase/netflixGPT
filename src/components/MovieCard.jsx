import React from 'react'
import { IMAGE_PATH } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addExploreMovie } from '../utils/moviesSlice';

const MovieCard = ({movieId,posterPath}) => {
  const dispatch = useDispatch();

  const handleClick = () =>{
    dispatch(addExploreMovie(movieId));
    
  }
  return ( 
   
    posterPath && 
    <div className='w-36 md:w-48 pr-4 cursor-pointer relative hover:w-52 hover:z-10'>
        <img  alt="Movie Card"src={IMAGE_PATH + posterPath} onClick={handleClick}/>
    </div>
  )
}

export default MovieCard