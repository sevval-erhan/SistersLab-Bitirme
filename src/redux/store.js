import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search";
import genresReducer from "./genres";
import watcherSaga from "../sagas";
import moviesReducer from "./movies";
import movieReducer from "./movie";
import createSagaMiddleWare from "@redux-saga/core"

const sagaMiddleware = createSagaMiddleWare();

const store = configureStore({
    reducer: {
        search: searchReducer,
        genres: genresReducer,
        movies: moviesReducer,
        movie: movieReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ think: false }).prepend(sagaMiddleware);
    }
});

sagaMiddleware.run(watcherSaga);

export default store;