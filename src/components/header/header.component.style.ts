import { createUseStyles } from 'react-jss';
import { white, gray, transparent } from '@app/style/variables/colors';

const HEADER_HEIGHT = '350px';

const style = createUseStyles({
  header: {
    height: HEADER_HEIGHT,
    background: 'url(assets/images/covers.jpg)',
  },
  headerContainer: {
    height: HEADER_HEIGHT,
    padding: '20px',
  },
  logoContainer: {
    position: 'absolute',
    top: '20px',
  },
  addMovieButtonContainer: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  searchContainer: {
    marginTop: '100px',
    padding: '0 50px',
  },
  inputContainer: {
    display: 'flex',
  },
  searchTitle: {
    color: white,
    fontFamily: 'Montserrat',
    fontSize: '3rem',
    fontWeight: 100,
    textTransform: 'uppercase',
    marginBottom: '2rem',
  },
  searchInput: {
    backgroundColor: transparent.gray.tint3,
    border: `1px solid ${gray.tint4}`,
    borderRadius: '5px',
    fontSize: '1.4rem',
    fontWeight: 100,
    height: '55px',
    flexGrow: 1,
    marginRight: '15px',
    color: white,
    padding: '0 1rem',
  },
});

export default style;
