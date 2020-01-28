import React, { Fragment } from "react";
import Button from "../stylings/buttons";
// import Innerlanding from "../stylings/innerlanding";
import img from "../img/bk.jpeg";
import img2 from "../img/background.jpeg";
import { Innerparallax, Screenheight } from "../stylings/divs";
import { Parallax, Background } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Landing = () => {
  return (
    <Fragment>
      <Parallax style={styles}>
        <Parallax bgImage={img} strength={500}>
          <Screenheight>
            <Innerparallax>Hello </Innerparallax>
          </Screenheight>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage={img2} strength={500}>
          <Screenheight>
            <Innerparallax>
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
            </Innerparallax>
          </Screenheight>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage={img} strength={500}>
          <Screenheight>
            <Innerparallax>Goodbye!</Innerparallax>
          </Screenheight>
        </Parallax>
      </Parallax>
    </Fragment>
  );
};

export default Landing;
