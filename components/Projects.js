import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import translator from "../gifs/translator.gif";
import translator1 from "../imgs/translator1.png";
import translator2 from "../imgs/translator2.png";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import VisibilitySensor from "react-visibility-sensor";

const useStyles = makeStyles((theme) => ({
  gridItem: {},
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const Projects = () => {
  const classes = useStyles();

  const [componentIn, setComponentIn] = useState(false);

  function onChange(isVisible) {
    if (isVisible) {
      setComponentIn((prev) => true);
    }
    if (!isVisible) {
      setComponentIn((prev) => false);
    }
  }

  return (
    <VisibilitySensor
      offset={{ bottom: 200 }}
      partialVisibility
      onChange={onChange}
    >
      <Fade timeout={1000} in={componentIn}>
        <div className={classes.root}>
          <Container maxWidth="lg">
            <Grid container spacing={2} justify="center">
              <Grid item xs={12}>
                <Typography
                  className={classes.title}
                  variant="h2"
                  align="center"
                >
                  Projects
                </Typography>
                <Typography variant="body1" align="center">
                  The following projects have been key in facilitating my growth
                  as a web developer. Each project utilizes a combination of
                  research, experimentation and applied techniques or concepts
                  that are critical for developing any successful experience.
                </Typography>
              </Grid>
              <Grid item className={classes.gridItem} xs={12} md={6}>
                <img src={translator} height="100%" width="100%" />
              </Grid>
              <Grid item className={classes.gridItem} xs={12} md={6}>
                <img src={translator} height="100%" width="100%" />
              </Grid>
              <Grid item className={classes.gridItem} xs={12} md={6}>
                <img src={translator} height="100%" width="100%" />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Fade>
    </VisibilitySensor>
  );
};

export default Projects;
