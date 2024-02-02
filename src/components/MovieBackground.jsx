import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const MovieBackground = ({ movie_id }) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(movie_id);

  return (
    <div className="w-screen">
      {trailerVideo &&<iframe className="w-screen aspect-video"
        
        src={"https://www.youtube.com/embed/"+ trailerVideo.key + "?si=7Hssv_SaxeWtcfte" + "?&autoplay=1&mute=1&loop=1"}
        title="YouTube video player"
        controls="0"
        loop="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe> }
      
    </div>
  );
};

export default MovieBackground;
