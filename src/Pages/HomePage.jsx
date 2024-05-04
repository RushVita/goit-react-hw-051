import { useState, useEffect } from "react";
import { fetchTrendingmovies } from "../articles-api";
import MovieList from "../Components/MovieList/MovieList";

export default function HomePage() {
  const [film, setFilm] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrendingmovies() {
      try {
        setIsLoad(true);
        const data = await fetchTrendingmovies();
        setFilm(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    }

    getTrendingmovies();
  }, []);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        HomePage
      </h1>
      <h2>Trending movies</h2>
      <MovieList movie={film} />
    </div>
  );
}
