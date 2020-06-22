import { makeStyles } from "@material-ui/core/styles";
import { Fragment, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import HomeIcon from "@material-ui/icons/Home";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import HelpIcon from "@material-ui/icons/Help";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import IconButton from "@material-ui/core/IconButton";
import { useRouter } from "next/router";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  hidden: {
    visibility: "hidden",
  },
  //titleText: {
  //WebkitTextStrokeWidth: "1px",
  //WebkitTextStrokeColor: "white",
  //},
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

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const classes = useStyles();

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
      <HideOnScroll>
        <AppBar color="transparent" elevation={0} position="fixed">
          <Container maxWidth="lg" disableGutters={true}>
            <Toolbar>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={true} className={classes.titleDesktop}>
                  <Tooltip title="Home">
                    <IconButton
                      aria-label="home"
                      color="inherit"
                      onClick={(e) => console.log("click")}
                    >
                      <Typography className={classes.titleText} variant="h6">
                        Home
                      </Typography>
                    </IconButton>
                  </Tooltip>
                  <Grid
                    container
                    spacing={2}
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Grid item className={classes.titleDesktop}>
                      <Tooltip title="Projects">
                        <IconButton
                          aria-label="projects"
                          color="inherit"
                          onClick={(e) => console.log("click")}
                        >
                          <Typography
                            className={classes.titleText}
                            variant="h6"
                          >
                            Projects
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
                          <Typography
                            className={classes.titleText}
                            variant="h6"
                          >
                            About
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
                          <Typography
                            className={classes.titleText}
                            variant="h6"
                          >
                            Blog
                          </Typography>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={true} className={classes.titleMobile}>
                  <Tooltip title="Home">
                    <IconButton
                      aria-label="home"
                      color="inherit"
                      onClick={(e) => console.log("click")}
                    >
                      <HomeIcon />
                    </IconButton>
                  </Tooltip>
                  <Grid
                    container
                    spacing={2}
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Grid item className={classes.titleMobile}>
                      <Tooltip title="Projects">
                        <IconButton
                          aria-label="projects"
                          color="inherit"
                          onClick={(e) => console.log("click")}
                        >
                          <ImportantDevicesIcon />
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
                          <HelpIcon />
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
                          <SpeakerNotesIcon />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </Fragment>
  );
};

export default Navbar;
