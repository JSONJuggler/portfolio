import styled from "styled-components";

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
  background: white;
  padding: 20;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Innerlanding = styled.div`
  color: black;
  height: 250vh;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export { Screenheight, Innerparallax, Pageseperator, Blackbg };
