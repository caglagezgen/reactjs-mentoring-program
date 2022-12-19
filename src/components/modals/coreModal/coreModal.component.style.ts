import { createUseStyles } from 'react-jss';
import closeButtonStyles from '@app/style/icons/icons';
import { darkGradient } from '@app/style/variables/colors';

export const deleteMovieCloseButtonStyles = {
  ...closeButtonStyles,
  right: '20px',
  top: '15px',
  transform: 'scale(2)',
};

export const useStyle = createUseStyles({
  modalBackground: {
    alignItems: 'center',
    background: `linear-gradient(${darkGradient}, ${darkGradient})`,
    backdropFilter: 'blur(4px)',
    bottom: 0,
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 2,
  },
});
