import { useEffect, useState } from "react";
import { fetchByIdReviews } from "../articles-api";

export function useGetReviews(movieId) {
  const [reviews, setReviews] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoad(true);
        const data = await fetchByIdReviews(movieId);
        setReviews((prevReview) => {
          const newReview = data.results;
          if (newReview.length === 0) {
            setError(true);
            return prevReview;
          }
          return newReview;
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    })();
  }, [movieId]);

  return { reviews, isLoad, error };
}
