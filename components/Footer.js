import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Socials from "./Socials";
import Copyright from "./Copyright";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "auto",
    marginBottom: theme.spacing(2)
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center" direction="column">
          <Grid item>
            <Socials />
          </Grid>
          <Grid item>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
