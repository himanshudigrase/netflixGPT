import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        exploreMovie: false,
        exploredMovieInfo: null
    },
    reducers:{
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state,action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state,action) => {
            state.upcomingMovies = action.payload
        },
        addTrailerVideo: (state,action) =>{
            state.trailerVideo = action.payload
        },
        addExploreMovie: (state,action) =>{
            state.exploreMovie = action.payload
        },
        addExploredMovieInfo: (state,action) =>{
            console.log("Movie info")
            state.exploredMovieInfo = action.payload
        }
    }
});

export const {addExploredMovieInfo,addNowPlayingMovies,addTrailerVideo,addUpcomingMovies,addTopRatedMovies,addPopularMovies,addExploreMovie} = moviesSlice.actions;

export default moviesSlice.reducer;