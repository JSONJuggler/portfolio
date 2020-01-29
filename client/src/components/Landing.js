import React, { Fragment } from "react";
import img from "../img/bg.jpg";
import Page from "./Page";
import Home from "./Home";
import Work from "./Work";
import Contact from "./Contact";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Landing = () => {
  return (
    <Fragment>
      <div style={styles}>
        <Page bg={img}>
          <Home />
        </Page>
        <Page>
          <Work />
        </Page>
        <Page>
          <Work />
        </Page>
        <Page>
          <Contact />
        </Page>
      </div>
    </Fragment>
  );
};

export default Landing;
