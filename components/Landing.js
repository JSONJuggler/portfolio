import { makeStyles } from "@material-ui/core/styles";
import { SvgDownArrow } from "../icons/icons";
import throttle from "lodash/throttle";
import { useEffect, useCallback } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "95vh",
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

  const handleScroll = () => {
    console.log("about to log");
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 800));
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
