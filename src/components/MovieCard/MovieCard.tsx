import { Movie } from "../../models/Movie.model";
import classes from "./MovieCard.module.css";

const MovieCard: React.FC<Movie> = ({ id, name, genre, year, poster }) => {
  return (
    <div className={classes.card}>
      <img className={classes["card__img"]} src={poster} alt={name} />
      <div>
        <p className={classes["card__content"]}>
          <span className={classes["card__name"]}>{name}</span>
          <span className={classes["card__year"]}>{year}</span>
        </p>
        <p className={classes["card__genre"]}>{genre?.join(" & ")}</p>
      </div>
    </div>
  );
};

export default MovieCard;
