import { useDispatch, useSelector } from "react-redux";
import {  addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { POPULAR_MOVIES_API } from "../utils/constants";
import { options } from "../utils/constants";

const usePopularMovies =()=>{
  // Fetch movies from TMDB API
  const dispatch = useDispatch();
  const popularMovies = useSelector(store => store.movies.popularMovies)
  
  const getMovieInfo = async() =>{
    const data = await fetch(POPULAR_MOVIES_API,options);
    const jsonData = await data.json();

    dispatch(addPopularMovies(jsonData.results));
  }

  useEffect(() =>{
   !popularMovies && getMovieInfo()
  },
  []);
}

export default usePopularMovies;