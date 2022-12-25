import { createUseStyles } from 'react-jss';
import { gray } from '@app/style/variables/colors';
import { deleteMovieCloseButtonStyles } from '@app/components/modals/coreModal/coreModal.component.style';

const style = createUseStyles({
  closeButton: deleteMovieCloseButtonStyles,
  modalTile: {
    backgroundColor: gray.tint4,
    borderRadius: '8px',
    height: '280px',
    paddingTop: '2.5rem',
    paddingLeft: '3.5rem',
    position: 'relative',
    width: '600px',

    '& > h2': {
      fontSize: '2.5rem',
      fontWeight: 100,
      margin: 0,
      textTransform: 'uppercase',
    },

    '& > p': {
      fontWeight: 100,
      fontSize: '1.2rem',
    },
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '40px',
    right: '40px',
  },
});

export default style;
