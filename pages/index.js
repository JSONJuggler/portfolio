import { Fragment } from "react";
import Container from "@material-ui/core/Container";

import Landing from "../components/Landing";
import Qualifications from "../components/Qualifications";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

const Home = () => {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Landing />
        <Qualifications />
        <Projects />
        <ContactMe />
      </Container>
    </Fragment>
  );
};

export default Home;
