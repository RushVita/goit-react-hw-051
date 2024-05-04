import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchById } from "../articles-api";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const { movieId } = useParams();

  useEffect(() => {
    async function getTrendingmovies() {
      try {
        setIsLoad(true);
        const data = await fetchById(movieId);

        setMovie(data.results.filter((item) => item.id == movieId));
      } catch (error) {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    }

    getTrendingmovies();
  }, [movieId]);

  return (
    <div>
      <h1>MovieDetailsPage</h1>
      {movie.length > 0 && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie[0].poster_path}`} width={300} alt="" />
          <h2>{movie[0].title}</h2>
          <p>Release Date: {movie[0].release_date}</p>
          <p>
            Overview: <br /> {movie[0].overview}
          </p>
          <p>Rating: {movie[0].vote_average}</p>
        </div>
      )}
    </div>
  );
}
