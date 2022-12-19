import { createUseStyles } from 'react-jss';
import { gray, white, peachy } from '@app/style/variables/colors';
import { validationStatus } from '@app/components/modals/movieDetailsModal/movieDetailsModal.component.style';

const style = createUseStyles({
  checkmark: {
    backgroundColor: white,
    height: '15px',
    left: 0,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '15px',

    '&:after': {
      border: 'solid white',
      borderWidth: '0 3px 3px 0',
      content: "''",
      display: 'none',
      height: '10px',
      left: '4px',
      top: 0,
      position: 'absolute',
      transform: 'rotate(45deg)',
      width: '4px',
    },
  },
  option: {
    fontWeight: 100,
    padding: '5px 0 5px 15px',
    textTransform: 'uppercase',

    '&:hover': {
      color: peachy,
      cursor: 'pointer',
    },

    '&:focus': {
      outline: 'none',
    },
  },
  dropdownContainer: {
    display: 'inline-block',
    position: 'relative',
    width: '100%',

    '&:not(.open) > ul': {
      display: 'none',
    },
  },
  dropdownTitle: {
    backgroundColor: gray.tint3,
    border: '1px solid transparent',
    borderRadius: '5px',
    lineHeight: '3rem',
    width: 'calc(100% - 40px)',
    height: '3rem',
    color: white,
    backgroundImage:
      `linear-gradient(45deg, transparent 50%, ${peachy} 50%),
       linear-gradient(135deg, ${peachy} 50%, transparent 50%)`,
    backgroundPosition:
      `calc(100% - 15px) 1.2em,
       calc(100% - 10px) 1.2em,
       calc(100% - 2.5em) 0.5em`,
    backgroundSize: '5px 5px, 5px 5px, 1px 1.5em',
    backgroundRepeat: 'no-repeat',
    textTransform: 'uppercase',
    fontWeight: 100,
    display: 'inline-block',
    cursor: 'pointer',
    padding: '0 20px',

    '&:hover': {
      color: peachy,
    },

    '&:focus': {
      border: '1px solid transparent',
      outline: 'none',
    },

    ...validationStatus,
  },
  sortTitle: {
    color: white,
    display: 'inline-block',
    fontFamily: 'Montserrat',
    marginRight: '20px',
    textTransform: 'uppercase',
  },
  optionsList: {
    margin: 0,
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    boxShadow: '2px 2px 10px 0px rgba(0,0,0,0.75)',

    '& > li': {
      backgroundColor: gray.tint4,
      color: 'white',

      '& input': {
        lineHeight: '3rem',
        marginRight: '1rem',
        width: '15px',

        '&:checked': {
          '& + span': {
            backgroundColor: peachy,

            '&:after': {
              display: 'block',
            },
          },
        },
      },

      '& label': {
        cursor: 'pointer',
        display: 'flex',
        position: 'relative',
        userSelect: 'none',

        '& > input': {
          cursor: 'pointer',
          height: 0,
          opacity: 0,
          position: 'absolute',
          width: 0,

        },
      },

      '& span:last-child': {
        display: 'inline-block',
        lineHeight: '2rem',
        paddingLeft: '2rem',
      },
    },
  },
});

export default style;
