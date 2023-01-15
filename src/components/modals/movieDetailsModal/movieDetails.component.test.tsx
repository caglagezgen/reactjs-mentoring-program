import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MovieDetailsModal from '@app/components/modals/movieDetailsModal/movieDetailsModal.component';
import { createStoreon } from 'storeon';
import { StoreContext } from 'storeon/react';
import { IModal, ModalType } from '@shared/interfaces/coreModal.interface';
import { Genres, IMovie } from '@shared/interfaces/movies.model';
import { DEFAULT_SEARCH_STATE } from '@app/store/store.interface';

const mockMovie = {
  title: 'alice in wonderland',
  genre: [Genres.Drama],
  releaseDate: '2010-09-17',
  imagePath: '../assets/images/alice in wonderland.jpg',
  url: 'aliceinwonderland.com',
  id: 123456789123,
  duration: 108,
  rating: 6.4,
  description:
    'Alice, now 19 years old, follows a rabbit in a blue coat to a magical wonderland...',
};

const mockConfirmClickFn = jest.fn();
const movieDetailsModalProps: IModal = {
  onConfirmClick: (props) => mockConfirmClickFn(props),
  onCancelClick: jest.fn(),
  modalDetails: { type: ModalType.Add },
};

/* eslint-disable react/jsx-props-no-spreading */
const getMovieDetailsModal = (props: IModal) => (
  <StoreContext.Provider
    value={createStoreon([
      (store) => {
        store.on('@init', () => ({
          ...DEFAULT_SEARCH_STATE,
          movies: [mockMovie],
        }));
      },
    ])}
  >
    <MovieDetailsModal {...props} />
  </StoreContext.Provider>
);

describe('MovieDetailsModal', () => {
  it('should submit new movie', async () => {
    const { getByLabelText, container } = render(
      getMovieDetailsModal(movieDetailsModalProps),
    );
    const titleInput = getByLabelText('title');
    const urlInput = getByLabelText('movie url');
    const durationInput = getByLabelText('runtime');
    const descriptionInput = getByLabelText('overview');
    const releaseDateInput = getByLabelText('release date');
    const comedyGenreInput = container.querySelector('#comedy');
    const submitButtton = container.querySelector('[value=submit]');

    expect(submitButtton).toBeDisabled();

    fireEvent.change(titleInput, { target: { value: mockMovie.title } });
    fireEvent.change(releaseDateInput, {
      target: { value: mockMovie.releaseDate },
    });
    fireEvent.change(urlInput, { target: { value: mockMovie.url } });
    fireEvent.change(descriptionInput, {
      target: { value: mockMovie.description },
    });
    fireEvent.change(durationInput, { target: { value: mockMovie.duration } });
    fireEvent.click(comedyGenreInput);

    expect(submitButtton).not.toBeDisabled();
    fireEvent.click(submitButtton);

    await waitFor(() => {
      expect(mockConfirmClickFn).toBeCalledWith({
        description:
          'Alice, now 19 years old, follows a rabbit in a blue coat to a magical wonderland...',
        duration: 108,
        genre: ['comedy'],
        id: undefined,
        imagePath: '/assets/images/no image.jpg',
        rating: undefined,
        releaseDate: '2010-09-17',
        title: 'alice in wonderland',
        url: 'aliceinwonderland.com',
      });
    });
  });

  it('should reset form acter click on `reset` button', () => {
    const { getByDisplayValue, container } = render(
      getMovieDetailsModal({ modalDetails: { type: ModalType.Add } }),
    );
    const titleInput = container.querySelector('#title');
    const releaseDateInput = container.querySelector('#releaseDate');
    const urlInput = container.querySelector('#url');
    const descriptionInput = container.querySelector('#description');
    const durationInput = container.querySelector('#duration');
    const resetButtton = container.querySelector('[value=reset]');

    const allInputsTextContent = [
      titleInput,
      releaseDateInput,
      urlInput,
      descriptionInput,
      durationInput,
    ]
      .map((elem) => elem.textContent)
      .join('');
    expect(allInputsTextContent).toBe('');

    fireEvent.change(titleInput, { target: { value: 'random text 123' } });
    fireEvent.change(releaseDateInput, { target: { value: '2000-01-01' } });
    fireEvent.change(urlInput, { target: { value: 'random url 456' } });
    fireEvent.change(descriptionInput, {
      target: { value: 'random description 789' },
    });
    fireEvent.change(durationInput, { target: { value: '333' } });

    expect(getByDisplayValue('random text 123')).toBeInTheDocument();
    expect(getByDisplayValue('2000-01-01')).toBeInTheDocument();
    expect(getByDisplayValue('random url 456')).toBeInTheDocument();
    expect(getByDisplayValue('random description 789')).toBeInTheDocument();
    expect(getByDisplayValue('333')).toBeInTheDocument();

    fireEvent.click(resetButtton);

    const allInputsTextContentAfterReset = [
      titleInput,
      releaseDateInput,
      urlInput,
      descriptionInput,
      durationInput,
    ]
      .map((elem) => elem.textContent)
      .join('');
    expect(allInputsTextContentAfterReset).toBe('');
  });

  it('should be closed after close button click', () => {
    const { container } = render(getMovieDetailsModal(movieDetailsModalProps));
    const closeButton = container.querySelector('[class^=closeButton]');

    expect(movieDetailsModalProps.onCancelClick).toBeCalledTimes(0);
    fireEvent.click(closeButton);
    expect(movieDetailsModalProps.onCancelClick).toBeCalledTimes(1);
  });

  it('should show validation errors on blur', async () => {
    const { getByLabelText, getByTestId, container } = render(
      getMovieDetailsModal(movieDetailsModalProps),
    );
    const title = getByLabelText('title');
    const url = getByLabelText('movie url');
    const duration = getByLabelText('runtime');
    const description = getByLabelText('overview');
    const releaseDate = getByLabelText('release date');
    const dropdown = container.querySelector('[class^=dropdownContainer]');

    [title, releaseDate, url, description, duration, dropdown].forEach(
      fireEvent.blur,
    );

    await waitFor(() => {
      expect(getByTestId('title')).not.toBe(null);
      expect(getByTestId('title')).toHaveTextContent('please add a title.');

      expect(getByTestId('releaseDate')).not.toBe(null);
      expect(getByTestId('releaseDate')).toHaveTextContent(
        'please choose a release date.',
      );

      expect(getByTestId('url')).not.toBe(null);
      expect(getByTestId('url')).toHaveTextContent('please add url.');

      expect(getByTestId('description')).not.toBe(null);
      expect(getByTestId('description')).toHaveTextContent(
        'please add an overview.',
      );

      expect(getByTestId('duration')).not.toBe(null);
      expect(getByTestId('duration')).toHaveTextContent('please add duration.');

      expect(getByTestId('genre')).not.toBe(null);
      expect(getByTestId('genre')).toHaveTextContent(
        'please choose at least one genre.',
      );
    });
  });

  it('should render edit movie modal if props come with movie id', () => {
    const { getByDisplayValue } = render(
      getMovieDetailsModal({
        modalDetails: {
          type: ModalType.Edit,
          movie: { id: 123456789123 } as IMovie,
        },
      }),
    );

    expect(getByDisplayValue(mockMovie.title)).toBeInTheDocument();
    expect(getByDisplayValue(mockMovie.url)).toBeInTheDocument();
    expect(getByDisplayValue(mockMovie.description)).toBeInTheDocument();
    expect(getByDisplayValue(mockMovie.releaseDate)).toBeInTheDocument();
  });
});
