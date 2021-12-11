import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    '.App': {
        'background-color': '#6a7a81'
    },
    a: {
      textDecoration: 'none'
    },
    img: {
        height: '320px',
        width: '225px',
        '&:hover': {
          '-moz-box-shadow': '0 0 10px black',
          '-webkit-box-shadow': '0 0 10px black',
          'box-shadow': '0 0 10px black'
        },
    },
    itemFlex: {
      display: 'flex',
      flexDirection: 'row'
    },
    infoFlex: {
      display: 'flex',
      flexDirection: 'column'
    },
    buttonStuff: {
      marginBotton: 3
    },
    details: {
      display: 'flex',
      flexDirection: 'row'
    }
  }
}));

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;