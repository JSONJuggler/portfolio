import { SvgYoutube, SvgTwitter, SvgGithub } from "../icons/icons";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  socialDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
  socialMobile: {
    display: "flex",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Socials = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item className={classes.socialDesktop}>
        <SvgGithub size="2x" />
      </Grid>
      <Grid item className={classes.socialDesktop}>
        <SvgYoutube size="2x" />
      </Grid>
      <Grid item className={classes.socialDesktop}>
        <SvgTwitter size="2x" />
      </Grid>
      <Grid item className={classes.socialMobile}>
        <SvgGithub size="2x" />
      </Grid>
      <Grid item className={classes.socialMobile}>
        <SvgYoutube size="2x" />
      </Grid>
      <Grid item className={classes.socialMobile}>
        <SvgTwitter size="2x" />
      </Grid>
    </Fragment>
  );
};

export default Socials;
