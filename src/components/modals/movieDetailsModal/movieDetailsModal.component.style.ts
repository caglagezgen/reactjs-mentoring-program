import { createUseStyles } from 'react-jss';
import { gray, peachy, white } from '@app/style/variables/colors';
import { deleteMovieCloseButtonStyles } from '@app/components/modals/coreModal/coreModal.component.style';

const validationStatus = {
  '&.correct': {
    border: '1px solid green',
  },

  '&.hasError': {
    border: '1px solid red',
  },
};

const inputStyle = {
  background: gray.tint3,
  border: '1px solid transparent',
  borderRadius: '5px',
  color: white,
  display: 'block',
  fontFamily: 'Montserrat',
  fontSize: '1.1em',
  height: '3rem',
  padding: '0 20px',
  width: '480px',

  ...validationStatus,
};

const error = {
  fontSize: '0.9em',
  fontVariant: 'small-caps',
  margin: 0,
  position: 'absolute',
  textTransform: 'lowercase',
  textWeight: 100,
};

const style = createUseStyles({
  background: {
    background: gray.tint4,
    borderRadius: '0.5rem',
    padding: '50px 40px 50px 80px',
    position: 'relative',
  },
  closeButton: deleteMovieCloseButtonStyles,
  error,
  hasError: {
    border: '1px solid red',
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '40px',

    '& > input:first-child': {
      marginRight: '20px',
    },
  },
  modalForm: {
    display: 'flex',
    flexDirection: 'column',

    '& input': inputStyle,
    '& textarea': {
      ...inputStyle,
      maxWidth: '480px',
      minWidth: '480px',
      minHeight: '6rem',
      padding: '20px 20px',
    },

    '& > label': {
      color: peachy,
      fontSize: '1rem',
      marginBottom: '2rem',
      position: 'relative',
      textTransform: 'uppercase',
    },
  },
  modalTitle: {
    textTransform: 'uppercase',
    fontSize: '2rem',
    fontWeight: 100,
    fontFamily: 'Montserrat',
  },
  scrollContainer: {
    maxHeight: '60vh',
    overflow: 'auto',
    paddingRight: '40px',

    '&::-webkit-scrollbar': {
      width: '5px',
    },

    '&::-webkit-scrollbar-track': {
      backgroundColor: gray.tint4,
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: gray.tint3,
    },

    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: peachy,
    },
  },
});

export {
  style,
  error,
  validationStatus,
};
