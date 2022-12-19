import { Genres, IMovieSortOptions, SortOrderBy } from '@shared/interfaces/movies.model';

interface ISearchQueryParams {
  genre?: Genres,
  offset?: number,
  orderBy?: SortOrderBy,
  sortBy?: IMovieSortOptions,
  size?: number,
  text?: string
}

export default ISearchQueryParams;
