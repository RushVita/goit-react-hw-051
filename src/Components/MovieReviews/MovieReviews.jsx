import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchByIdReviews } from "../../articles-api";




export default function MovieReviews() {
  const [reviews, setReviews] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();


  useEffect(() => {
    async function getCast() {
      try {
        setIsLoad(true);
        const data = await fetchByIdReviews(movieId);
        setReviews(data.results);
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
      {reviews !== null &&
        reviews.map((item) => {
          return (
            <li key={item.id}>
              <h5>Author: {item.author}</h5>
              <p>{item.content}</p>
            </li>
          );
        })}
    </ul>
  );
}
