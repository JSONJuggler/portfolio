import React, { Fragment } from "react";
import { render } from "react-dom";
import { Darkenbg } from "../stylings/effects";
import {
  Innerparallax,
  Screenheight,
  Pageseperator,
  Blackbg
} from "../stylings/divs";
import { Parallax } from "react-parallax";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const Secpage = props => {
  return (
    <Fragment>
      <Parallax
        renderLayer={percentage => {
          if (percentage < 0.25) {
            console.log(percentage);
            return (
              <div>
                <div
                  style={{
                    position: "absolute",
                    background: `rgba(0, 0, 0, 1)`,
                    left: "0%",
                    top: "00%",
                    // transform: "translate(-50%,-50%)",
                    width: "100%",
                    height: "100%"
                  }}
                />
              </div>
            );
          } else {
            console.log(percentage);

            return (
              <div>
                <div
                  style={{
                    position: "absolute",
                    background: `rgba(0, 0, 0, ${1 - (percentage - 0.25) * 4})`,
                    left: "0%",
                    top: "00%",
                    // transform: "translate(-50%,-50%)",
                    width: "100%",
                    height: "100%"
                  }}
                />
              </div>
            );
          }
        }}
        strength={1000}
        bgImage={props.bg}
      >
        <div style={{ height: "100vh" }}></div>
        {/* <Darkenbg>
          <Darkenbg>
            <Screenheight>
              <Innerparallax>
                <p>Hello</p>
              </Innerparallax>
            </Screenheight>
          </Darkenbg>
        </Darkenbg> */}
      </Parallax>
    </Fragment>
  );
};

export default Secpage;
