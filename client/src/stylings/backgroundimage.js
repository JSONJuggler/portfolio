import styled from "styled-components";

// const Imagecontent = styled.div`
//   position: relative;
//   background: url(${props => props.img}) no-repeat center center/cover;
// height: 100vh;
//   background-color: rgba(0, 0, 0, 7);
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `;

const Backgroundimage = styled.div`
  background: url(${props => props.img}) no-repeat center center/cover;
  /* height: 100vh; */
  /* height: ${props => props.height}; */
  /* background-attachment: fixed; */
`;

export default Backgroundimage;
