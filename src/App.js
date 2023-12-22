import {BrowserRouter, Route, Routes} from "react-router-dom";
import PopularMovies from "./pages/PopularMovies";
import MovieDetails from "./pages/MovieDetails";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGenres } from "./redux/genres";
import Login from "./pages/Login/Login";
import UserLayout from "./layout/UserLayout";
import AuthLayout from "./layout/AuthLayout";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  
  return (
    <BrowserRouter>
       <Routes>
        <Route element={<UserLayout />}> 
          <Route path="/" element={<PopularMovies />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Route>
        <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />}></Route>
        </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
