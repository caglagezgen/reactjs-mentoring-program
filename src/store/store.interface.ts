import {
  Genres, IMovie, IMovieSortOptions, SortOrderBy,
} from '@shared/interfaces/movies.model';
import ISearchQueryParams from '@server/services/movies.service.interface';

// TODO: add default redirect to the port 4100.
export const API_URL = 'http://localhost:4100';

export interface IState {
  movies: Array<IMovie>;
  search: {
    genre: Genres,
    offset: number,
    orderBy: SortOrderBy,
    size: number,
    sortBy: IMovieSortOptions,
    text: string,
    chosenMovie: IMovie
  };
}

export const DEFAULT_SEARCH_STATE = {
  genre: Genres.All,
  offset: 0,
  orderBy: SortOrderBy.asc,
  size: undefined as number,
  sortBy: IMovieSortOptions.title,
  text: '',
  chosenMovie: undefined as IMovie,
};

export enum StoreModule {
  movies = 'movies',
  search = 'search',
}

export enum ActionType {
  addMovie = '/movies/add',
  deleteMovie = '/movies/delete',
  editMovie = '/movies/edit',
  getMovies = '/movies/get',
  saveMovie = '/movies/save',
  getMovieDetails = '/movies/getMovieDetails',
  removeChosenMovie = '/movies/removeChosenMovie',
  resetState = '/movies/resetState'
}

export interface IEvents {
  [ActionType.addMovie]: IMovie;
  [ActionType.deleteMovie]: string;
  [ActionType.editMovie]: IMovie;
  [ActionType.getMovies]: ISearchQueryParams;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [ActionType.saveMovie]: { movies: Array<IMovie>, params?: any };
  [ActionType.getMovieDetails]: string;
  [ActionType.removeChosenMovie]: void;
  [ActionType.resetState]: void;
}
