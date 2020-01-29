import React, { Fragment } from "react";
import img from "../img/bg.jpg";
import img2 from "../img/bg2.png";
import Page from "./Page";
import Secpage from "./Secpage";
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
        <Secpage position={"start"} bg={img}>
          <Work />
        </Secpage>
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
