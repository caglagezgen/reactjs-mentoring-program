import { createUseStyles } from 'react-jss';
import { gray, peachy, white } from '@app/style/variables/colors';
import closeButtonStyles from '@app/style/icons/icons';

const style = createUseStyles({
  closeButton: closeButtonStyles,
  genre: {
    color: gray.tint1,
    display: 'inline-block',
    fontWeight: 100,
    marginRight: '5px',
    textTransform: 'capitalize',

    '&:not(:last-child)': {
      '&:after': {
        content: '","',
      },
    },

    '&:last-child': {
      '&:after': {
        content: '"."',
      },
    },
  },
  genresList: {
    marginTop: '0.3rem',
  },
  movieContainer: {
    border: '1px solid transparent',
    padding: '5px',
    position: 'relative',
    margin: 0,

    '& > img': {
      cursor: 'pointer',
    },

    '&:hover': {
      transform: 'scale(1.015)',

      '& > div': {
        display: 'block',
      },
    },
  },
  movieInfoContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto 3rem',
  },
  movieMenu: {
    backgroundColor: gray.tint4,
    borderRadius: '5px',
    cursor: 'default',
    height: '86px',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '180px',

    '&:not(.open)': {
      display: 'none',
    },
  },
  movieMenuContainer: {
    position: 'relative',
    height: '100%',
    padding: '24px 0',
  },
  movieMenuList: {
    margin: 0,
    fontWeight: 100,
    textTransform: 'capitalize',

    '& > li': {
      padding: '4px 0 4px 20px',
      cursor: 'pointer',

      '&:hover': {
        color: white,
        backgroundColor: peachy,
      },
    },
  },
  title: {
    color: gray.tint1,
    fontWeight: 500,
    marginBottom: '0',
    textTransform: 'capitalize',
  },
  tools: {
    backgroundColor: gray.tint4,
    borderRadius: '50%',
    color: gray.tint1,
    cursor: 'pointer',
    display: 'none',
    height: '40px',
    position: 'absolute',
    right: '24px',
    top: '24px',
    width: '40px',

    '&:after': {
      color: white,
      content: '"\\2807"',
      fontSize: '30px',
      marginLeft: '13px',
    },

    '&:hover': {
      '&:after': {
        color: peachy,
      },
    },
  },
  year: {
    color: gray.tint1,
    border: '1px solid',
    display: 'inline-block',
    padding: '5px',
    borderRadius: '5px',
  },
});

export default style;
