import {
  Genres,
  IMovie,
  SortOrderBy,
  IMovieSortOptions,
} from '../../shared/interfaces/movies.model';
import ISearchQueryParams from './movies.service.interface';

function getFilteredMovies(
  movies: Array<IMovie> = [],
  { genre, offset, orderBy, sortBy, size, text }: ISearchQueryParams
): Array<IMovie> {
  const filteredMoviesByGenre = getFilteredMoviesByGenre(movies, genre);
  const filteredMoviesByText = getFilteredMoviesByText(filteredMoviesByGenre, text);
  const sortedMoviesByOption = getSortedMoviesByOption(filteredMoviesByText, sortBy);
  const orderedMoviesByDirection = getOrderedMoviesByDirection(sortedMoviesByOption, orderBy);
  const partialMovies = getPartialMovies(orderedMoviesByDirection, offset, size);
  
  return partialMovies;
}

function getFilteredMoviesByGenre(
  movies: Array<IMovie>,
  chosenGenre: Genres
): Array<IMovie> {
  const genre = getGenresEnumValue(chosenGenre);

  return genre === Genres.All
    ? movies
    : movies.filter(m => m.genre.includes(genre));
}

function getFilteredMoviesByText(
  movies: Array<IMovie>,
  text: string
): Array<IMovie> {
  return text
    ? movies.filter(m => m.description.includes(text) || m.title.includes(text))
    : movies;
}

function getSortedMoviesByOption(
  movies: Array<IMovie>,
  option: IMovieSortOptions
): Array<IMovie> {
  return option
    ? movies.sort((a, b) => (a[option] > b[option] ? 1 : -1))
    : movies;
}

function getOrderedMoviesByDirection(
  movies: Array<IMovie>,
  order = SortOrderBy.asc
): Array<IMovie> {
  return getSortOrderEnumValue(order) === SortOrderBy.asc
    ? movies
    : movies.reverse();
}

function getPartialMovies(
  movies: Array<IMovie>,
  offset: string | number = 0,
  size: string | number
): Array<IMovie> {
  const from = Number(offset);
  const to = from + Number(size);

  return from && to
    ? movies.slice(from, to)
    : movies;
};

function getGenresEnumValue(value: Genres): Genres {
  switch (value) {
    case Genres.Action:
      return Genres.Action;
    case Genres.Comedy:
      return Genres.Comedy;
    case Genres.Drama:
      return Genres.Drama;
    case Genres.Horror:
      return Genres.Horror;
    default:
      return Genres.All;
  }
}

function getSortOrderEnumValue(value: SortOrderBy): SortOrderBy {
  switch (value) {
    case SortOrderBy.asc:
      return SortOrderBy.asc;
    default:
      return SortOrderBy.desc;
  }
}

export default getFilteredMovies;
