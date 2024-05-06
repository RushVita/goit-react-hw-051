import { useEffect, useState } from "react";
import { fetchByIdCredits } from "../articles-api";

export function useGetCast(movieId) {
  const [cast, setCast] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoad(true);
        const data = await fetchByIdCredits(movieId);
        setCast((prevCast) => {
          const newCast = data.cast;
          if (newCast.length === 0) {
            return prevCast;
          }
          return newCast;
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    })();
  }, [movieId]);

  return { cast, isLoad, error };
}
