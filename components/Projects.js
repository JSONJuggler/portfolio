import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import translator from "../imgs/test.png";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import LinkIcon from "@material-ui/icons/Link";
import IconButton from "@material-ui/core/IconButton";
import VisibilitySensor from "react-visibility-sensor";
import {
  SvgJavascript,
  SvgReact,
  SvgRedux,
  SvgMaterialui,
  SvgNextjs,
  SvgNodeJs,
  SvgMongodb,
  SvgGithub,
} from "../icons/icons";

const useStyles = makeStyles((theme) => ({
  gridContainer: {},
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  cardRoot: {
    width: 340,
    height: 300,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      width: 450,
      height: 350,
    },
  },
  media: {
    width: "45%",
    backgroundPosition: "left",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "55%",
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    padding: theme.spacing(0.5),
    [theme.breakpoints.up("sm")]: {
      padding: 0,
      margin: theme.spacing(0.5),
    },
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cardTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0),
  },
  description: {
    overflow: "scroll",
  },
  spacing: {
    marginLeft: theme.spacing(1),
  },
  cardFooter: {
    marginTop: theme.spacing(-3),
  },
  footerIcons: {},
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
          <Container disableGutters={true} maxWidth="lg">
            <Grid
              container
              className={classes.gridContainer}
              spacing={2}
              justify="center"
            >
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
                  Each of these projects are deployed using Heroku's basic tier
                  so the app may need a moment to wake on initial request.
                </Typography>
              </Grid>
              <Grid item className={classes.gridItem} xs={12} md={6}>
                <Card className={classes.cardRoot}>
                  <CardMedia
                    className={classes.media}
                    image={translator}
                    title="TEST"
                  />
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <div className={classes.icons}>
                        <SvgJavascript className={classes.icon} size="2x" />
                        <SvgReact className={classes.icon} size="2x" />
                        <SvgRedux
                          className={classes.icon}
                          height="23px"
                          width="23px"
                        />
                        <SvgMaterialui
                          className={classes.icon}
                          height="23px"
                          width="23px"
                        />
                        <SvgNodeJs className={classes.icon} size="2x" />
                        <SvgNextjs
                          className={classes.icon}
                          height="25px"
                          width="40px"
                        />
                        <SvgMongodb
                          className={classes.icon}
                          height="20px"
                          width="60px"
                        />
                      </div>
                      <div className={classes.cardTitle}>
                        <Typography variant="h6" align="center">
                          Translator
                        </Typography>
                      </div>
                      <div className={classes.description}>
                        <Typography variant="body2" align="center">
                          Powered by several IBM Cloud services, this translator
                          achieves speedy translations of single words by
                          generating and serving a static HTML page for the
                          requested translation. Several languages are currently
                          supported.
                        </Typography>
                      </div>
                    </CardContent>
                    <CardActions
                      className={classes.cardFooter}
                      disableSpacing={true}
                    >
                      <Grid
                        container
                        justify="space-evenly"
                        alignItems="center"
                      >
                        <Grid item>
                          <IconButton
                            size="small"
                            color="primary"
                            onClick={() =>
                              window.location.assign(
                                "https://jsonj-mytranslator.herokuapp.com/"
                              )
                            }
                          >
                            <LinkIcon />
                            <Typography
                              className={classes.spacing}
                              variant="caption"
                            >
                              Live
                            </Typography>
                          </IconButton>
                        </Grid>
                        <Grid item>
                          <IconButton
                            size="small"
                            color="primary"
                            onClick={() =>
                              window.location.assign(
                                "https://github.com/JSONJuggler/myTranslator"
                              )
                            }
                          >
                            <SvgGithub className={classes.icon} size="2x" />
                            <Typography
                              className={classes.spacing}
                              variant="caption"
                            >
                              Source
                            </Typography>
                          </IconButton>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </div>
                </Card>
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
