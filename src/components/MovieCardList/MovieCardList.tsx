import { Movie } from "../../store";
import MovieCard from "../MovieCard/MovieCard";
import classes from "./MovieCardList.module.css";

interface Movies {
  movies: Movie[];
}

const MovieCardList: React.FC<Movies> = ({ movies }) => {
  return (
    <div className={classes.list}>
      {movies?.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          name={movie.name}
          genres={movie.genres}
          year={movie.year}
          poster={movie.poster}
        />
      ))}
    </div>
  );
};

export default MovieCardList;
