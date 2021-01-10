import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const PASTEL_PURPLE = '#b19cd9';
export const PASTEL_GRAY = '#cfcfc4';
export const LIGHT_GRAY = '#f7f7f8';
export const BLACK = '#000000';
export const WHITE = '#ffffff';

export const COLORS = {
  primary: PASTEL_GRAY,
  secondary: PASTEL_PURPLE,
  background: LIGHT_GRAY,
  black: BLACK,
  white: WHITE,
};

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: COLORS.background,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
