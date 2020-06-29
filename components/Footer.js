import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Socials from "./Socials";
import Copyright from "./Copyright";

const useStyles = makeStyles((theme) => ({
  gridRoot: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    marginTop: "auto",
  },
  socials: {
    paddingBottom: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.gridRoot}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Copyright />
      </Grid>
    </Grid>
  );
};

export default Footer;
