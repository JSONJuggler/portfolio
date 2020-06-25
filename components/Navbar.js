import { makeStyles } from "@material-ui/core/styles";
import { Fragment, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import { useRouter } from "next/router";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fade from "@material-ui/core/Fade";
import Tooltip from "@material-ui/core/Tooltip";
import Paper from "@material-ui/core/Paper";

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
}));

const Navbar = () => {
  const classes = useStyles();

  const trigger = useScrollTrigger({ target: undefined });

  const router = useRouter();

  const [atTop, setAtTop] = useState(undefined);

  const [pastLanding, setPastLanding] = useState(undefined);

  const [routing, setRouting] = useState({
    url: "",
    starting: true,
    complete: false,
  });

  const handleRouteChangeStart = (url) => {
    console.log("starting nav");
    setRouting((prev) => ({ ...prev, starting: true, complete: false, url }));
  };

  const handleRouteChangeComplete = (url) => {
    console.log("ending nav");
    setRouting((prev) => ({ ...prev, starting: false, complete: true }));
  };

  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      setAtTop((prev) => true);
    }
    if (window.pageYOffset > 0) {
      setAtTop((prev) => false);
      if (window.pageYOffset > window.innerHeight) {
        setPastLanding((prev) => true);
      }
      if (window.pageYOffset + 150 < window.innerHeight) {
        setPastLanding((prev) => false);
      }
    }
  };

  useEffect(() => {
    if (window.pageYOffset === 0) {
      setAtTop((prev) => true);
    }
    if (window.pageYOffset > 0) {
      setAtTop((prev) => false);
      if (window.pageYOffset > window.innerHeight) {
        setPastLanding((prev) => true);
      }
      if (window.pageYOffset + 150 < window.innerHeight) {
        setPastLanding((prev) => false);
      }
    }

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
                      <Tooltip title="Home">
                        <IconButton
                          aria-label="home"
                          color="inherit"
                          onClick={() => router.push("/")}
                        >
                          <Typography
                            className={classes.titleText}
                            variant="h6"
                          >
                            home
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <Tooltip title="About">
                        <IconButton
                          aria-label="about"
                          color="inherit"
                          onClick={() => router.push("/about")}
                        >
                          <Typography
                            className={classes.titleText}
                            variant="h6"
                          >
                            about
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <Tooltip title="Blog">
                        <IconButton
                          aria-label="blog"
                          color="inherit"
                          onClick={() => router.push("/blog")}
                        >
                          <Typography
                            className={classes.titleText}
                            variant="h6"
                          >
                            blog
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item xs="auto" className={classes.titleMobile}>
                      <Tooltip title="Home">
                        <IconButton
                          aria-label="home"
                          color="inherit"
                          onClick={() => router.push("/")}
                        >
                          <Typography
                            className={classes.titleText}
                            variant="h6"
                          >
                            home
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item className={classes.titleMobile}>
                      <Tooltip title="About">
                        <IconButton
                          aria-label="about"
                          color="inherit"
                          onClick={() => router.push("/about")}
                        >
                          <Typography
                            className={classes.titleText}
                            variant="h6"
                          >
                            about
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item xs="auto" className={classes.titleMobile}>
                      <Tooltip title="Contact">
                        <IconButton
                          aria-label="contact"
                          color="inherit"
                          onClick={(e) => console.log("click")}
                        >
                          <Typography
                            className={classes.titleText}
                            variant="h6"
                          >
                            contact
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item className={classes.titleMobile}>
                      <Tooltip title="Blog">
                        <IconButton
                          aria-label="blog"
                          color="inherit"
                          onClick={() => router.push("/blog")}
                        >
                          <Typography
                            className={classes.titleText}
                            variant="h6"
                          >
                            blog
                          </Typography>
                        </IconButton>
                      </Tooltip>
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
                      <Tooltip title="Home">
                        <IconButton
                          aria-label="home"
                          color="inherit"
                          onClick={() => router.push("/")}
                        >
                          <Typography
                            className={classes.titleText}
                            color="primary"
                            variant="h6"
                          >
                            home
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <Tooltip title="About">
                        <IconButton
                          aria-label="about"
                          color="inherit"
                          onClick={() => router.push("/about")}
                        >
                          <Typography
                            className={classes.titleText}
                            color="primary"
                            variant="h6"
                          >
                            about
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <Tooltip title="Contact">
                        <IconButton
                          aria-label="contact"
                          color="inherit"
                          onClick={(e) => console.log("click")}
                        >
                          <Typography
                            className={classes.titleText}
                            color="primary"
                            variant="h6"
                          >
                            contact
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <Tooltip title="Blog">
                        <IconButton
                          aria-label="blog"
                          color="inherit"
                          onClick={() => router.push("/blog")}
                        >
                          <Typography
                            className={classes.titleText}
                            color="primary"
                            variant="h6"
                          >
                            blog
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item xs="auto" className={classes.titleMobile}>
                      <Tooltip title="Home">
                        <IconButton
                          aria-label="home"
                          color="inherit"
                          onClick={() => router.push("/")}
                        >
                          <Typography
                            className={classes.titleText}
                            color="primary"
                            variant="h6"
                          >
                            home
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item className={classes.titleMobile}>
                      <Tooltip title="About">
                        <IconButton
                          aria-label="about"
                          color="inherit"
                          onClick={() => router.push("/about")}
                        >
                          <Typography
                            className={classes.titleText}
                            color="primary"
                            variant="h6"
                          >
                            about
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item xs="auto" className={classes.titleMobile}>
                      <Tooltip title="Contact">
                        <IconButton
                          aria-label="contact"
                          color="inherit"
                          onClick={(e) => console.log("click")}
                        >
                          <Typography
                            className={classes.titleText}
                            variant="h6"
                            color="primary"
                          >
                            contact
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item className={classes.titleMobile}>
                      <Tooltip title="Blog">
                        <IconButton
                          aria-label="blog"
                          color="inherit"
                          onClick={() => router.push("/blog")}
                        >
                          <Typography
                            className={classes.titleText}
                            color="primary"
                            variant="h6"
                          >
                            blog
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Toolbar>
              </Container>
            </AppBar>
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
                      <Tooltip title="Home">
                        <IconButton
                          aria-label="home"
                          color="inherit"
                          onClick={() => router.push("/")}
                        >
                          <Typography
                            className={classes.titleText}
                            color="primary"
                            variant="h6"
                          >
                            home
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <Tooltip title="About">
                        <IconButton
                          aria-label="about"
                          color="inherit"
                          onClick={() => router.push("/about")}
                        >
                          <Typography
                            className={classes.titleText}
                            color="primary"
                            variant="h6"
                          >
                            about
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <Tooltip title="Contact">
                        <IconButton
                          aria-label="contact"
                          color="inherit"
                          onClick={(e) => console.log("click")}
                        >
                          <Typography
                            className={classes.titleText}
                            color="primary"
                            variant="h6"
                          >
                            contact
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item className={classes.titleDesktop}>
                      <Tooltip title="Blog">
                        <IconButton
                          aria-label="blog"
                          color="inherit"
                          onClick={() => router.push("/blog")}
                        >
                          <Typography
                            className={classes.titleText}
                            color="primary"
                            variant="h6"
                          >
                            blog
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item xs="auto" className={classes.titleMobile}>
                      <Tooltip title="Home">
                        <IconButton
                          aria-label="home"
                          color="inherit"
                          onClick={() => router.push("/")}
                        >
                          <Typography
                            className={classes.titleText}
                            color="primary"
                            variant="h6"
                          >
                            home
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item className={classes.titleMobile}>
                      <Tooltip title="About">
                        <IconButton
                          aria-label="about"
                          color="inherit"
                          onClick={() => router.push("/about")}
                        >
                          <Typography
                            className={classes.titleText}
                            color="primary"
                            variant="h6"
                          >
                            about
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item xs="auto" className={classes.titleMobile}>
                      <Tooltip title="Contact">
                        <IconButton
                          aria-label="contact"
                          color="inherit"
                          onClick={(e) => console.log("click")}
                        >
                          <Typography
                            className={classes.titleText}
                            variant="h6"
                            color="primary"
                          >
                            contact
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item className={classes.titleMobile}>
                      <Tooltip title="Blog">
                        <IconButton
                          aria-label="blog"
                          color="inherit"
                          onClick={() => router.push("/blog")}
                        >
                          <Typography
                            className={classes.titleText}
                            color="primary"
                            variant="h6"
                          >
                            blog
                          </Typography>
                        </IconButton>
                      </Tooltip>
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
