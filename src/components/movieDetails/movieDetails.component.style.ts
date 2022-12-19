import { createUseStyles } from 'react-jss';
import { gray, peachy, darkGradient } from '@app/style/variables/colors';

const style = createUseStyles({
  backToSearchButton: {
    cursor: 'pointer',
    transform: 'rotate(90deg)',

    '&:hover': {
      color: peachy,
    },
  },
  movieDetails: {
    display: 'flex',
    margin: '40px 0 40px',
  },
  movieDetailsContainer: {
    background: `
      linear-gradient(${darkGradient},${darkGradient}),
      url(assets/images/covers.jpg)
    `,
    padding: '20px 0',
    color: gray.tint1,
  },
  movieDetailsData: {
    margin: '0 60px',
  },
  movieDetailsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  movieDescription: {
    fontSize: '1.2rem',
    fontWeight: 100,
  },
  movieDetaisMetadata: {
    color: peachy,
    width: '180px',
    display: 'flex',
    fontSize: '1.5rem',
    fontWeight: 100,
    justifyContent: 'space-between',

  },
  movieRating: {
    border: `1px solid ${gray.tint1}`,
    borderRadius: '50%',
    color: 'green',
    display: 'inline-block',
    fontSize: '30px',
    fontWeight: 100,
    margin: '20px',
    minWidth: '40px',
    padding: '0.6rem',
    textAlign: 'center',
  },
  movieTitle: {
    display: 'inline-block',
    fontSize: '3em',
    fontWeight: 100,
    marginBottom: 0,
    textTransform: 'capitalize',
  },
});

export default style;
