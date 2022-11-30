import { useMovies } from "../../store";
import ArrangeMovies from "../ArrangeMovies/ArrangeMovies";

import MovieCardList from "../MovieCardList/MovieCardList";
import classes from "./MovieSearchResult.module.css";
import MovieSearchResultCount from "./MovieSearchResultCount";

const MovieSearchResult: React.FC = () => {
  const { movies } = useMovies();
  return (
    <div className={classes.movies}>
      <ArrangeMovies />
      <MovieSearchResultCount count={movies.length} />
      <MovieCardList movies={movies} />
    </div>
  );
};

export default MovieSearchResult;
