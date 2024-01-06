import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'gptSearch',
    initialState:{
        showSearchView: false,
    },
    reducers:{
        toggleSearch:(state) => {state.showSearchView = !state.showSearchView}
    }
});

export const {toggleSearch} = searchSlice.actions;

export default searchSlice.reducer;