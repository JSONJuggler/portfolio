import React, { Fragment } from "react";
import img from "../img/bg.jpg";
import Page from "./Page";
import Secondpage from "./Secondpage";
import Home from "./Home";
import Work from "./Work";
import Contact from "./Contact";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left"
};

const Landing = () => {
  return (
    <Fragment>
      <div style={styles}>
        <Page bg={img}>
          <Home />
        </Page>
        <Secondpage position={"start"}>
          <Work />
        </Secondpage>
        <Page position={"center"}>
          <Work />
        </Page>
        <Page position={"center"}>
          <Contact />
        </Page>
      </div>
    </Fragment>
  );
};

export default Landing;
