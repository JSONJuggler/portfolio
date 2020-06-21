import { makeStyles } from "@material-ui/core/styles";
import translator from "../gifs/translator.gif";
import translator1 from "../imgs/translator1.png";
import translator2 from "../imgs/translator2.png";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const useStyles = makeStyles((theme) => ({
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  gridItem: {
    padding: theme.spacing(2),
  },
  gridList: {
    flexWrap: "nowrap",
    height: "450px",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  media: {
    padding: theme.spacing(8),
  },
  text: {
    padding: theme.spacing(8),
    background: "yellow",
  },
  headerTitleContainer: {
    display: "flex",
  },
  headerTitle: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const translatorData = [
  {
    img: translator,
    title: "Gif",
  },
  {
    img: translator1,
    title: "Pic1",
  },
  {
    img: translator2,
    title: "Pic2",
  },
];

const Projects = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item className={classes.headerTitleContainer} xs={12}>
        <div className={classes.headerTitle}>Projects</div>
      </Grid>
      <Grid item className={classes.gridItem} xs={6}>
        <img src={translator} height="100%" width="100%" />
      </Grid>
    </Grid>
  );
};

export default Projects;
