import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Fade from "@material-ui/core/Fade";
import throttle from "lodash/throttle";
import VisibilitySensor from "react-visibility-sensor";
import {
  SvgJavascript,
  SvgNextjs,
  SvgRedux,
  SvgMaterialui,
  SvgMongodb,
  SvgHtml5,
  SvgCss,
  SvgNodeJs,
  SvgReact,
} from "../icons/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    minHeight: "calc(var(--vh, 1vh)*100)",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  gridContainer: {
    margin: "auto",
  },
  text: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  entry: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    margin: "auto",
  },
}));

const Qualifications = () => {
  const classes = useStyles();

  const [vh, setVh] = useState(0);
  const [initialMobileVh, setInitialMobileVh] = useState(0);
  const [vhThreshhold, setVhThreshhold] = useState(0.3);

  const handleResize = () => {
    setVh((prev) => window.innerHeight);
  };

  useEffect(() => {
    if (vh !== 0) {
      //alert(Math.abs(window.innerHeight - initialMobileVh) / initialMobileVh);
      if (
        //navigator.userAgent.indexOf("Safari") != -1 &&
        navigator.userAgent.indexOf("Chrome") == -1 &&
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream
      ) {
        if (
          Math.abs(window.innerHeight - initialMobileVh) / initialMobileVh >
          vhThreshhold
        ) {
          document.documentElement.style.setProperty(
            "--vh",
            `${window.innerHeight * 0.01}px`
          );
        } else {
          document.documentElement.style.setProperty(
            "--vh",
            `${initialMobileVh * 0.01}px`
          );
        }
      } else {
        document.documentElement.style.setProperty(
          "--vh",
          `${window.innerHeight * 0.01}px`
        );
      }
    }
  }, [vh]);

  useEffect(() => {
    setVh((prev) => window.outerHeight);
    setInitialMobileVh((prev) => window.innerHeight);
    window.addEventListener("resize", throttle(handleResize, 800));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [componentIn, setComponentIn] = useState(false);

  function onChange(isVisible) {
    if (isVisible) {
      setComponentIn((prev) => true);
    }
    if (!isVisible) {
      setComponentIn((prev) => false);
    }
  }

  return (
    <VisibilitySensor
      offset={{ bottom: 200 }}
      minTopValue={300}
      partialVisibility
      onChange={onChange}
    >
      <Fade timeout={1000} in={componentIn}>
        <div className={classes.root}>
          <Container className={classes.gridContainer} maxWidth="sm">
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item xs={12}>
                <Typography
                  className={classes.text}
                  variant="h2"
                  align="center"
                >
                  Tools of Choice
                </Typography>
                <Typography
                  className={classes.text}
                  variant="body1"
                  align="center"
                >
                  Although the following set of tools are my goto for front-end
                  and back-end developement, I'm always experimenting and
                  challenging myself to try emerging tools and technologies to
                  ensure that I can create engaging and most importantly,{" "}
                  <em>delightful</em> experiences for the end user!
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    Javascript
                  </Typography>
                  <SvgJavascript className={classes.icon} size="5x" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    HTML5
                  </Typography>
                  <SvgHtml5 className={classes.icon} size="5x" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    CSS
                  </Typography>
                  <SvgCss className={classes.icon} size="5x" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    React
                  </Typography>
                  <SvgReact className={classes.icon} size="5x" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    Redux
                  </Typography>
                  <SvgRedux
                    className={classes.icon}
                    height="55px"
                    width="55px"
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    Material-UI
                  </Typography>
                  <SvgMaterialui
                    className={classes.icon}
                    height="55px"
                    width="55px"
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    NodeJS
                  </Typography>
                  <SvgNodeJs className={classes.icon} size="5x" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    NextJS
                  </Typography>
                  <SvgNextjs
                    className={classes.icon}
                    height="50px"
                    width="80px"
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    MongoDB
                  </Typography>
                  <SvgMongodb
                    className={classes.icon}
                    height="40px"
                    width="80px"
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Fade>
    </VisibilitySensor>
  );
};

export default Qualifications;
