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
      <Landing />
      <Qualifications />
      <Container maxWidth="lg">
        <Projects projects={data.projects} />
        <ContactMe />
      </Container>
    </div>
  );
};

export async function getServerSideProps() {
  const dev = process.env.NODE_ENV !== "production";

  const baseUrl = dev
    ? "http://localhost:3000"
    : "https://jsonj-portfolio.herokuapp.com";

  const res = await axios.get(baseUrl + "/api/projectsStream");

  const data = res.data;

  return {
    props: { data },
  };
}

export default Home;
