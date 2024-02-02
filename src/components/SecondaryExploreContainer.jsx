import React, { useEffect, useState } from 'react'
import useMovieInfo from '../customHooks/useMovieInfo'
import { useSelector } from 'react-redux';

const SecondaryExploreContainer = () => {
  const movie = useSelector(store => store.movies?.exploredMovieInfo);
  console.log(movie);
  
  if(!movie)return
  const {
    runtime,
    revenue,
    genres,
    status,
    vote_average,
    vote_count,
  } = movie;

  return (
    <div className="bg-black text-white p-6  ">
      <div className=' relative z-20'>
      <h2 className="text-2xl font-bold mb-4">Movie Details</h2>

      <div className="flex items-center justify-around mb-2">
        <span className="font-semibold">Runtime:</span>
        <span>{runtime} minutes</span>
      </div>

      <div className="flex items-center justify-around mb-2">
        <span className="font-semibold">Revenue:</span>
        <span>{revenue}</span>
      </div>

      <div className="flex items-center justify-around mb-2">
        <span className="font-semibold">Genres:</span>
        <span>
          {genres.map((genre, index) => (
            <span key={index}>{genre.name} </span>
          ))}
        </span>
      </div>

      <div className="flex items-center justify-around mb-2">
        <span className="font-semibold">Status:</span>
        <span>{status}</span>
      </div>

      <div className="flex items-center justify-around mb-2">
        <span className="font-semibold">Vote Average:</span>
        <span>{vote_average}</span>
      </div>

      <div className="flex items-center justify-around">
        <span className="font-semibold">Vote Count:</span>
        <span>{vote_count}</span>
      </div>
      </div>
    </div>
  );
}

export default SecondaryExploreContainer