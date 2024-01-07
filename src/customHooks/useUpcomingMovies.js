import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import {  UPCOMING_MOVIES_API } from "../utils/constants";
import { options } from "../utils/constants";

const useUpcomingMovies =()=>{
      // Fetch movies from TMDB API
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(store => store.movies.upcomingMovies)
  
  const getMovieInfo = async() =>{
    const data = await fetch(UPCOMING_MOVIES_API,options);
    const jsonData = await data.json();

    dispatch(addUpcomingMovies(jsonData.results));
  }

  useEffect(() =>{
    !upcomingMovies &&  getMovieInfo()
  },
  []);
}

export default useUpcomingMovies;