import React, { Fragment } from "react";
import img from "../img/bg.jpg";
import Page from "./Page";
import Content1 from "./Content1";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Landing = () => {
  return (
    <Fragment>
      <div style={styles}>
        <Page bg={img} />
        <Page>
          <Content1 />
        </Page>
        <Page />
        <Page />
      </div>
    </Fragment>
  );
};

export default Landing;
