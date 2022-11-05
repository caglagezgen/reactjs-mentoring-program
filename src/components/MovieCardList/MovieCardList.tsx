import { Movie } from "../../models/Movie.model";
import MovieCard from "../MovieCard/MovieCard";
import classes from "./MovieCardList.module.css";

interface Movies {
  movies: Movie[];
}

const MovieCardList: React.FC<Movies> = ({ movies }) => {
  return (
    <div className={classes.list}>
      {movies?.map((movie) => (
        <MovieCard id={movie.id} name={movie.name} genre={movie.genre} year={movie.year} poster={movie.poster} />
      ))}
    </div>
  );
};

export default MovieCardList;
