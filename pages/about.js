import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import ContactMe from "../components/ContactMe";
import Skills from "../components/Socials";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "70vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  bodyText: {
    width: "100%",
    marginTop: "auto",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  gridEntry: {
    marginBottom: theme.spacing(2),
  },
}));

const about = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <div className={classes.bodyText}>
          <Typography variant="h4">Hello again, I'm Beau</Typography>
          <Grid container justify="space-between">
            <Grid item xs={4} md={3}>
              <Typography variant="body1">
                <b>FRONT-END</b>
              </Typography>
            </Grid>
            <Grid container item xs={8} md={9} justify="space-between">
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Express</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Heroku</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">FireBase</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body2">PostgreSQL</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body2">Command Line</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body2">VIM</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body2">Socket.IO</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body2">Rollbar</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body2">C#</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body2">Unity</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="h4">Skills</Typography>
          <Typography variant="h4">Tools</Typography>
        </div>
        <ContactMe />
      </div>
    </Container>
  );
};

export default about;
