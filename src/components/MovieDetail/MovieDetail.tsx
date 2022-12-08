import { Movie } from "../../types/movieTypes";
import classes from "./MovieDetail.module.css";

const MovieDetail: React.FC<Movie> = ({ id, name, year, genres, poster, runtime, description }) => {
  return (
    <article className={classes.movieDetail}>
      <img className={classes["moviePoster"]} src={poster} alt={name} />
      <div>
        <h2 className={classes.movieTitle}>{name}</h2>
        <p className={classes.movieGenres}>{genres.join(" & ")}</p>
        <p className={classes.meta}>
          <span>{year}</span>
          <span className={classes.runtime}>{runtime}min</span>
        </p>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default MovieDetail;