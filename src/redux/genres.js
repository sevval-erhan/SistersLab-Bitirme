import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genres: [],
    isFetching: false
};

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        getGenres: (state, action) => {
            return {
                ...state,
                isFetching: true

            }
        },
        fetchedgetGenres: (state, action) => {
            return {
                ...state,
                genres: action.payload.genres,
                isFetching: false

            }
        },
        reseteState: (state) => {
            return initialState
        }
    }
})

export const {getGenres, fetchedgetGenres, reseteState } = genresSlice.actions;

export default genresSlice.reducer;