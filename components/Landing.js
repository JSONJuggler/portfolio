import { makeStyles } from "@material-ui/core/styles";
import { SvgDownArrow } from "../icons/icons";
import throttle from "lodash/throttle";
import { useEffect, useCallback, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import Contact from "../components/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    minHeight: "calc(var(--vh, 1vh)*100)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  title: {
    //display: "flex",
    //flexDirection: "column",
    marginTop: "auto",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  contact: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "center",
      paddingTop: theme.spacing(6),
    },
  },
  bounceAnimation: {
    display: "flex",
    animation: `$bounce 2s infinite`,
    marginTop: "auto",
    paddingBottom: theme.spacing(4),
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

const Landing = () => {
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

  return (
    <div className={classes.root}>
      <Fade timeout={1000} in={true}>
        <div className={classes.title}>
          <Typography variant="h1" align="center">
            Hi, I'm Beau. I'm a <b>web developer</b> with a passion for creating
            delightful user experiences.
          </Typography>
          <div className={classes.contact}>
            <Contact>
              <Typography variant="h6">contact</Typography>
            </Contact>
          </div>
        </div>
      </Fade>
      <div className={classes.bounceAnimation}>
        <SvgDownArrow />
      </div>
    </div>
  );
};

export default Landing;
