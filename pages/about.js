import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import ContactMe from "../components/ContactMe";
import Skills from "../components/Socials";
import Contact from "../components/Contact";

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
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
  },
  bodyText: {
    width: "100%",
    marginTop: "auto",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  bodyDetails: {
    lineHeight: theme.spacing(0.3),
  },
  bodyDetailsContact: {
    lineHeight: theme.spacing(0.3),
    textDecoration: "underline",
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
    <Fade timeout={1000} in={true}>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <div className={classes.bodyText}>
            <div className={classes.about}>
              <Typography variant="h4" gutterBottom>
                <b>Hello again, I'm Beau</b>
              </Typography>
              <Typography
                className={classes.bodyDetails}
                variant="h5"
                paragraph
                gutterBottom
              >
                By now, I’m sure you’ve already discovered that I am a web
                developer. Well that wasn’t always the case! I started out my
                life’s journey as a physicist and I was pretty happy. I was free
                to apply my critical thinking and learning abilities to come up
                with solutions for some pretty tough problems! The further along
                I went though, the less intimate my solutions felt, almost as if
                they weren’t my own. For me, this was another problem to solve.
                Fast forward a bit and here I am today!
              </Typography>
              <Typography className={classes.bodyDetails} variant="h5">
                As a developer, I am in my element. I have the ultimate freedom
                to craft solutions to an absurd number of unique problems by
                developing delightful user experiences! If you have a problem
                you'd like me to solve or if you're just interested in chatting
                about my skills and tools listed below,{" "}
                <Contact size="small">
                  <Typography
                    className={classes.bodyDetailsContact}
                    variant="h5"
                  >
                    <b>contact me!</b>
                  </Typography>
                </Contact>
              </Typography>
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
                  <Typography variant="body1">Team work</Typography>
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
    </Fade>
  );
};

export default about;
