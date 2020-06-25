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
  about: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(2),
  },
  bodyText: {
    width: "100%",
    marginTop: "auto",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  gridEntry: {
    marginBottom: theme.spacing(3),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  gridContainer: {
    marginBottom: theme.spacing(3),
  },
}));

const about = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <div className={classes.bodyText}>
          <div className={classes.about}>
            <Typography variant="h4">Hello again, I'm Beau</Typography>
          </div>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={4} md={3}>
              <Typography variant="body1">
                <b>SKILLS</b>
              </Typography>
            </Grid>
            <Grid container item xs={8} md={9}>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">
                  Responsive and performant development across devices
                </Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Rapid prototyping</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">
                  Data consuption, manipulation, and visualization
                </Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Critical thinking</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Problem solving</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Time management</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Remote work</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Teamwork</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Customer service</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={4} md={3}>
              <Typography variant="body1">
                <b>FRONT-END</b>
              </Typography>
            </Grid>
            <Grid container item xs={8} md={9}>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Javascript</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">HTML5</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">CSS</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">React</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Redux</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Material-UI</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">NextJS</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={4} md={3}>
              <Typography variant="body1">
                <b>BACK-END</b>
              </Typography>
            </Grid>
            <Grid container item xs={8} md={9}>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">NodeJS</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Express</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">MongoDB</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">FireBase</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">PostgreSQL</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={4} md={3}>
              <Typography variant="body1">
                <b>OTHER TOOLS</b>
              </Typography>
            </Grid>
            <Grid container item xs={8} md={9}>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Git</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Heroku</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">VIM</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Command Line</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Socket.IO</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Rollbar</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">Unity</Typography>
              </Grid>
              <Grid item className={classes.gridEntry} xs={6} md={4}>
                <Typography variant="body1">C#</Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <ContactMe />
    </Container>
  );
};

export default about;
