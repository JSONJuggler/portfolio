import Head from "next/head";
import { Fragment } from "react";

import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Landing from "../components/Landing";
import Qualifications from "../components/Qualifications";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    //minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(7),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10.5),
      marginBottom: theme.spacing(-3),
    },
  },
  iframe: {
    width: "90%",
    height: "80vh",
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
        <meta property="og:title" content="Beau Reescano's Resume" />
        <meta
          property="og:description"
          content="Hi, I'm Beau Reescano, a full stack web developer and this is my resume."
        />
        <meta property="og:url" content="https://webdeveloperbeau.com/resume" />
        <meta
          property="og:image"
          content="https://webdeveloperbeau.com/resumepic.png"
        />
        <meta property="og:image" content="/resumepic.png" />
        <meta property="og:site_name" content="webdeveloperbeau.com" />
        <meta property="og:imageWidth" content="2458" />
        <meta property="og:imageHeight" content="1566" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="JSONJuggler" />
      </Head>
      <Typography variant="caption" align="center">
        <em>
          Powered by PDF.js. Document may not load if accessed from the Brave
          mobile web browser
        </em>
      </Typography>
      <iframe
        className={classes.iframe}
        src="/resume/viewer.html"
        title="Beau Reescano's Resume"
      ></iframe>
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

export default Resume;
