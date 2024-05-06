import { useEffect, useState } from "react";
import { fetchByIdDetails } from "../articles-api";

export function useGetDetalis(movieId) {
  const [movie, setMovie] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoad(true);
        const data = await fetchByIdDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    })();
  }, [movieId]);
  return { movie, isLoad, error };
}
