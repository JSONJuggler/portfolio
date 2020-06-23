import { Fragment } from "react";

import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Landing from "../components/Landing";
import Qualifications from "../components/Qualifications";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //width: "100%",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Landing />
      <Qualifications />
      <Container maxWidth="lg">
        <Projects />
        <ContactMe />
      </Container>
    </div>
  );
};

export default Home;
