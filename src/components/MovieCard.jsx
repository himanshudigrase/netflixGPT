import React from 'react'
import { IMAGE_PATH } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return ( 
    posterPath && 
    <div className='w-48 pr-4'>
        <img alt="Movie Card"src={IMAGE_PATH + posterPath}/>
    </div>
  )
}

export default MovieCard