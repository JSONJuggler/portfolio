import Head from 'next/head';
import { Fragment } from 'react';

import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Landing from '../components/Landing';
import Qualifications from '../components/Qualifications';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import CustomLink from '../components/CustomLink';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    //width: "100%",
  },
}));

const Home = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>Beau | home | developer</title>
        <meta
          name="description"
          content="Hi, I'm Beau Reescano, a Full Stack web developer. I create websites using the latest front-end and back-end technologies with a focus on React JS, Next JS, and Node JS."
        />
        <meta name="google-site-verification" content="x0Muns5pK71I3AK6b3XmS8zvBwcMpuSodHaI4MJqr-A" />
      </Head>
      <Landing />
      <Qualifications />
      <Container maxWidth="lg">
        <Projects />
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
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {  },
  };
}

export default Home;
