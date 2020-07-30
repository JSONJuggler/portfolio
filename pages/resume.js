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
    //minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(11.5),
    width: "100%",
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
      </Head>
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
