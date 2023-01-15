import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import MultipleDropdown from '@app/components/multipleDropdown/multipleDropdown.component';
import { Genres } from '@shared/interfaces/movies.model';

const onGenreClickMock = jest.fn();
const onBlurHandlerMock = jest.fn();
const mockProps = {
  genres: [Genres.Action, Genres.Comedy, Genres.Drama, Genres.Horror],
  onGenreClick: onGenreClickMock,
  onBlurHandler: onBlurHandlerMock,
  styles: 'style',
};

/* eslint-disable react/jsx-props-no-spreading */
describe('MultipleDropdown', () => {
  it('should render', () => {
    render(<MultipleDropdown {...mockProps} />);
  });

  it('should open/close dropdown menu onclick', () => {
    const { getByRole, container } = render(
      <div className="elementOutsideDropdown">
        <MultipleDropdown {...mockProps} />
      </div>,
    );
    const menuContainer = getByRole('menu');
    const dropdownContainer = container.querySelector('[class^=dropdownContainer]');
    const elementOutsideDropdown = container.querySelector('.elementOutsideDropdown');

    expect(dropdownContainer).not.toHaveClass('open');
    fireEvent.click(menuContainer);
    expect(dropdownContainer).toHaveClass('open');
    fireEvent.mouseDown(elementOutsideDropdown);
    expect(dropdownContainer).not.toHaveClass('open');
  });

  it('should handle genres click', () => {
    const { getByLabelText } = render(<MultipleDropdown {...mockProps} />);
    const comedyGenre = getByLabelText('comedy');

    fireEvent.click(comedyGenre);

    expect(onGenreClickMock).toBeCalledTimes(1);
    expect(onGenreClickMock).toBeCalledWith([Genres.Action, Genres.Drama, Genres.Horror]);
  });
});
