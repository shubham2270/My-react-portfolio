import React from "react";

import Html from "../iconFile/dev/html.svg";
import Css from "../iconFile/dev/css.svg";
import Javascript from "../iconFile/dev/javascript.svg";
import ReactIcon from "../iconFile/dev/react.svg";
import Redux from "../iconFile/dev/redux.svg";
import ReduxSaga from "../iconFile/dev/reduxSaga.svg";
import StyledComponent from "../iconFile/dev/styledComponents.svg";
import Flow from "../iconFile/dev/flow.svg";
import Git from "../iconFile/dev/git.svg";
import VsCode from "../iconFile/dev/vscode.svg";

const Icons = ({ type }) => {
  switch (type) {
    case "html":
      return <Html />;
    case "css":
      return <Css />;
    case "javascript":
      return <Javascript />;
    case "reactIcon":
      return <ReactIcon />;
    case "redux":
      return <Redux />;
    case "reduxSaga":
      return <ReduxSaga />;
    case "styledComponent":
      return <StyledComponent />;
    case "flow":
      return <Flow />;
    case "git":
      return <Git />;
    case "vsCode":
      return <VsCode />;
    default:
      return "";
  }
};

export default Icons;
