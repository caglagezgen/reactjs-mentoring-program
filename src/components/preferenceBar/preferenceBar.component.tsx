import cN from 'classnames';
import { useStoreon } from 'storeon/react';
import React, { useState, FC } from 'react';
import Dropdown from '@app/components/dropdown/dropdown.component';
import sortOptions from '@app/components/preferenceBar/preferenceBar.model';
import { ActionType, IState, StoreModule } from '@app/store/store.interface';
import useStyle from '@app/components/preferenceBar/preferenceBar.component.style';
import { ISortOption } from '@app/components/preferenceBar/preferenceBar.interface';
import { Genres, IMovieSortOptions, SortOrderBy } from '@shared/interfaces/movies.model';

const PreferenceBar: FC = () => {
  const s = useStyle();
  const { dispatch, search } = useStoreon<IState>(StoreModule.search);
  const [chosenGenre, setGenre] = useState(Genres.All);
  const [chosenDropdownItem, setDropdownItem] = useState(sortOptions[0]);

  const genreClick = (clickedGenre: string) => {
    const genre = clickedGenre.toLowerCase() as Genres;

    dispatch(ActionType.getMovies, { ...search, genre });
    setGenre(genre);
  };
  const onSortingOptionClick = (option: ISortOption) => {
    setDropdownItem(option);
    dispatch(
      ActionType.getMovies,
      {
        ...search,
        sortBy: option.value,
        orderBy: option.value === IMovieSortOptions.title
          ? SortOrderBy.asc
          : SortOrderBy.desc,
      },
    );
  };

  if (chosenGenre !== search.genre) {
    setGenre(search.genre);
  }

  return (
    <div className={s.preferenceBarContainer}>
      <div className={s.preferenceContainer}>
        {Object.keys(Genres).map((g) => (
          <button
            type="button"
            onClick={() => genreClick(g)}
            className={cN(s.preferenceButton, { [s.chosen]: chosenGenre === g.toLowerCase() })}
            key={g}
          >
            {g}
          </button>
        ))}
      </div>
      <Dropdown
        title={chosenDropdownItem.title}
        options={sortOptions}
        onSortOptionClick={onSortingOptionClick}
      />
      <div className={s.borderLine} />
    </div>
  );
};

export default PreferenceBar;
