import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import translator from '../imgs/translator.png';
import portfolio from '../imgs/portfolio.png';
import recipemanager from '../imgs/recipemanager.png';
import anone from '../imgs/anone.png';
import datastructres from '../imgs/datastructures.jpg';
import jobbie from '../imgs/jobbie.png';
import weather from '../imgs/weather.png';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import LinkIcon from '@material-ui/icons/Link';
import IconButton from '@material-ui/core/IconButton';
import VisibilitySensor from 'react-visibility-sensor';
import Link from 'next/link';
import {
  SvgJavascript,
  SvgTypescript,
  SvgReact,
  SvgRedux,
  SvgMaterialui,
  SvgNextjs,
  SvgNodejs,
  SvgMongodb,
  SvgGithub,
  SvgCss,
  SvgHtml5,
  SvgFirebase,
  SvgPostgresql,
  SvgStrapi,
} from '../icons/icons';

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  cardRoot: {
    width: 340,
    height: 300,
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      width: 450,
      height: 350,
    },
  },
  anchorTag: {
    height: '100%',
    width: '45%',
  },
  projectLink: {
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.1)',
      borderRadius: theme.spacing(1),
    },
  },
  linkableMedia: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'left',
  },
  media: {
    width: '45%',
    backgroundPosition: 'left',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '55%',
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    padding: theme.spacing(0.5),
    [theme.breakpoints.up('sm')]: {
      padding: 0,
      margin: theme.spacing(0.5),
    },
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  description: {
    overflowY: 'auto',
    marginBottom: 'auto',
  },
  title: {
    marginTop: 'auto',
  },
  spacing: {
    marginLeft: theme.spacing(1),
  },
  cardFooter: {
    marginBottom: theme.spacing(-3),
  },
  footerIcons: {},
}));

const projects = [{
  "image": "portfolio",
  "source": "https://github.com/JSONJuggler/portfolio",
  "title": "Portfolio",
  "icons": ["SvgReact", "SvgRedux", "SvgMaterialui", "SvgNextjs"],
  "description": "The very website you're browsing now, built with some of my favorite tools to be responsive, performant, and SEO friendly. Each project is hosted on Heroku with a HAproxy layer to serve each app under a subdirectory of my domain, webdeveloperbeau.com"
},
{
  "image": "jobbie",
  "live": "http://jobbie.webdeveloperbo.com/",
  "source": "https://github.com/JSONJuggler/jobbie",
  "title": "Jobbie",
  "icons": ["SvgReact", "SvgNodejs", "SvgTypescript"],
  "description": "My own implementation of a job search aggregator. Powered by the headless chrome node.js api Puppeteer, this single page application uses web automation and web scraping techniques to make the job search less of a headache. Be on the lookout for tracking features and analytics coming soon."
},
{
  "image": "translator",
  "live": "https://webdeveloperbeau.com/translator",
  "source": "https://github.com/JSONJuggler/myTranslator",
  "title": "Translator",
  "icons": ["SvgReact", "SvgRedux", "SvgMaterialui", "SvgNextjs", "SvgMongodb"],
  "description": "Powered by several IBM Cloud services, this translator achieves speedy translations of single words by generating and serving a static HTML page for the requested translation. Several languages are currently supported."
},
{
  "image": "recipemanager",
  "live": "https://webdeveloperbeau.com/recipemanager",
  "source": "https://github.com/JSONJuggler/recipeManager",
  "title": "RecipeManager",
  "icons": ["SvgReact", "SvgRedux", "SvgMaterialui", "SvgNextjs", "SvgMongodb", "SvgStrapi"],
  "description": "A straight forward recipe manager with its content served from the backend using the headless CMS Strapi and authentication powered by Next-Auth. A user can create an account and log in to manage their recipes and browse other user recipes."
},
{
  "image": "anone",
  "live": "https://webdeveloperbeau.com/anone",
  "source": "https://github.com/JSONJuggler/aNone",
  "title": "Anone",
  "icons": ["SvgReact", "SvgRedux", "SvgMaterialui", "SvgNextjs", "SvgFirebase"],
  "description": "Similar to the late Yik Yak, a user can anonymously post a comment that would be visible to nearby users. Posts can also be viewed and sorted by state or simply all posts."
},
{
  "image": "weather",
  "live": "https://webdeveloperbeau.com/weather",
  "source": "https://github.com/JSONJuggler/weather-website",
  "title": "Weather",
  "icons": ["SvgJavascript", "SvgHtml5", "SvgCss", "SvgNodejs"],
  "description": "Everybody's gotta have one of these right? It's my weather app! Stay tuned for its facelift, coming soon."
},
{
  "image": "datastructures",
  "source": "https://github.com/JSONJuggler/dataStructureImplementations",
  "title": "DataStructures",
  "icons": ["SvgJavascript"],
  "description": "More akin to notes, these are datastructures I have implemented using javascript. Includes singly and doubly linked lists. Coming soon: stacks, queues, BSTs, heaps, hash tables, and graphs. Photo credit => https://dev.to/"
}]

