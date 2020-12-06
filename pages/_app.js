import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRedux } from '../lib/redux';

import ContactBackdrop from '../components/ContactBackdrop';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import theme from '../themes/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function MyApp({ Component, pageProps }) {
  const classes = useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <div className={classes.root}>
      <Head>
        <meta name="author" content="Beau Reescano" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta prefix="og: http://ogp.me/ns#" property="og:title" content="Beau Reescano's Portfolio" />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:description"
          content="Hi, I'm Beau Reescano. I'm full stack web developer with a passion for everything web design. I'm creating websites and webapps using cutting edge web technologies."
        />
        <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://webdeveloperbeau.com" />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image"
          content="https://webdeveloperbeau.com/portfoliopic.png"
        />
        <meta prefix="og: http://ogp.me/ns#" property="og:site_name" content="webdeveloperbeau.com" />
        <meta prefix="og: http://ogp.me/ns#" property="og:image:width" content="2086" />
        <meta prefix="og: http://ogp.me/ns#" property="og:image:height" content="1538" />
        <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
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
