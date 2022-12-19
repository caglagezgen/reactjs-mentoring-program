import { IMovie } from '@shared/interfaces/movies.model';

export enum MovieAction {
  Edit,
  Delete,
}

export interface IMovieItem {
  movie: IMovie;
  onMovieImageClick: () => void;
}
