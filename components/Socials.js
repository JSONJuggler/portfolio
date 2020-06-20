import { SvgYoutube, SvgTwitter, SvgGithub } from "../icons/icons";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Socials = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item>
        <SvgGithub size="2x" />
      </Grid>
      <Grid item>
        <SvgYoutube size="2x" />
      </Grid>
      <Grid item>
        <SvgTwitter size="2x" />
      </Grid>
    </Fragment>
  );
};

export default Socials;
