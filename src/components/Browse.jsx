import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";
import MovieExploreContainer from "./MovieExploreContainer";
import SecondaryExploreContainer from "./SecondaryExploreContainer";

const Browse = () => {
  const showSearch = useSelector((store) => store.gptSearch.showSearchView);
  const exploreMovie = useSelector((store) => store.movies?.exploreMovie);

  useNowPlayingMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();
  //useMovieInfo(exploreMovie);
  return (
    <div>
      <Header />
      {showSearch ? (
        <GPTSearch />
      ) : (
        <>
          {exploreMovie ? (
            <>
              <MovieExploreContainer />
              <SecondaryExploreContainer />
            </>
          ) : (
            <>
              <MainContainer content="nowPlayingMovies" />
              <SecondaryContainer />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Browse;
