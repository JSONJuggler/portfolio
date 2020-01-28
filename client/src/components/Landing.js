import React, { Fragment } from "react";
import Button from "../stylings/button";
// import Innerlanding from "../stylings/innerlanding";
import img from "../img/bk.jpeg";
import img2 from "../img/background.jpeg";
import {
  Static,
  Bgimage,
  Parawrapper,
  Parasection,
  Parallax
} from "../stylings/effects";
// import Backgroundimage from "../stylings/backgroundimage";

export const Landing = () => {
  return (
    <Fragment>
      <Parawrapper>
        <Bgimage img={img}>
          <Parallax>
            <Parasection>
              <h1>Such</h1>
            </Parasection>
          </Parallax>
        </Bgimage>
        <Static>
          <Parasection>
            <h1 className="x-large">Deleon Reescano</h1>
            <p className="lead">Welcome to my website!</p>
            <div className="buttons">
              <form>
                First name: <input type="text" />
                <button>Create</button>
                <Button kind="prim">Create</Button>
                <Button kind="secon">Create</Button>
                <Button>Create</Button>
              </form>
            </div>
          </Parasection>
        </Static>
        <Bgimage img={img2}>
          <Parallax>
            <Parasection>
              <h1>HAPPY</h1>
            </Parasection>
          </Parallax>
        </Bgimage>
      </Parawrapper>
    </Fragment>
  );
};
