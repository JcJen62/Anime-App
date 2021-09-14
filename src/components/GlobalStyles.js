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
        'background-color': '#f5f5da'
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
        }
    },
    itemFlex: {
      display: 'flex',
      flexDirection: 'row'
    },
    infoFlex: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
}));

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;