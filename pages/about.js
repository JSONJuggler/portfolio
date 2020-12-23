import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import Link from 'next/link';
import IconButton from '@material-ui/core/IconButton';

import ContactMe from '../components/ContactMe';
import Skills from '../components/Socials';
import Contact from '../components/Contact';
import CustomLink from '../components/CustomLink';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '70vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  about: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
  },
  bodyText: {
    width: '100%',
    marginTop: 'auto',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  container: {
    display: 'block',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      float: 'right',
    },
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  image: {
    borderRadius: '15%',
  },
  bodyDetails: {
    lineHeight: theme.spacing(0.3),
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
  bodyDetailsContact: {
    lineHeight: theme.spacing(0.3),
    textDecoration: 'underline',
  },
  bodyTitle: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
  skillsDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  skillsMobile: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  gridEntry: {
    marginBottom: theme.spacing(3),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textAlign: 'center',
  },
  gridContainer: {
    marginBottom: theme.spacing(3),
  },
  underline: {
    textDecoration: 'underline',
  },
}));

const about = () => {
  const classes = useStyles();

  return (
    <Fade timeout={1000} in={true}>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Head>
            <title>Beau | about | developer</title>
            <meta
              name="description"
              content="Check out my skills and see what I can do for you. Contact me with any questions you might have!"
            />
          </Head>
          <div className={classes.bodyText}>
            <Container disableGutters={true} maxWidth="md">
              <div className={classes.about}>
                <Typography className={classes.bodyTitle} variant="h4" gutterBottom>
                  <b>Hello again, I'm Beau</b>
                </Typography>
                <div className={classes.container}>
                  <div className={classes.imageContainer}>
                    <Image className={classes.image} width={350} height={320} src="/me.png" />
                  </div>
                  <Typography className={classes.bodyDetails} variant="h5" paragraph gutterBottom>
                    I’m sure you’ve already discovered that I am a web developer but that wasn’t always the case. I
                    started out as a physicist, completing my Bachelor's of Science at Rice University in 2016. I was
                    happy and excited being free to apply my critical thinking and learning abilities to come up with
                    solutions for some tough problems during and after my studies. The further along I went though, the
                    less intimate my solutions felt, almost as if they weren’t my own. For me, this was another problem
                    to solve. Fast forward a bit and here I am today!
                  </Typography>
                </div>
                <Typography className={classes.bodyDetails} variant="h5">
                  As a developer, I am in my element. I have the ultimate freedom to craft solutions to an absurd number
                  of unique problems by developing delightful user experiences! If you have a problem you'd like me to
                  solve or if you're just interested in chatting about my skills and tools listed below,
                  <Contact size="small">
                    <Typography className={classes.bodyDetailsContact} variant="h5">
                      <b>contact me!</b>
                    </Typography>
                  </Contact>
                </Typography>
              </div>
            </Container>
            <div className={classes.skillsMobile}>
              <Typography className={classes.gridEntry} variant="body1">
                <b>SKILLS</b>
              </Typography>
              <Grid container className={classes.gridContainer}>
                <Grid container item xs={12}>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Responsive and performant development across devices</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Rapid prototyping</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Cloud Computing</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Data consuption, manipulation, and visualization</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Restful API conventions</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Form handling and validation</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Web automation</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Web scraping</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Content Management</Typography>
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
              <Typography className={classes.gridEntry} variant="body1">
                <b>FRONT-END</b>
              </Typography>
              <Grid container className={classes.gridContainer}>
                <Grid container item xs={12}>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Javascript</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Typescript</Typography>
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
                    <Typography variant="body1">React Hook Form</Typography>
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
              <Typography className={classes.gridEntry} variant="body1">
                <b>BACK-END</b>
              </Typography>
              <Grid container className={classes.gridContainer}>
                <Grid container item xs={12}>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">NodeJS</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">wwwExpress</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Dokku</Typography>
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
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">MariaDB</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Sequelize</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Strapi</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Typography className={classes.gridEntry} variant="body1">
                <b>OTHER TOOLS</b>
              </Typography>
              <Grid container className={classes.gridContainer}>
                <Grid container item xs={12}>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">React Native</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">ElectronJS</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Git</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Heroku</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">AWS</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">NPM</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">VIM</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Command Line</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Puppeteer</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">WebSockets</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Rollbar</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">MATLAB</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Microsoft Office</Typography>
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
            <div className={classes.skillsDesktop}>
              <Grid container className={classes.gridContainer}>
                <Grid item xs={4} md={3}>
                  <Typography variant="body1">
                    <b>SKILLS</b>
                  </Typography>
                </Grid>
                <Grid container item xs={8} md={9}>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Responsive and performant development across devices</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Rapid prototyping</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Data consuption, manipulation, and visualization</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Restful API conventions</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Form handling and validation</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Web automation</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Web scraping</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Content Management</Typography>
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
                    <Typography variant="body1">Typescript</Typography>
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
                    <Typography variant="body1">React Hook Form</Typography>
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
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">MariaDB</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Sequelize</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Strapi</Typography>
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
                    <Typography variant="body1">React Native</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">ElectronJS</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Git</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Heroku</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">AWS</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">NPM</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">VIM</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Command Line</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Puppeteer</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">WebSockets</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Rollbar</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">MATLAB</Typography>
                  </Grid>
                  <Grid item className={classes.gridEntry} xs={6} md={4}>
                    <Typography variant="body1">Microsoft Office</Typography>
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
        </div>
        <Grid container spacing={2} justify="space-around" alignItems="center">
          <Grid item xs={true} className={classes.titleDesktop}>
            <CustomLink href="/resume" title="To Resume">
              <Typography className={classes.underline} variant="h4" align="center">
                Checkout my resume here!
              </Typography>
            </CustomLink>
          </Grid>
        </Grid>
        <ContactMe />
      </Container>
    </Fade>
  );
};

export default about;
