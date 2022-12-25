import { ISortOption } from '@app/components/preferenceBar/preferenceBar.interface';

export interface IDropdown {
  title: string;
  options: Array<ISortOption>;
  onSortOptionClick: (chosenOption: ISortOption) => void;
}
