import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333333"
    },
    secondary: {
      main: "#999999"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#FFFFFF"
    }
  }
});

export default theme;
