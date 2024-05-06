import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout";

export default function App() {
  const HomePage = lazy(async () => import("../Pages//HomePage"));
  const MoviesPage = lazy(async () => import("../Pages//MoviesPage"));
  const MovieDetailsPage = lazy(async () => import("../Pages//MovieDetailsPage"));
  const NotFoundPage = lazy(async () => import("../Pages//NotFoundPage"));
  const MovieCast = lazy(async () => import("./MovieCast/MovieCast"));
  const MovieReviews = lazy(async () => import("./MovieReviews/MovieReviews"));

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
