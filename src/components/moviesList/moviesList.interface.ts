import { IMovie } from '@shared/interfaces/movies.model';

export default interface IMoviesList {
  onMovieImageClick: (movie: IMovie) => void;
}
