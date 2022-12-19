import cN from 'classnames';
import { Formik } from 'formik';
import React, { FC } from 'react';
import { useStoreon } from 'storeon/react';
import { StoreModule } from '@app/store/store.interface';
import Button from '@app/components/button/button.component';
import { IModal } from '@shared/interfaces/coreModal.interface';
import { ButtonType } from '@app/components/button/button.interface';
import { EMPTY_MOVIE, IMovie } from '@shared/interfaces/movies.model';
import FormField from '@app/components/formField/formField.component';
import MultipleDropdown from '@app/components/multipleDropdown/multipleDropdown.component';
// eslint-disable max-len
import validationSchema from '@app/components/modals/movieDetailsModal/movieDetailsModal.validation.schema';
import { style as useStyle } from '@app/components/modals/movieDetailsModal/movieDetailsModal.component.style';
// eslint-enable max-len

const MovieDetailsModal: FC<IModal> = ({ onConfirmClick, onCancelClick, modalDetails }) => {
  const s = useStyle();
  const { movies } = useStoreon(StoreModule.movies);
  const movie = modalDetails.movie
    ? movies.find((m: IMovie) => m.id === modalDetails.movie.id)
    : EMPTY_MOVIE;

  return (
    <Formik
      initialValues={...movie}
      validationSchema={validationSchema}
      onSubmit={onConfirmClick}
    >
      {({
        dirty,
        errors,
        touched,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        setFieldTouched,
        values: {
          title, releaseDate, url, genre, description, duration,
        },
        resetForm,
      }) => (
        <div className={s.background}>
          <h2 className={s.modalTitle}>
            {modalDetails.type}
            {' '}
            movie
          </h2>
          <div className={s.scrollContainer}>
            <form className={s.modalForm} autoComplete="off" onSubmit={handleSubmit}>
              <FormField
                name="title"
                type="text"
                value={title}
              />
              <FormField
                text="release date"
                name="releaseDate"
                type="date"
                value={releaseDate}
              />
              <FormField
                text="movie url"
                name="url"
                type="url"
                value={url}
              />
              <label htmlFor="genre">
                genre
                <MultipleDropdown
                  genres={genre}
                  onGenreClick={(g) => setFieldValue('genre', g, true)}
                  onBlurHandler={() => setFieldTouched('genre', true)}
                  styles={cN({
                    correct: touched.genre && !errors.genre,
                    hasError: touched.genre && errors.genre,
                  })}
                />
                {touched.genre && errors.genre && <p className={s.error}>{errors.genre}</p>}
              </label>
              <label htmlFor="description">
                overview
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={cN({
                    correct: touched.description && !errors.description,
                    hasError: touched.description && errors.description,
                  })}
                />
                {touched.description
                    && errors.description
                    && <p className={s.error}>{errors.description}</p>}
              </label>
              <FormField
                text="runtime"
                name="duration"
                type="number"
                value={duration}
              />
            </form>
          </div>
          <div className={s.modalButtons}>
            <Button
              type={ButtonType.reset}
              onButtonClick={() => resetForm({ values: EMPTY_MOVIE })}
            />
            <Button
              type={ButtonType.submit}
              onButtonClick={handleSubmit}
              isDisabled={!(isValid && dirty)}
            />
          </div>
          <button
            type="button"
            className={s.closeButton}
            onClick={onCancelClick}
          />
        </div>
      )}
    </Formik>
  );
};

export default MovieDetailsModal;
