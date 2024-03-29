import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { MOVIES_API } from "../utils/constants";
import { options } from "../utils/constants";

const useNowPlayingMovies =()=>{
  // Fetch movies from TMDB API
  const dispatch = useDispatch();
  
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getMovieInfo = async() =>{
    const data = await fetch(MOVIES_API,options);
    const jsonData = await data.json();
  
    dispatch(addNowPlayingMovies(jsonData.results));
  }

  useEffect(() =>{
    !nowPlayingMovies && getMovieInfo()
  },
  []);
}

export default useNowPlayingMovies;