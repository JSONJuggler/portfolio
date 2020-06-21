import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Socials from "./Socials";
import Copyright from "./Copyright";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  gridContainer: {},
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          className={classes.gridContainer}
          justify="center"
          alignItems="center"
          direction="column"
          spacing={2}
        >
          <Grid container justify="center" spacing={4}>
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
