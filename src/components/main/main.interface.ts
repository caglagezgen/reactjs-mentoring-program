import { IMovie } from '@shared/interfaces/movies.model';

export default interface IMain {
  onMovieImageClick: (movie: IMovie) => void;
}
