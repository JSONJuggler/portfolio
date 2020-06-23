import { makeStyles } from "@material-ui/core/styles";
import translator from "../gifs/translator.gif";
import translator1 from "../imgs/translator1.png";
import translator2 from "../imgs/translator2.png";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridItem: {},
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h2" align="center">
              Projects
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
  );
};

export default Projects;
