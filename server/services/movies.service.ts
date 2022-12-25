import getFilteredMovies from './utils';
import mockMovies from '../mockData/movies';
import ISearchQueryParams from './movies.service.interface';
import { IMovie, Genres, IMovieSortOptions } from '../../shared/interfaces/movies.model';

class MovieService {
  movies: Array<IMovie>;

  constructor(movies: Array<IMovie>) {
    this.movies = this.sortMovies(IMovieSortOptions.title, movies);
  }

  addMovie(movie: IMovie): IMovie {
    if (!this.isMovieValid(movie)) {
      throw new Error('Add movie request hasn\'t been successful. Please check that provided movie is valid.');
    }

    const newMovie = {
      ...movie,
      id: Date.now(),
      rating: Number((Math.random() * Math.floor(10)).toFixed(1)),
    }
    
    this.movies.push(newMovie);

    return newMovie;
  }

  deleteMovie(id: number): void {
    this.movies = this.movies.filter((m) => m.id !== id);
  }

  editMovie(movie: IMovie): void {
    if (!this.isMovieValid(movie)) {
      throw new Error('Edit movie request hasn\'t been successful. Please check that provided movie is valid.');
    }

    this.movies.splice(this.movies.findIndex((m) => m.id === movie.id), 1, movie);
  }

  filterMovies(text: string, genre: Genres): Array<IMovie> {
    const moviesToSearch = genre === Genres.All
      ? this.movies
      : this.movies.filter((m) => m.genre.includes(genre));

    return moviesToSearch.filter((m) => m.title.includes(text));
  }

  getMovies(params: ISearchQueryParams): Array<IMovie> {
    return getFilteredMovies(this.movies, params);
  }

  sortMovies(option: IMovieSortOptions, movies?: Array<IMovie>): Array<IMovie> {
    movies.sort((a, b) => (a[option] > b[option] ? 1 : -1));

    return [...movies];
  }

  isMovieValid(movie: IMovie): boolean {
    let isValid: boolean;

    try {
      isValid = movie.title
        && movie.url
        && movie.genre.length
        && movie.description
        && movie.duration
        && !isNaN(Number(new Date(movie.releaseDate)));
    } catch (e) {
      isValid = false;
    }

    return isValid;
  }
}

const movieServiceInstance = new MovieService(mockMovies);

export default movieServiceInstance;
