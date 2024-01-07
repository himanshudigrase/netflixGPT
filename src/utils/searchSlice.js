import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'gptSearch',
    initialState:{
        showSearchView: false,
        movieNames: null,
        movieResults: null
    },
    reducers:{
        toggleSearch:(state) => {state.showSearchView = !state.showSearchView},
        addGptMovieResults:(state,action) =>{
            const {movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults    
        }
    }
});

export const {toggleSearch,addGptMovieResults} = searchSlice.actions;

export default searchSlice.reducer;