import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import css from "./MovieCast.module.css";
import { useGetCast } from "../../hooks/useGetCast";

export default function MovieCast() {
  const { movieId } = useParams();

  const { cast, isLoad, error } = useGetCast(movieId);

  return (
    <ul className={css.wraper}>
      {isLoad && (
        <div>
          <ThreeDots color="#cc5801" />
        </div>
      )}
      {cast !== null &&
        cast.map((item) => {
          return (
            <li className={css.item_wrap} key={item.cast_id}>
              <img src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`} alt="" />
              <p>{item.original_name}</p>
            </li>
          );
        })}
      {error && <div>We dont have Cast or Error😔</div>}
    </ul>
  );
}
