import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { options } from "../utils/constants";

const useMovieTrailer = (movie_id)=>{
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    const fetchTrailer = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
        options
      );
      const json = await data.json();
  
      const filteredTrailer = json.results.filter(
        (video) => (video.type = "Trailer")
      );
      const trailer = filteredTrailer.length
        ? filteredTrailer[0]
        : json.results[0];
      
      dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() => {
     !trailerVideo&& fetchTrailer();
    }, []);
}
export default useMovieTrailer;