const Projects = () => {
  const classes = useStyles();

  const getImage = (imageName) => {
    switch (imageName) {
      case 'jobbie':
        return jobbie;
      case 'translator':
        return translator;
      case 'portfolio':
        return portfolio;
      case 'recipemanager':
        return recipemanager;
      case 'anone':
        return anone;
      case 'datastructures':
        return datastructres;
      case 'weather':
        return weather;
      default:
        return;
    }
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'SvgJavascript':
        return <SvgJavascript key={iconName} className={classes.icon} size="2x" />;
      case 'SvgReact':
        return <SvgReact key={iconName} className={classes.icon} size="2x" />;
      case 'SvgNodejs':
        return <SvgNodejs key={iconName} className={classes.icon} size="2x" />;
      case 'SvgHtml5':
        return <SvgHtml5 key={iconName} className={classes.icon} size="2x" />;
      case 'SvgCss':
        return <SvgCss key={iconName} className={classes.icon} size="2x" />;
      case 'SvgTypescript':
        return <SvgTypescript key={iconName} className={classes.icon} height="23px" width="23px" />;
      case 'SvgRedux':
        return <SvgRedux key={iconName} className={classes.icon} height="23px" width="23px" />;
      case 'SvgMaterialui':
        return <SvgMaterialui key={iconName} className={classes.icon} height="23px" width="23px" />;
      case 'SvgNextjs':
        return <SvgNextjs key={iconName} className={classes.icon} height="25px" width="40px" />;
      case 'SvgMongodb':
        return <SvgMongodb key={iconName} className={classes.icon} height="20px" width="60px" />;
      case 'SvgFirebase':
        return <SvgFirebase key={iconName} className={classes.icon} height="25px" width="25px" />;
      case 'SvgPostgresql':
        return <SvgPostgresql key={iconName} className={classes.icon} height="25px" width="25px" />;
      case 'SvgStrapi':
        return <SvgStrapi key={iconName} className={classes.icon} height="30px" width="25px" />;
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
    // <VisibilitySensor offset={{ bottom: 200 }} partialVisibility onChange={onChange}>
    // <Fade timeout={1000} in={componentIn}>
    <div className={classes.root}>
      <Container disableGutters={true} maxWidth="lg">
        <Grid container className={classes.gridContainer} spacing={2} justify="center">
          <Grid item xs={12}>
            <Typography className={classes.text} variant="h2" align="center">
              Projects
            </Typography>
            <Typography className={classes.text} variant="body1" align="center">
              The following projects have been key in facilitating my growth as a web developer. Each project utilizes a
              combination of research, experimentation and applied techniques or concepts that are critical for
              developing any successful experience. Each of these projects are deployed using Heroku's basic tier so the
              app may need a moment to wake on initial request.
            </Typography>
          </Grid>
          {projects.map((project) => {
            return (
              <Grid key={project.title} item className={classes.gridItem} xs={12} md={6}>
                <Card className={classes.cardRoot}>
                  {project.live && (
                    <a className={classes.anchorTag} href={project.live} aria-label={project.title}>
                      <CardMedia className={classes.linkableMedia} image={getImage(project.image)} />
                    </a>
                  )}
                  {!project.live && <CardMedia className={classes.media} image={getImage(project.image)} />}
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <div className={classes.icons}>
                        {project.icons.map((icon) => {
                          return getIcon(icon);
                        })}
                      </div>
                      <div className={classes.title}>
                        <Typography variant="h6" align="center">
                          {project.title}
                        </Typography>
                      </div>
                      <div className={classes.description}>
                        <Typography variant="body2" align="center">
                          {project.description}
                        </Typography>
                      </div>
                      <CardActions className={classes.cardFooter} disableSpacing={true}>
                        <Grid container justify="space-evenly" alignItems="center">
                          {project.live && (
                            <Grid item>
                              <a className={classes.projectLink} href={project.live} aria-label="project live link">
                                <LinkIcon />
                                <Typography className={classes.spacing} variant="caption">
                                  Live
                                </Typography>
                              </a>
                            </Grid>
                          )}
                          <Grid item>
                            <a
                              className={classes.projectLink}
                              href={project.source}
                              aria-label="project source code link"
                            >
                              <SvgGithub className={classes.icon} size="2x" />
                              <Typography className={classes.spacing} variant="caption">
                                Source
                              </Typography>
                            </a>
                          </Grid>
                        </Grid>
                      </CardActions>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
    //   </Fade>
    // </VisibilitySensor>
  );
};

export default Projects;
