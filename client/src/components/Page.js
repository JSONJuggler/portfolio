import React, { Fragment } from "react";
import { Darkenbg } from "../stylings/effects";
import {
  Innerparallax,
  Screenheight,
  Pageseperator,
  Blackbg
} from "../stylings/divs";
import { Parallax } from "react-parallax";

const Page = props => {
  return (
    <Fragment>
      <Blackbg>
        <Darkenbg>
          <Parallax bgImage={props.bg} strength={1000}>
            <Darkenbg>
              <Screenheight>
                <Innerparallax>{props.children}</Innerparallax>
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

export default Page;
