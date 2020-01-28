import styled from "styled-components";

const Darkenbg = styled.section`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
`;

const Static = styled.div`
  background: red;
`;

// const Bgimage = styled.section`
//   ::after {
//     background: url(${props => props.img});
//   }
// `;

const Bgimage = styled.section`
  background: url(${props => props.img});
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Parawrapper = styled.section`
  /* The height needs to be set to a fixed value for the effect to work.
   * 100vh is the full height of the viewport. */
  height: 100vh;
  /* The scaling of the images would add a horizontal scrollbar, so disable x overflow. */
  overflow-x: hidden;
  /* Enable scrolling on the page. */
  overflow-y: auto;
  /* Set the perspective to 2px. This is essentailly the simulated distance from the viewport to transformed objects.*/
  perspective: 2px;
`;

// const Parasection = styled.section`
//   /* Needed for children to be absolutely positioned relative to the parent. */
//   position: relative;
//   /* The height of the container. Must be set, but it doesn't really matter what the value is. */
//   height: 100vh;

//   /* For text formatting. */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   text-shadow: 0 0 5px #000;
// `;

const Parasection = styled.section`
  /* Needed for children to be absolutely positioned relative to the parent. */
  /* position: relative; */
  /* The height of the container. Must be set, but it doesn't really matter what the value is. */
  height: ${props => props.height};

  /* For text formatting. */
  /* display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 0 0 5px #000; */
`;

const Parallax = styled.section`
  ::after {
    /* Display and position the pseudo-element */
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    /* Move the pseudo-element back away from the camera,
   * then scale it back up to fill the viewport.
   * Because the pseudo-element is further away, it appears to move more slowly, like in real life. */
    transform: translateZ(-1px) scale(1.5);
    /* Force the background image to fill the whole element. */
    background-size: 100%;
    /* Keep the image from overlapping sibling elements. */
    z-index: -1;
  }
`;

export { Darkenbg, Static, Bgimage, Parawrapper, Parasection, Parallax };
