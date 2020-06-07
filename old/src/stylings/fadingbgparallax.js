//this component has the fading background using parallax
import React, { Fragment, useState, useRef } from "react";
import { render } from "react-dom";
import { Darkenbg } from "../stylings/effects";
import {
  Secpagemain,
  Screenheight,
  Pageseperator,
  Blackbg
} from "../stylings/divs";
import { Parallax } from "react-parallax";
import styled, { css } from "styled-components";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Secpage = props => {
  return (
    <Fragment>
      <Parallax
        // fading background with scroll
        // renderLayer={percentage => {
        //   if (percentage < 0.25) {
        //     return (
        //       <div>
        //         <div
        //           style={{
        //             position: "absolute",
        //             background: `rgba(0, 0, 0, 1)`,
        //             left: "0%",
        //             top: "00%",
        //             // transform: "translate(-50%,-50%)",
        //             width: "100%",
        //             height: "100%"
        //           }}
        //         />
        //       </div>
        //     );
        //   } else {
        //     return (
        //       <div>
        //         <div
        //           style={{
        //             position: "absolute",
        //             background: `rgba(0, 0, 0, ${1 - (percentage - 0.25) * 4})`,
        //             left: "0%",
        //             top: "00%",
        //             width: "100%",
        //             height: "100%"
        //           }}
        //         />
        //       </div>
        //     );
        //   }
        // }}
        // strength={1000}
        bgImage={props.bg}
      >
        <Darkenbg>
          <Darkenbg>
            <Screenheight>
              <Secpagemain position={props.position}>
                <div>Hello</div>
              </Secpagemain>
            </Screenheight>
          </Darkenbg>
        </Darkenbg>
      </Parallax>
    </Fragment>
  );
};

export default Secpage;
