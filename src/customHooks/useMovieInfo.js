import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addExploredMovieInfo } from "../utils/moviesSlice";

const useMovieInfo = (movie_id) => {
  const dispatch = useDispatch();
  const selectedMovieInfo = useSelector(store => store.movies?.exploredMovieInfo)

  const fetchMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
      options
    );
    const json = await data.json();
    console.log(json);

    dispatch(addExploredMovieInfo(json));
  };

  useEffect(() => {
      fetchMovie();
  },[movie_id]);
};

export default useMovieInfo;
