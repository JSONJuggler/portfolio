import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#999999',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F7F7F8',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
