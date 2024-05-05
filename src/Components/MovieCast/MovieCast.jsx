import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchByIdCredits } from "../../articles-api";

export default function MovieCast() {
  const [cast, setCast] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

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
    <ul>
      {cast !== null &&
        cast.map((item) => {
          return (
            <li key={item.cast_id}>
              <img src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`} alt="" />
              <p>{item.original_name}</p>
            </li>
          );
        })}
    </ul>
  );
}
