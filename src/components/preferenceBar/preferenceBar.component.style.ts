import { createUseStyles } from 'react-jss';
import { white, peachy, gray } from '@app/style/variables/colors';

const style = createUseStyles({
  preferenceBarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1rem 0',
    position: 'relative',
  },
  preferenceContainer: {
    color: white,
    cursor: 'default',
    display: 'flex',
    zIndex: 1,
  },
  preferenceButton: {
    backgroundColor: 'transparent',
    border: '2px solid transparent',
    color: white,
    fontSize: '1.2rem',
    fontWeight: 100,
    marginRight: '20px',
    paddingBottom: '10px',
    textTransform: 'uppercase',

    '&:hover': {
      cursor: 'pointer',
      color: peachy,
    },

    '&:focus': {
      outline: 'none',
    },
  },
  chosen: {
    borderBottomColor: peachy,
  },
  borderLine: {
    borderBottom: `2px solid ${gray.tint2}`,
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
});

export default style;
