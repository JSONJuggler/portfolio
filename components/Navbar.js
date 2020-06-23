import { makeStyles } from "@material-ui/core/styles";
import { Fragment, useEffect, useState } from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import { useRouter } from "next/router";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tooltip from "@material-ui/core/Tooltip";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  hidden: {
    visibility: "hidden",
  },
  titleText: {},
  transNav: {
    background: "transparent",
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeIn,
      duration: 200,
    }),
  },
  coloredNav: {
    background: theme.palette.primary.main,
  },
  goneNav: {
    opacity: 0,
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

  const [atTop, setAtTop] = useState(undefined);

  //const [trigger, setTrigger] = useState(undefined);

  const router = useRouter();

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
    }
    console.log(window);
  };

  console.log(atTop);

  useEffect(() => {
    if (window.pageYOffset === 0) {
      setAtTop((prev) => true);
    } else {
      setAtTop((prev) => false);
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
      <AppBar
        className={clsx(classes.transNav, {
          [classes.coloredNav]: !atTop,
        })}
        elevation={0}
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
                    onClick={(e) => console.log("click")}
                  >
                    <Typography className={classes.titleText} variant="h6">
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
                    onClick={(e) => console.log("click")}
                  >
                    <Typography className={classes.titleText} variant="h6">
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
                    onClick={(e) => console.log("click")}
                  >
                    <Typography className={classes.titleText} variant="h6">
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
                    onClick={(e) => console.log("click")}
                  >
                    <Typography className={classes.titleText} variant="h6">
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
                    onClick={(e) => console.log("click")}
                  >
                    <Typography className={classes.titleText} variant="h6">
                      about
                    </Typography>
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item className={classes.titleMobile}>
                <Tooltip title="Blog">
                  <IconButton
                    aria-label="blog"
                    color="inherit"
                    onClick={(e) => console.log("click")}
                  >
                    <Typography className={classes.titleText} variant="h6">
                      blog
                    </Typography>
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
