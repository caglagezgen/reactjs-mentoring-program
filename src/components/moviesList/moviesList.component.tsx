import React, { FC } from 'react';
import { useStoreon } from 'storeon/react';
import { IState, StoreModule } from '@app/store/store.interface';
import MovieItem from '@app/components/movieItem/movieItem.component';
import useStyle from '@app/components/moviesList/moviesList.component.style';

const MoviesList: FC = () => {
  const s = useStyle();
  const { movies } = useStoreon<IState>(StoreModule.movies);

  return (
    <section>
      <div className={s.moviesAmount}>
        {movies.length}
        <span className={s.moviesAmountText}>movies found</span>
      </div>
      {movies.length
        ? (
          <div className={s.moviesContainer}>
            {movies.map((m) => <MovieItem movie={m} key={m.id} />)}
          </div>
        )
        : <p className={s.noItemsFound}>no movies found</p>}
    </section>
  );
};

export default MoviesList;
