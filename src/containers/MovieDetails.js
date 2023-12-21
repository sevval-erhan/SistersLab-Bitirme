import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie, resetState } from "../redux/movie";

const MovieDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getMovie(id ? parseInt(id, 10) : 0));

        return () => {
            dispatch(resetState());
        }
    }, [dispatch]);

    useEffect( () => {
        if(id !== movie.id.toString()) {
            dispatch(getMovie(id ? parseInt(id, 10) : 0));
        }

    }, [id, movie.id]);
    
    return ('Hello from Movie Details');
}

export default MovieDetails;