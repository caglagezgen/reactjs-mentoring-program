import { gray, peachy } from '@app/style/variables/colors';

const closeButtonIcon = {
  position: 'absolute',
  left: '10px',
  top: '5px',
  content: '" "',
  height: '12px',
  width: '2px',
  backgroundColor: gray.tint1,
};

const closeButtonStyles = {
  position: 'absolute',
  top: '4px',
  right: '4px',
  width: '20px',
  height: '20px',
  backgroundColor: 'transparent',
  border: 'none',

  '&:before': {
    ...closeButtonIcon,
    transform: 'rotate(45deg)',
  },

  '&:after': {
    ...closeButtonIcon,
    transform: 'rotate(-45deg)',
  },

  '&:hover': {
    cursor: 'pointer',

    '&:before': {
      backgroundColor: peachy,
    },

    '&:after': {
      backgroundColor: peachy,
    },
  },
};

export default closeButtonStyles;
