import { Fragment } from "react";

import Landing from "../components/Landing";
import Qualifications from "../components/Qualifications";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Qualifications />
      <Projects />
      <ContactMe />
    </Fragment>
  );
};

export default Home;
