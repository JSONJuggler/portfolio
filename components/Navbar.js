import { makeStyles } from "@material-ui/core/styles";
import { Fragment, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useRouter } from "next/router";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fade from "@material-ui/core/Fade";
import { SvgDownArrow } from "../icons/icons";
import CustomLink from "../components/CustomLink";

import Contact from "../components/Contact";

const useStyles = makeStyles((theme) => ({
  hidden: {
    visibility: "hidden",
  },
  titleText: {},
  coloredNavBar: {
    background: theme.palette.background.default,
  },
  titleDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  titleMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  bounceAnimation: {
    position: "fixed",
    animation: `$bounce 2s infinite`,
    top: "auto",
    bottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      bottom: theme.spacing(6),
    },
  },
  "@keyframes bounce": {
    "0%": {
      transform: "translateY(0)",
      opacity: "1",
    },
    "50%": {
      transform: "translateY(30%)",
      opacity: "0",
    },
    "100%": {
      transform: "translateY(0)",
      opacity: "1",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const trigger = useScrollTrigger({ target: undefined });

  const router = useRouter();

  const [atTop, setAtTop] = useState(undefined);

  const [arrowIn, setArrowIn] = useState(undefined);

  const [pastLanding, setPastLanding] = useState(undefined);

  const [routing, setRouting] = useState({
    url: "",
    starting: true,
    complete: false,
  });

  const handleRouteChangeStart = (url) => {
    console.log("starting nav");
    setRouting((prev) => ({ ...prev, starting: true, complete: false, url }));
    window.scroll(0, 0);
  };

  const handleRouteChangeComplete = (url) => {
    console.log("ending nav");
    setRouting((prev) => ({ ...prev, starting: false, complete: true }));
  };

  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      setAtTop((prev) => true);
      setArrowIn((prev) => true);
    }
    if (window.pageYOffset > 0) {
      setAtTop((prev) => false);
      if (window.pageYOffset > window.innerHeight) {
        setPastLanding((prev) => true);
      }
      if (window.pageYOffset + 150 < window.innerHeight) {
        setPastLanding((prev) => false);
      }
      if (window.pageYOffset > window.innerHeight / 2) {
        setArrowIn((prev) => false);
      }
      if (window.pageYOffset + 150 < window.innerHeight / 2) {
        setArrowIn((prev) => true);
      }
    }
  };

  useEffect(() => {
    if (window.pageYOffset === 0) {
      setAtTop((prev) => true);
      setArrowIn((prev) => true);
    }
    if (window.pageYOffset > 0) {
      setAtTop((prev) => false);
      if (window.pageYOffset > window.innerHeight) {
        setPastLanding((prev) => true);
      }
      if (window.pageYOffset + 150 < window.innerHeight) {
        setPastLanding((prev) => false);
      }
      if (window.pageYOffset > window.innerHeight / 2) {
        setArrowIn((prev) => false);
      }
      if (window.pageYOffset + 150 < window.innerHeight / 2) {
        setArrowIn((prev) => true);
      }
    }
    //if (window.pageYOffset > window.innerHeight* 0) {
    //setAtTop((prev) => true);
    //}

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);

  return (
    <Fragment>
      {router.asPath === "/" && (
        <Fragment>
          <Fade timeout={{ enter: 1000, exit: 300 }} in={atTop}>
            <AppBar color="transparent" elevation={0} position="fixed">
              <Container maxWidth="lg" disableGutters={true}>
                <Toolbar>
                  <Grid
                    container
                    spacing={2}
                    justify="space-around"
                    alignItems="center"
                  >
                    <Grid item xs={true} className={classes.titleDesktop}>
                      <CustomLink href="/" title="home">
                        <Typography className={classes.titleText} variant="h6">
                          home
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <CustomLink href="/about" title="about">
                        <Typography className={classes.titleText} variant="h6">
                          about
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <Contact>
                        <Typography
                          className={classes.titleText}
                          variant="h6"
                          color="primary"
                        >
                          contact
                        </Typography>
                      </Contact>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <CustomLink href="/blog" title="blog">
                        <Typography className={classes.titleText} variant="h6">
                          blog
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item xs="auto" className={classes.titleMobile}>
                      <CustomLink href="/" title="home">
                        <Typography className={classes.titleText} variant="h6">
                          home
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item className={classes.titleMobile}>
                      <CustomLink href="/about" title="about">
                        <Typography className={classes.titleText} variant="h6">
                          about
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item xs="auto" className={classes.titleMobile}>
                      <Contact>
                        <Typography className={classes.titleText} variant="h6">
                          contact
                        </Typography>
                      </Contact>
                    </Grid>
                    <Grid item className={classes.titleMobile}>
                      <CustomLink href="/blog" title="blog">
                        <Typography className={classes.titleText} variant="h6">
                          blog
                        </Typography>
                      </CustomLink>
                    </Grid>
                  </Grid>
                </Toolbar>
              </Container>
            </AppBar>
          </Fade>
          <Fade
            timeout={{ enter: 1000, exit: 1000 }}
            in={!trigger && pastLanding}
          >
            <AppBar
              className={classes.coloredNavBar}
              elevation={6}
              position="fixed"
            >
              <Container maxWidth="lg" disableGutters={true}>
                <Toolbar>
                  <Grid
                    container
                    spacing={2}
                    justify="space-around"
                    alignItems="center"
                  >
                    <Grid item xs={true} className={classes.titleDesktop}>
                      <CustomLink href="/" title="home">
                        <Typography className={classes.titleText} variant="h6">
                          home
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <CustomLink href="/about" title="about">
                        <Typography className={classes.titleText} variant="h6">
                          about
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <Contact>
                        <Typography
                          className={classes.titleText}
                          color="primary"
                          variant="h6"
                        >
                          contact
                        </Typography>
                      </Contact>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <CustomLink href="/blog" title="blog">
                        <Typography className={classes.titleText} variant="h6">
                          blog
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item xs="auto" className={classes.titleMobile}>
                      <CustomLink href="/" title="home">
                        <Typography className={classes.titleText} variant="h6">
                          home
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item className={classes.titleMobile}>
                      <CustomLink href="/about" title="about">
                        <Typography className={classes.titleText} variant="h6">
                          about
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item xs="auto" className={classes.titleMobile}>
                      <Contact>
                        <Typography
                          className={classes.titleText}
                          variant="h6"
                          color="primary"
                        >
                          contact
                        </Typography>
                      </Contact>
                    </Grid>
                    <Grid item className={classes.titleMobile}>
                      <CustomLink href="/blog" title="blog">
                        <Typography className={classes.titleText} variant="h6">
                          blog
                        </Typography>
                      </CustomLink>
                    </Grid>
                  </Grid>
                </Toolbar>
              </Container>
            </AppBar>
          </Fade>
          <Fade timeout={1000} in={arrowIn}>
            <div className={classes.bounceAnimation}>
              <SvgDownArrow />
            </div>
          </Fade>
        </Fragment>
      )}
      {router.asPath !== "/" && (
        <Fragment>
          <Fade timeout={{ enter: 1000, exit: 1000 }} in={!trigger}>
            <AppBar
              className={classes.coloredNavBar}
              elevation={6}
              position="fixed"
            >
              <Container maxWidth="lg" disableGutters={true}>
                <Toolbar>
                  <Grid
                    container
                    spacing={2}
                    justify="space-around"
                    alignItems="center"
                  >
                    <Grid item xs={true} className={classes.titleDesktop}>
                      <CustomLink href="/" title="home">
                        <Typography className={classes.titleText} variant="h6">
                          home
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <CustomLink href="/about" title="about">
                        <Typography className={classes.titleText} variant="h6">
                          about
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <Contact>
                        <Typography
                          className={classes.titleText}
                          color="primary"
                          variant="h6"
                        >
                          contact
                        </Typography>
                      </Contact>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <CustomLink href="/blog" title="blog">
                        <Typography className={classes.titleText} variant="h6">
                          blog
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item xs="auto" className={classes.titleMobile}>
                      <CustomLink href="/" title="home">
                        <Typography className={classes.titleText} variant="h6">
                          home
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item className={classes.titleMobile}>
                      <CustomLink href="/about" title="about">
                        <Typography className={classes.titleText} variant="h6">
                          about
                        </Typography>
                      </CustomLink>
                    </Grid>
                    <Grid item xs="auto" className={classes.titleMobile}>
                      <Contact>
                        <Typography
                          className={classes.titleText}
                          variant="h6"
                          color="primary"
                        >
                          contact
                        </Typography>
                      </Contact>
                    </Grid>
                    <Grid item className={classes.titleMobile}>
                      <CustomLink href="/blog" title="blog">
                        <Typography className={classes.titleText} variant="h6">
                          blog
                        </Typography>
                      </CustomLink>
                    </Grid>
                  </Grid>
                </Toolbar>
              </Container>
            </AppBar>
          </Fade>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Navbar;
