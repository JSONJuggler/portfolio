import { makeStyles } from "@material-ui/core/styles";
import { SvgDownArrow } from "../icons/icons";
import throttle from "lodash/throttle";
import { useEffect, useCallback } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "95vh",
    minHeight: "calc(var(--vh, 1vh)*95)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bounceAnimation: {
    display: "flex",
    animation: `$bounce 2s infinite`,
    marginTop: "auto",
    paddingBottom: theme.spacing(10),
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

  //const handleResize = () => {
  //let vh = window.innerHeight * 0.01;
  //document.documentElement.style.setProperty("--vh", `${vh}px`);
  //};

  //useEffect(() => {
  //window.addEventListener("resize", throttle(handleResize, 800));
  //return () => {
  //window.removeEventListener("resize", handleResize);
  //};
  //}, []);

  useEffect(() => {
    //if (typeof window !== "undefined") {
    if (
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1 &&
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !window.MSStream
    ) {
      let vh = (window.innerHeight - 10) * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      //}
    }
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
