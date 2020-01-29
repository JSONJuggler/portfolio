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

const Secpagediv = styled.div`
  /* uses scroll position to get scrollposition and adjust opacity */
  ${props => {
      
    const [pos, setPos] = useState({})

    useScrollPosition(
      ({ prevPos, currPos }) => {
        setPos(currPos);
      },
      [pos]
    );
    // BASED ON TOTAL NUMBER OF PAGES SINCE EACH PAGE IS 100VH. FOR
    // FOR 4 PAGES, DIVIDE BY 650 TO GET % OF SECOND PAGE
    // console.log(Math.abs(pos.y) / 650);
    const percentage = Math.abs(pos.y) / 650;
    props.percentage = percentage;
  }};
  opacity: ${props => {
    if (props.percentage < 0.38) {
      //   return "0";
      return "0";
    } else {
      return `${(props.percentage - 0.38) * 4}`;
    }
  }};
  font-size: 100px;
`;

const Secpage = props => {
  return (
    <Fragment>
      <Parallax
        renderLayer={percentage => {
          if (percentage < 0.25) {
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
            return (
              <div>
                <div
                  style={{
                    position: "absolute",
                    background: `rgba(0, 0, 0, ${1 - (percentage - 0.25) * 4})`,
                    left: "0%",
                    top: "00%",
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
        <Darkenbg>
          <Darkenbg>
            <Screenheight>
              <Secpagemain position={props.position}>
                <Secpagediv>Hello</Secpagediv>
              </Secpagemain>
            </Screenheight>
          </Darkenbg>
        </Darkenbg>
      </Parallax>
    </Fragment>
  );
};

export default Secpage;
