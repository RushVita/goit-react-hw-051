import { useEffect, useState } from "react";
import { useParams, useSearchParams, Link, Outlet } from "react-router-dom";
import { fetchByIdDetails, fetchByIdCredits } from "../articles-api";
import MovieCast from "../Components/MovieCast/MovieCast";
import MovieReviews from "../Components/MovieReviews/MovieReviews";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);

  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoad(true);
        const data = await fetchByIdDetails(movieId);

        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    }

    getMovies();
  }, [movieId]);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoad(true);
        const data = await fetchByIdCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div>
      <h1>MovieDetailsPage</h1>
      {movie !== null && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt="" />
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>
            Overview: <br /> {movie.overview}
          </p>
          <p>Rating: {movie.vote_average}</p>
          <p>
            Genres:{" "}
            {movie.genres.map((item) => (
              <span key={item.id}>{item.name} </span>
            ))}
          </p>
        </div>
      )}

      <Link to={"cast"}>Cast</Link>
      <Link to={"reviews"}>Reviews</Link>

      <Outlet />
    </div>
  );
}
