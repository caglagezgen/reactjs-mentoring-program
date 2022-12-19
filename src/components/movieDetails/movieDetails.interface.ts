import { IMovie } from '@shared/interfaces/movies.model';

export default interface IMovieDetails {
  movie: IMovie,
  onBackButtonClick: () => void,
}
