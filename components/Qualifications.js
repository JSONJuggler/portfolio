import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";

const Qualifications = () => {
  return (
    <Fragment>
      <div>Languages:</div>
      <div>Javascript, HTML5, CSS, C#</div>
      <div>Frameworks and Technologies:</div>
      <div>React, NodeJS, CSS, C#</div>
      <FontAwesomeIcon icon={faJs} size="2x" />
    </Fragment>
  );
};

export default Qualifications;
