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
        <meta name="author" content="Beau Reescano" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:title" content="Beau Reescano's Portfolio" />
        <meta
          property="og:description"
          content="Hi, I'm Beau Reescano, a full stack web developer"
        />
        <meta property="og:url" content="https://webdeveloperbeau.com" />
        <meta
          property="og:image"
          content="https://webdeveloperbeau.com/portfoliopic.png"
        />
        <meta property="og:site_name" content="webdeveloperbeau.com" />
        <meta property="og:imageWidth" content="2086" />
        <meta property="og:imageHeight" content="1538" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="JSONJuggler" />
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
