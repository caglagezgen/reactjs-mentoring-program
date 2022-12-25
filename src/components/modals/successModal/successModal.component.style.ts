import { gray, peachy, white } from '@app/style/variables/colors';
import { createUseStyles } from 'react-jss';
import { deleteMovieCloseButtonStyles } from '@app/components/modals/coreModal/coreModal.component.style';

const style = createUseStyles({
  background: {
    alignItems: 'center',
    backgroundColor: gray.tint4,
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '280px',
    padding: '20px 40px',
    position: 'relative',
    width: '600px',
  },
  closeButton: deleteMovieCloseButtonStyles,
  congratulations: {
    fontFamily: 'Montserrat',
    fontSize: '2.2rem',
    marginBottom: '0.5rem',
    marginTop: '0.5rem',
    textTransform: 'uppercase',
  },
  icon: {
    backgroundColor: peachy,
    borderRadius: '50%',
    height: '60px',
    display: 'block',
    marginBottom: '20px',
    position: 'relative',
    width: '60px',

    '& > span': {
      border: `4px solid ${white}`,
      borderTop: '0px',
      borderLeft: '0px',
      display: 'inline-block',
      height: '36px',
      left: '20px',
      position: 'absolute',
      top: '5px',
      transform: 'rotate(45deg)',
      width: '15px',
    },
  },
  message: {
    fontFamily: 'Montserrat',
    fontSize: '1.2rem',
  },
});

export default style;
