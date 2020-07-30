import Head from "next/head";
import { Fragment } from "react";

import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Landing from "../components/Landing";
import Qualifications from "../components/Qualifications";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
        <meta property="og:title" content="Beau Reescano's Portfolio" />
        <meta
          property="og:description"
          content="Hi, I'm Beau Reescano, a full stack web developer"
        />
        <meta property="og:url" content="https://webdeveloperbeau.com" />
        <meta property="og:image" content="/portfoliopic.png" />
        <meta property="og:site_name" content="webdeveloperbeau.com" />
        <meta property="og:imageWidth" content="2086" />
        <meta property="og:imageHeight" content="1538" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="JSONJuggler" />
        <meta
          name="google-site-verification"
          content="x0Muns5pK71I3AK6b3XmS8zvBwcMpuSodHaI4MJqr-A"
        />
      </Head>
      <Landing />
      <Qualifications />
      <Container maxWidth="lg">
        <Projects projects={data.projects} />
        <ContactMe />
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  const dev = process.env.NODE_ENV !== "production";

  const baseUrl = dev
    ? "http://localhost:3000"
    : "https://portfolio-ten-beta.vercel.app";

  const res = await axios.get(baseUrl + "/api/projectsStream");

  const data = res.data;

  return {
    props: { data },
  };
}

export default Home;
