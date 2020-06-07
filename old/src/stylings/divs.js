import styled from "styled-components";
import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Screenheight = styled.div`
  height: 100vh;
`;

const Pageseperator = styled.div`
  height: ${props => props.height};
  background-color: #050505;
  margin-top: -4vh;
  margin-bottom: -8vh;
`;

const Blackbg = styled.div`
  height: 100vh;
  background-color: #050505;
`;

const Innerparallax = styled.div`
  height: 100vh;
  display: flex;
  justify-content: ${props => props.position};
  align-items: center;
  color: #5e9bc9;
  padding: 20px;
`;

const Fadeonscroll = styled.div`
  /* uses scroll position to get scrollposition and adjust opacity */
  ${props => {
    const [pos, setPos] = useState({});

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
`;

const Secpagemain = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.position};
  align-items: center;
  color: #5e9bc9;
  padding: 20px;
`;

// const Innerlanding = styled.div`
//   color: black;
//   height: 250vh;
//   width: 80%;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
// `;

export {
  Screenheight,
  Innerparallax,
  Pageseperator,
  Blackbg,
  Secpagemain,
  Fadeonscroll
};
