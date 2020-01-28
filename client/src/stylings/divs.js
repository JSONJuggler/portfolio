import styled from "styled-components";

const Screenheight = styled.div`
  height: 100vh;
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

export { Screenheight, Innerparallax };
