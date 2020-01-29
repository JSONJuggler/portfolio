import React, { Fragment } from "react";
import Button from "../stylings/buttons";

const Content1 = () => {
  return (
    <Fragment>
      <h1>Deleon Reescano</h1>
      <p>Welcome to my website!</p>
      <div>
        <form>
          First name: <input type="text" />
          <button>Create</button>
          <Button kind="prim">Create</Button>
          <Button kind="secon">Create</Button>
          <Button>Create</Button>
        </form>
      </div>
    </Fragment>
  );
};

export default Content1;
