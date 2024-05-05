import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import HomePage from "../Pages/HomePage";
import MoviesPage from "../Pages/MoviesPage";
import MovieDetailsPage from "../Pages/MovieDetailsPage";
import NotFoundPage from "../Pages/NotFoundPage";
import Navigation from "./Navigation/Navigation";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";

function App() {
  return (
    <div className={css.container}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
