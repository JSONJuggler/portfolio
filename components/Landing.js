import { makeStyles } from "@material-ui/core/styles";
import { SvgDownArrow } from "../icons/icons";
import throttle from "lodash/throttle";
import { useEffect, useCallback, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    minHeight: "calc(var(--vh, 1vh)*100)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bounceAnimation: {
    display: "flex",
    animation: `$bounce 2s infinite`,
    marginTop: "auto",
    paddingBottom: theme.spacing(6),
  },
  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": {
      transform: "translateY(0)",
    },
    "40%": {
      transform: "translateY(-30%)",
    },
    "60%": {
      transform: "translateY(-15%)",
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
        navigator.userAgent.indexOf("Safari") != -1 &&
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
    setVh((prev) => window.innerHeight);
    setInitialMobileVh((prev) => window.innerHeight);
    window.addEventListener("resize", throttle(handleResize, 800));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={classes.root}>
      My name is Beau and I love building interesting things for the web and
      beyond!
      <div className={classes.bounceAnimation}>
        <SvgDownArrow />
      </div>
    </div>
  );
};

export default Landing;
