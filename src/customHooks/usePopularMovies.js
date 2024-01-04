import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { POPULAR_MOVIES_API } from "../utils/constants";
import { options } from "../utils/constants";

const usePopularMovies =()=>{
  // Fetch movies from TMDB API
  const dispatch = useDispatch();

  const getMovieInfo = async() =>{
    const data = await fetch(POPULAR_MOVIES_API,options);
    const jsonData = await data.json();

    dispatch(addPopularMovies(jsonData.results));
  }

  useEffect(() =>{
    getMovieInfo()
  },
  []);
}

export default usePopularMovies;