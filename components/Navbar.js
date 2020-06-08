import { makeStyles } from "@material-ui/core/styles";
import { Fragment, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import { useRouter } from "next/router";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  hidden: {
    visibility: "hidden"
  },
  titleDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  titleMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();

  const router = useRouter();

  const [routing, setRouting] = useState({
    url: "",
    starting: true,
    complete: false
  });

  const handleRouteChangeStart = url => {
    console.log("starting nav");
    setRouting(prev => ({ ...prev, starting: true, complete: false, url }));
  };

  const handleRouteChangeComplete = url => {
    console.log("ending nav");
    setRouting(prev => ({ ...prev, starting: false, complete: true }));
  };

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
      <AppBar position="fixed">
        <Container maxWidth="lg" disableGutters={true}>
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item className={classes.titleDesktop}>
                <Tooltip title="Home">
                  <IconButton
                    aria-label="home"
                    color="inherit"
                    onClick={e => console.log("click")}
                  >
                    <Typography variant="h6">Home</Typography>
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item className={classes.titleMobile}>
                <Tooltip title="Home">
                  <IconButton
                    aria-label="home"
                    color="inherit"
                    onClick={e => console.log("click")}
                  >
                    <HomeIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar className={classes.hidden}></Toolbar>
    </Fragment>
  );
};

export default Navbar;
