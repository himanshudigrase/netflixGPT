import { useDispatch, useSelector } from "react-redux";
import {  addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { POPULAR_MOVIES_API, TOP_RATED_MOVIES_API } from "../utils/constants";
import { options } from "../utils/constants";

const useTopRatedMovies =()=>{
      // Fetch movies from TMDB API
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(store => store.movies.topRatedMovies)

  const getMovieInfo = async() =>{
    const data = await fetch(TOP_RATED_MOVIES_API,options);
    const jsonData = await data.json();

    dispatch(addTopRatedMovies(jsonData.results));
  }

  useEffect(() =>{
    !topRatedMovies&& getMovieInfo()
  },
  []);
}

export default useTopRatedMovies;