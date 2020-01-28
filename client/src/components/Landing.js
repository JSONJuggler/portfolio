import React, { Fragment } from "react";
import Button from "../stylings/button";
// import Innerlanding from "../stylings/innerlanding";
import img from "../img/bk.jpeg";
import img2 from "../img/background.jpeg";
import { Bgimage } from "../stylings/effects";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

const Landing = () => {
  return (
    <Fragment>
      {/* <ParallaxBanner
        layers={[
          {
            image:
              "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
          }
        ]}
        style={{ height: "100px" }}
      >
        <h1>Hello</h1>
      </ParallaxBanner> */}
      <Parallax y={[20, -20]}>
        <Bgimage img={img} />
      </Parallax>
      <Parallax y={[0, 50]}>
        <h1>Deleon Reescano</h1>
        <p>Welcome to my website!</p>
        <div>
          <form>
            First name: <input type="text" />
            <button>Create</button>
            <Button kind="prim">Create</Button>
            <Button kind="secon">Create</Button>
            <Button>Create</Button>
          </form>
        </div>
      </Parallax>
      <Parallax y={[0, 0]}>
        <Bgimage img={img2}></Bgimage>
      </Parallax>
    </Fragment>
  );
};

export default Landing;
