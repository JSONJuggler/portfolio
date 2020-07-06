import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withRedux } from "../lib/redux";

import ContactBackdrop from "../components/ContactBackdrop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import theme from "../themes/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function MyApp({ Component, pageProps }) {
  const classes = useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <div className={classes.root}>
      <Head>
        <title>Beau | developer</title>
        <meta name="author" content="Beau Reescano" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Hi, I'm Beau Reescano. I'm a Full Stack web developer using the latest front-end and back-end technologies with a focus on React JS, Next JS, and Node JS."
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Navbar />
        <ContactBackdrop />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default withRedux(MyApp);
