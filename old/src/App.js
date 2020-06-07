import React, { Fragment } from "react";
import Landing from "./components/Landing";
import theme from "./stylings/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Landing />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
