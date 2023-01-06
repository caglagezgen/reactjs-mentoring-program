import { gray, white } from '@app/style/variables/colors';
import { createUseStyles } from 'react-jss';

const style = createUseStyles({
  background: {
    backgroundColor: gray.tint4,
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: '20px',
    left: 0,
  },
  notFoundContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '& >h3': {
      color: white,
      fontSize: '2.5rem',
      fontWeight: 100,
      marginBottom: '3rem',
      textTransform: 'capitalize',
    },

    '& >img': {
      color: white,
      marginBottom: '6rem',
    },
  },
});

export default style;
