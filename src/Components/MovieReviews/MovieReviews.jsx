import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import css from "./MovieReviews.module.css";
import { useGetReviews } from "../../hooks/useGetReviews";

export default function MovieReviews() {
  const { movieId } = useParams();

  const { reviews, isLoad, error } = useGetReviews(movieId);

  return (
    <ul className={css.list}>
      {isLoad && (
        <div>
          <ThreeDots color="#cc5801" />
        </div>
      )}
      {reviews.length > 0 &&
        reviews.map((review) => {
          return (
            <li key={review.id} className={css.item}>
              <p>
                Author: <span className={css.author}>{review.author}</span>
              </p>
              <p>{review.content}</p>
            </li>
          );
        })}
      {error && <div>Sorry we don`t have reviews for htis movie or Erorr😔</div>}
    </ul>
  );
}
