import { createUseStyles } from 'react-jss';
import { peachy } from '@app/style/variables/colors';

const style = createUseStyles({
  common: {
    '& span': {
      fontSize: '1.1rem',
      color: peachy,
      userSelect: 'none',
    },
  },
  firstPart: {
    fontWeight: 900,
    letterSpacing: '0.2px',
    marginRight: '1px',
  },
  lastPart: {
    fontWeight: 100,
    letterSpacing: '0.8px',
  },
});

export default style;
