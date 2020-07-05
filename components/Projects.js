import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import translator from "../imgs/translator.png";
import portfolio from "../imgs/portfolio.png";
import recipemanager from "../imgs/recipemanager.png";
import anone from "../imgs/anone.png";
import datastructres from "../imgs/datastructures.jpg";
import weather from "../imgs/weather.png";
import Grid from "@material-ui/core/Grid";
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
  SvgCss,
  SvgHtml5,
} from "../icons/icons";

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(4),
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
    marginTop: "auto",
  },
  description: {
    overflowY: "auto",
    marginBottom: "auto",
  },
  spacing: {
    marginLeft: theme.spacing(1),
  },
  cardFooter: {
    marginTop: theme.spacing(-3),
  },
  footerIcons: {},
}));

const Projects = ({ projects }) => {
  const classes = useStyles();

  const getImage = (imageName) => {
    switch (imageName) {
      case "translator":
        return translator;
      case "portfolio":
        return portfolio;
      case "recipemanager":
        return recipemanager;
      case "anone":
        return anone;
      case "datastructures":
        return datastructres;
      case "weather":
        return weather;
      default:
        return;
    }
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case "SvgJavascript":
        return (
          <SvgJavascript key={iconName} className={classes.icon} size="2x" />
        );
      case "SvgReact":
        return <SvgReact key={iconName} className={classes.icon} size="2x" />;
      case "SvgNodeJs":
        return <SvgNodeJs key={iconName} className={classes.icon} size="2x" />;
      case "SvgHtml5":
        return <SvgHtml5 key={iconName} className={classes.icon} size="2x" />;
      case "SvgCss":
        return <SvgCss key={iconName} className={classes.icon} size="2x" />;
      case "SvgRedux":
        return (
          <SvgRedux
            key={iconName}
            className={classes.icon}
            height="23px"
            width="23px"
          />
        );
      case "SvgMaterialui":
        return (
          <SvgMaterialui
            key={iconName}
            className={classes.icon}
            height="23px"
            width="23px"
          />
        );
      case "SvgNextjs":
        return (
          <SvgNextjs
            key={iconName}
            className={classes.icon}
            height="25px"
            width="40px"
          />
        );
      case "SvgMongodb":
        return (
          <SvgMongodb
            key={iconName}
            className={classes.icon}
            height="20px"
            width="60px"
          />
        );
      default:
        return;
    }
  };

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
                  className={classes.text}
                  variant="h2"
                  align="center"
                >
                  Projects
                </Typography>
                <Typography
                  className={classes.text}
                  variant="body1"
                  align="center"
                >
                  The following projects have been key in facilitating my growth
                  as a web developer. Each project utilizes a combination of
                  research, experimentation and applied techniques or concepts
                  that are critical for developing any successful experience.
                  Each of these projects are deployed using Heroku's basic tier
                  so the app may need a moment to wake on initial request.
                </Typography>
              </Grid>
              {projects.map((project) => {
                return (
                  <Grid
                    key={project.title}
                    item
                    className={classes.gridItem}
                    xs={12}
                    md={6}
                  >
                    <Card className={classes.cardRoot}>
                      <CardMedia
                        className={classes.media}
                        image={getImage(project.image)}
                      />
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <div className={classes.icons}>
                            {project.icons.map((icon) => {
                              return getIcon(icon);
                            })}
                          </div>
                          <div className={classes.cardTitle}>
                            <Typography variant="h6" align="center">
                              {project.title}
                            </Typography>
                          </div>
                          <div className={classes.description}>
                            <Typography variant="body2" align="center">
                              {project.description}
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
                            {project.live && (
                              <Grid item>
                                <IconButton
                                  size="small"
                                  color="primary"
                                  onClick={() =>
                                    window.location.assign(project.live)
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
                            )}
                            <Grid item>
                              <IconButton
                                size="small"
                                color="primary"
                                onClick={() =>
                                  window.location.assign(project.source)
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
                );
              })}
            </Grid>
          </Container>
        </div>
      </Fade>
    </VisibilitySensor>
  );
};

export default Projects;
