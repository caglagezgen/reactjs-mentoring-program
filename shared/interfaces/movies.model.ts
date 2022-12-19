export enum Genres {
  All = 'all',
  Action = 'action',
  Drama = 'drama',
  Comedy = 'comedy',
  Horror = 'horror',
}

export enum IMovieSortOptions {
  rating = 'rating',
  title = 'title',
  year = 'releaseDate',
}

export interface IMovie {
  title: string;
  genre: Array<Genres>;
  releaseDate: string;
  imagePath: string;
  url: string;
  id: number;
  duration: number | string;
  rating: number;
  description: string;
}

export const NO_IMAGE_PATH = '../assets/images/no image.jpg';

export const EMPTY_MOVIE: IMovie = {
  title: '',
  genre: [],
  releaseDate: '',
  imagePath: NO_IMAGE_PATH,
  url: '',
  id: undefined,
  duration: '',
  rating: undefined,
  description: '',
};

export enum SortOrderBy {
  asc = 'asc',
  desc = 'desc'
}
