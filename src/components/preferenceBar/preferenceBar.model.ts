import { IMovieSortOptions } from '@shared/interfaces/movies.model';
import { ISortOption } from '@app/components/preferenceBar/preferenceBar.interface';

const sortOptions: Array<ISortOption> = [
  {
    title: 'title',
    value: IMovieSortOptions.title,
  },
  {
    title: 'release date',
    value: IMovieSortOptions.year,
  },
  {
    title: 'rating',
    value: IMovieSortOptions.rating,
  },
];

export default sortOptions;
