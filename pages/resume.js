import Head from 'next/head';
import { Fragment } from 'react';

import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Landing from '../components/Landing';
import Qualifications from '../components/Qualifications';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(7),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(10.5),
      marginBottom: theme.spacing(-3),
    },
  },
  iframe: {
    width: '90%',
    flexGrow: 1,
  },
}));

const Resume = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>Beau | resume | developer</title>
        <meta
          name="description"
          content="Hi, I'm Beau Reescano, a Full Stack web developer and this is my resume. I create websites using the latest front-end and back-end technologies with a focus on React JS, Next JS, and Node JS."
        />
      </Head>
      <Typography variant="caption" align="center">
        <em>Powered by PDF.js. Document may not load if accessed from the Brave mobile web browser</em>
      </Typography>
      <iframe className={classes.iframe} src="/resume/viewer.html" title="Beau Reescano's Resume"></iframe>
    </div>
  );
};

export async function getStaticProps() {
  const dev = process.env.NODE_ENV !== 'production';

  const baseUrl = dev ? 'http://localhost:3000' : 'https://portfolio-ten-beta.vercel.app';

  const res = await axios.get(baseUrl + '/api/projectsStream');

  const data = res.data;

  return {
    props: { data },
  };
}

export default Resume;
