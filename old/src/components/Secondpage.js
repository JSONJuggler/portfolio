import React, { Fragment } from "react";
import { Darkenbg } from "../stylings/effects";
import {
  Screenheight,
  Pageseperator,
  Blackbg,
  Fadeonscroll,
  Secpagemain
} from "../stylings/divs";
import { Parallax } from "react-parallax";

const Secondpage = props => {
  return (
    <Fragment>
      <Blackbg>
        <Darkenbg>
          <Parallax bgImage={props.bg} strength={1000}>
            <Darkenbg>
              <Screenheight>
                <Fadeonscroll>
                  <Secpagemain position={props.position}>
                    {props.children}
                  </Secpagemain>
                </Fadeonscroll>
              </Screenheight>
            </Darkenbg>
          </Parallax>
        </Darkenbg>
      </Blackbg>
      <Pageseperator height={"15vh"}>
        <Darkenbg>
          <Darkenbg> </Darkenbg>
        </Darkenbg>
      </Pageseperator>
    </Fragment>
  );
};

export default Secondpage;
