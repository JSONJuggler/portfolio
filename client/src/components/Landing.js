import React, { Fragment } from "react";
import Button from "../stylings/button";

export const Landing = () => {
  return (
    <Fragment>
      <form>
        First name: <input type="text" />
        <button>Create</button>
        <Button kind="prim">Create</Button>
        <Button kind="secon">Create</Button>
        <Button>Create</Button>
      </form>
    </Fragment>
  );
};
