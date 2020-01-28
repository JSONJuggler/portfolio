import React, { Fragment } from "react";
import Landing from "./components/Landing";
import theme from "./stylings/theme";
import { ThemeProvider } from "styled-components";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Landing />
        </Fragment>
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default App;
