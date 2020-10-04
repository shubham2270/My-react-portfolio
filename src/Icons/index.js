import React from "react";

import { ReactComponent as Html } from "../Assets/Icons/dev/html.svg";
import { ReactComponent as Css } from "../Assets/Icons/dev/css.svg";
import { ReactComponent as Javascript } from "../Assets/Icons/dev/javascript.svg";
import { ReactComponent as ReactIcon } from "../Assets/Icons/dev/react.svg";
import { ReactComponent as Redux } from "../Assets/Icons/dev/redux.svg";
import { ReactComponent as ReduxSaga } from "../Assets/Icons/dev/reduxSaga.svg";
import { ReactComponent as StyledComponent } from "../Assets/Icons/dev/styledComponents.svg";
import { ReactComponent as Flow } from "../Assets/Icons/dev/flow.svg";
import { ReactComponent as Git } from "../Assets/Icons/dev/git.svg";
import { ReactComponent as VsCode } from "../Assets/Icons/dev/vscode.svg";

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
