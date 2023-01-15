/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { StoreonStore } from 'storeon';
import handleError from '@app/utils/handleError';
import { IMovie } from '@shared/interfaces/movies.model';
import {
  IState, API_URL, ActionType, DEFAULT_SEARCH_STATE, ISearch,
} from '@app/store/store.interface';
import ISearchQueryParams from '@server/services/movies.service.interface';

export const addMovie = (store: StoreonStore) => async (state: IState, movie: IMovie) => {
  let movies: Array<IMovie>;

  try {
    const requestInit: RequestInit = {
      method: 'POST',
      body: JSON.stringify({ movie }),
      headers: { 'content-type': 'application/json' },
    };
    const response: Response = await fetch(`${API_URL}/movies/add`, requestInit);

    if (response.ok) {
      const newMovie = await response.json();

      movies = [...state.movies, newMovie];
    } else {
      const text = await response.text();
      throw new Error(text);
    }
  } catch (e) {
    movies = state.movies;
    handleError(e);
  }

  store.dispatch(ActionType.saveMovie, { movies });
};

export const deleteMovie = (store: StoreonStore) => async (state: IState, id: string) => {
  let movies: Array<IMovie>;

  try {
    const response: Response = await fetch(`${API_URL}/movies/delete/${id}`, { method: 'DELETE' });

    if (response.ok) {
      const movieId = Number(id);

      movies = state.movies.filter((m) => m.id !== movieId);
    } else {
      const text = await response.text();
      throw new Error(text);
    }
  } catch (e) {
    movies = state.movies;
    handleError(e);
  }

  store.dispatch(ActionType.saveMovie, { movies });
};

export const editMovie = (store: StoreonStore) => async (state: IState, movie: IMovie) => {
  let movies: Array<IMovie>;

  try {
    const requestInit: RequestInit = {
      method: 'PUT',
      body: JSON.stringify({ movie }),
      headers: { 'content-type': 'application/json' },
    };
    const response: Response = await fetch(`${API_URL}/movies/edit`, requestInit);

    if (response.ok) {
      movies = [...state.movies];
      movies.splice(movies.findIndex((m) => m.id === movie.id), 1, movie);
    } else {
      const text = await response.text();
      throw new Error(text);
    }
  } catch (e) {
    movies = state.movies;
    handleError(e);
  }

  store.dispatch(ActionType.saveMovie, { movies });
};

// eslint-disable-next-line max-len
export const getMovies = (store: StoreonStore) => async (state: IState, params: ISearchQueryParams) => {
  let movies: Array<IMovie> = [];
  const queryParams = Object
    .entries(params)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([key, value]) => Boolean(value) && typeof value !== 'object')
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  try {
    const response: Response = await fetch(
      `${API_URL}/movies${queryParams ? `?${queryParams}` : ''}`,
    );

    movies = (await response.json()).movies;
  } catch (e) {
    movies = [];
    handleError(e);
  }

  store.dispatch(ActionType.saveMovie, { movies, params: { ...params, chosenMovie: null } });
};

export const getMovieDetails = (store: StoreonStore) => async (state: IState, id: string) => {
  let movie: IMovie;

  if (state.search.chosenMovie?.id === Number(id)) {
    return;
  }

  try {
    const response: Response = await fetch(
      `${API_URL}/movie/${id}`,
    );

    movie = await response.json();
  } catch (e) {
    movie = null;
  }

  const movies = state.movies.length
    ? state.movies
    : [movie];

  store.dispatch(
    ActionType.saveMovie,
    { movies, params: { ...state.search, chosenMovie: movie } },
  );
};

export const removeChosenMovie = (state: IState) => <IState>(
  { ...state, search: { ...state.search, chosenMovie: null } }
);

export const resetState = () => <IState>({ movies: [], search: DEFAULT_SEARCH_STATE });

export const saveMovie = (
  state: IState,
  { movies, params = state.search }: { movies: Array<IMovie>, params: ISearch },
) => ({
  ...state,
  search: params,
  movies,
});
