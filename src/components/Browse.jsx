import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';

const Browse = () => {

  useNowPlayingMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();


  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer />
    </div>
  )
}

export default Browse