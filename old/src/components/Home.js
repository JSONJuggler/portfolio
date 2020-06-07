import React, { Fragment } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: bold;
`;

// const P = styled.p`
//   font-size: 25px;
// `;

const Home = () => {
  return (
    <Fragment>
      <div>
        <H1>
          My name is Deleon Reescano and I am a MERN stack developer. I use
          Javascript to build interesting things.
        </H1>
      </div>

      {/* <div>
        <form>
          First name: <input type="text" />
          <button>Create</button>
          <Button kind="prim">Create</Button>
          <Button kind="secon">Create</Button>
          <Button>Create</Button>
        </form>
      </div> */}
    </Fragment>
  );
};

export default Home;
